import axios from 'axios';
import classNames from 'classnames';
import numeral from 'numeral';
import React, { PureComponent } from 'react';
import Select from 'react-select';

import './value-calculator.scss';

const propertyTypeValues = [
  {value: 'Café/Restaurants', label: 'Café / Restaurants'},
  {value: 'Education', label: 'Education'},
  {value: 'EnclosedAndStripMalls', label: 'Enclosed and strip malls'},
  {value: 'Grocery/Convenience Store', label: 'Grocery / Convenience Store'},
  {value: 'Healthcare', label: 'Healthcare (other)'},
  {value: 'Inpatient Hospital', label: 'Inpatient Hospital'},
  {value: 'Lodging', label: 'Lodging'},
  {value: 'Multifamily', label: 'Multifamily'},
  {value: 'Office', label: 'Office'},
  {value: 'Outpatient Clinic', label: 'Outpatient Clinic'},
  {value: 'Religious worship', label: 'Religious worship'},
  {value: 'Retail (other than mall)', label: 'Retail (other than mall)'},
  {value: 'Vacant', label: 'Vacant'},
  {value: 'Warehouse and storage', label: 'Warehouse and storage'},
];

const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#993333',
    primary75: '#c55252',
    primary50: '#d88c8c',
    primary25: '#ebc5c5',
  }
})

class ValueCalculator extends PureComponent {

