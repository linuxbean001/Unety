import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from './Popup'; // Adjust the path as needed

import Browser from './browser';
import Mobile from './mobile';

import './product-display.scss';

class ProductDisplay extends PureComponent {
  static propTypes = {
    productFeatures: PropTypes.array,
    reverseLayout: PropTypes.bool,
  };

  static defaultProps = {
    productFeatures: [],
    reverseLayout: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      activeProductIndex: 0,
      showPopup: false,
    };

    this.handleNavOver = this.handleNavOver.bind(this);
    this.setProductIndex = this.setProductIndex.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  handleNavOver(activeIndex) {
    this.setState({ activeIndex });
  }

  togglePopup() {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  }

  setProductIndex(isNext = true) {
    const { activeProductIndex } = this.state;
    const { productFeatures } = this.props;
    let newIndex = isNext ? activeProductIndex + 1 : activeProductIndex - 1;

    if (newIndex > productFeatures.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = productFeatures.length - 1;
    }

    this.setState({
      activeProductIndex: newIndex,
    });

    setTimeout(() => {
      this.setState({
        activeIndex: 0,
      });
    }, 250);
  }

  render() {
    const { productFeatures, reverseLayout } = this.props;
    const { activeIndex, activeProductIndex, showPopup } = this.state;

    const gridClasses = classNames('up-lender-product__grid', {
      'up-lender-product__grid--reverse': reverseLayout,
    });

    const nextLabel =
      activeProductIndex + 1 > productFeatures.length - 1
        ? productFeatures[0].title
        : productFeatures[activeProductIndex + 1].title;

    return (
      <div className="up-lender-product">
        <div className="up-lender-product__inner">
          <div className="up-lender-product__track">
            {productFeatures.map(
              ({ features, subTitle, title }, i) => {
                  console.log("dsds",productFeatures[activeProductIndex].title)
                const itemClasses = classNames(
                  'up-lender-product__track__item',
                  {
                    'up-lender-product__track__item--active':
                      activeProductIndex === i,
                    'up-lender-product__track__item--waiting':
                      activeProductIndex !== i,
                  }
                );
                return (
                  <div key={i} className={itemClasses}>
                    <div className="up-lender-product__title up-lender-product__title--mobile">
                      {subTitle && <span>{subTitle}</span>}
                      {title}
                    </div>
                    <div className={gridClasses}>
                      <div className="up-lender-product__nav">
                        <div className="up-lender-product__title up-lender-product__title--desktop">
                          {subTitle && <span>{subTitle}</span>}
                          {title}
                        </div>
                        {features.map(({ description, label }, fi) => {
                          const itemClassName = classNames(
                            'up-lender-product__nav__item',
                            {
                              'up-lender-product__nav__item--active':
                                fi === activeIndex,
                            }
                          );
                          return (
                            <div key={fi} className={itemClassName}>
                              <button
                                className="up-lender-product__nav__item__label"
                                onClick={() => this.handleNavOver(fi)}
                              >
                                {label}
                              </button>
                              <div className="up-lender-product__nav__item__desc">
                                {description}
                              </div>
                            </div>
                          );
                        })}
                        {productFeatures.length > 1 && (
                          <div className="up-lender-product__actions">
                            <button
                              className="up-lender-product__actions__cta"
                              onClick={this.setProductIndex}
                            >
                              Next:&nbsp;<strong>{nextLabel}</strong>
                              <svg viewBox="0 0 477.175 477.175">
                                <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z" />
                              </svg>
                            </button>
                          </div>
                        )}
                        
                      </div>

                      <div className="up-lender-product__screenshots">
                        {features.map(({ mobileScreenshot, screenshot }, i) => {
                          const className = classNames(
                            'up-lender-product__screenshot',
                            {
                              'up-lender-product__screenshot--active': i === activeIndex,
                            }
                          );
                          return (
                            <div key={i} className={className}>
                              <Browser>
                                <img src={screenshot} alt="" />
                                {/*<button className="videobutton" onClick={this.togglePopup}>
                                ▶&nbsp;<br /> Play Demo Video
                          </button> */}
                              </Browser>
                              <button className="videobutton" onClick={this.togglePopup}>
                                ▶&nbsp;<br /> Play Demo Video
                              </button> 
                              {mobileScreenshot && (
                                <div className="up-lender-product__screenshot__mobile">
                                  <Mobile>
                                    <img src={mobileScreenshot} alt="" />
                                  </Mobile>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <Popup
          isVisible={showPopup}
          onClose={this.togglePopup}
          title={productFeatures[activeProductIndex].title}
          videoSrc={
            productFeatures[activeProductIndex].title !== 'Sustainable Financiers'
              ? 'https://drive.google.com/file/d/14rxkBxa6s8NNgo7x5JCDOlS_WWsglsZe/preview'
              : 'https://drive.google.com/file/d/1WBzRepg9FKFWsdzxiy09ZCpfYefpH5qe/preview'
          }
        />
        
      </div>
    );
  }
}

export default ProductDisplay;