  constructor(props) {
    super(props);

    this.resultsRef = React.createRef();

    this.state = {
      loading: false,
      buildingOwner: 'Owner',
      propertyType: '',
      leaseTerm: '',
      lightingUpgrade: '',
      sqft: '',
      monthlyEnergyCost: '',
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleFieldChange(field, value) {
    this.setState(() => ({
      [field]: value
    }))
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.setState(() => ({
      loading: true,
    }))
    const {
      buildingOwner = 'Owner',
      propertyType,
      leaseTerm,
      lightingUpgrade,
      sqft,
      monthlyEnergyCost
    } = this.state;
    const _sqft = sqft && parseInt(sqft.replace(/,/g, ''), 10);
    const resp = await axios.post('https://unety.io/.netlify/functions/value-calculator', {
      buildingOwner,
      propertyType: propertyType && propertyType.value,
      leaseTerm: leaseTerm && leaseTerm.value,
      lightingUpgrade: lightingUpgrade,
      sqft: _sqft && Math.max(1000, Math.round(_sqft / 1000) * 1000),
      monthlyEnergyCost: monthlyEnergyCost && parseInt(monthlyEnergyCost.replace(/,/g, ''), 10)
    })


    setTimeout(() => this.resultsRef.current.scrollIntoView(false), 300 );

    this.setState(() => ({
      annualEnergySavings: resp.data.annualEnergySavings,
      paceCanFinance: resp.data.paceCanFinance,
      pacePayments: resp.data.pacePayments,
      paceSavings: resp.data.paceSavings,
      loading: false,
    }))
  }

  render() {

    const {
      annualEnergySavings,
      buildingOwner,
      propertyType,
      leaseTerm,
      loading,
      lightingUpgrade,
      paceCanFinance,
      sqft,
      monthlyEnergyCost,
    } = this.state

    const hasResults = typeof annualEnergySavings === 'number';

    const formClasses = classNames('up-value-calculator__form', {
      'up-value-calculator__form--loading': loading
    })

    const resultsClasses = classNames('up-value-calculator__results', {
      'up-value-calculator__results--active': !loading && hasResults
    });


    return (
      <div className="up-value-calculator">
        <h2 className="up-value-calculator__title">Savings calculator</h2>
        <p className="up-value-calculator__description">
          See how much you can gain when you finance through Unety
        </p>
        <div className="up-value-calculator__content">
          <form className={formClasses} onSubmit={this.handleSubmit}>
            { buildingOwner.value === 'Tenant' && (
              <div className="up-value-calculator__field">
                <label
                  htmlFor="up-value-calculator__label--buildingOwner"
                  className="up-value-calculator__label"
                >
                  Lease term
                </label>
                <div className="up-value-calculator__input__inset up-value-calculator__input__inset--reverse">
                  <input
                    className="up-value-calculator__input"
                    placeholder="10"
                    required
                    type="text"
                    value={leaseTerm}
                    onChange={(evt) => this.handleFieldChange('leaseTerm', evt.target.value) }
                  />
                  <span className="up-value-calculator__input__inset__label">
                    Years
                  </span>
                </div>
              </div>
            )}
            <div className="up-value-calculator__field" style={{position: 'relative', zIndex: 9}}>
              <label
                htmlFor="up-value-calculator__label--propertyType"
                className="up-value-calculator__label"
              >
                Property type
              </label>
              <Select
                id="up-value-calculator__label--propertyType"
                required
                theme={selectTheme}
                value={propertyType}
                onChange={this.handleFieldChange.bind(this, 'propertyType')}
                options={propertyTypeValues}
              />
              <input
                tabIndex={-1}
                autoComplete="off"
                style={{ opacity: 0, height: 0 }}
                value={propertyType}
                required
              />
            </div>
            <div className="up-value-calculator__field">
              <label
                htmlFor="up-value-calculator__label--buildingOwner"
                className="up-value-calculator__label"
              >
                Your gross square footage
              </label>
              <div className="up-value-calculator__input__inset up-value-calculator__input__inset--reverse">
                <input
                  className="up-value-calculator__input"
                  required
                  type="text"
                  value={sqft && numeral(sqft).format('0,0')}
                  onChange={(evt) => this.handleFieldChange('sqft', evt.target.value) }
                />
                <span className="up-value-calculator__input__inset__label">
                  sqft
                </span>
              </div>
            </div>
            <div className="up-value-calculator__field">
              <label
                htmlFor="up-value-calculator__label--buildingOwner"
                className="up-value-calculator__label"
              >
                Last month's total energy bill (gas & electric)
              </label>
              <div className="up-value-calculator__input__inset">
                <input
                  className="up-value-calculator__input"
                  required
                  type="text"
                  value={monthlyEnergyCost && numeral(monthlyEnergyCost).format('0,0')}
                  onChange={(evt) => this.handleFieldChange('monthlyEnergyCost', evt.target.value) }
                />
                <span className="up-value-calculator__input__inset__label">
                  $
                </span>
              </div>
            </div>
            <div className="up-value-calculator__field up-value-calculator__field--checkbox">
              <div className="up-value-calculator__checkbox">
                <input
                  className="up-value-calculator__input"
                  id="up-value-calculator__label--lightingUpgrade"
                  type="checkbox"
                  value={lightingUpgrade}
                  onChange={(evt) => this.handleFieldChange('lightingUpgrade', evt.target.checked) }
                />
                <div className="up-value-calculator__checkbox__display" />
              </div>
              <label
                htmlFor="up-value-calculator__label--lightingUpgrade"
                className="up-value-calculator__label"
              >
                There has been a lighting upgrade in the last 5 years
              </label>
            </div>
            <div className="up-value-calculator__actions">
              <button
                className="up-value-calculator__submit"
                disabled={loading}
                type="submit"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
          <div ref={this.resultsRef} className={resultsClasses}>
            <div className="up-value-calculator__results__content">

              <div className="up-value-calculator__results_values">
                <div className="up-value-calculator__results__title">
                  Your results
                </div>
                {hasResults && annualEnergySavings > 250 ? (
                  <div>
                    <div className="up-value-calculator__results__item">
                      <div className="up-value-calculator__results__item__label">
                        Annual Energy Savings:
                      </div>
                      <div className="up-value-calculator__results__item__value">
                        {numeral(Math.abs(annualEnergySavings)).format('$0,0')}
                      </div>
                    </div>
                    <div className="up-value-calculator__results__item">
                      <div className="up-value-calculator__results__item__label">
                        With upgrade investments of
                      </div>
                      <div className="up-value-calculator__results__item__value">
                        {numeral(paceCanFinance).format('$0,0')}
                      </div>
                    </div>
                    <div className="up-value-calculator__results__item">
                      <div className="up-value-calculator__results__item__label">
                        Total Lifetime Savings:
                      </div>
                      <div className="up-value-calculator__results__item__value">
                        {numeral(Math.abs(annualEnergySavings * 15)).format('$0,0')}
                      </div>
                    </div>
                  </div>
                ): (
                  <div className="up-value-calculator__no-results">
                    More information is needed
                  </div>
                )}
              </div>
              <div className="up-value-calculator__results__actions">
                <div>
                  {hasResults ? 'Dont Wait!' : 'Contact a contractor to learn more'}

                </div>
                <a
                  className="up-value-calculator__results__cta"
                  href="/requestdemo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Demo
                </a> 
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ValueCalculator;
