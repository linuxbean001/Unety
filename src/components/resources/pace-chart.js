import React from 'react';
import ReactTooltip from 'react-tooltip'

import { paceChartData } from 'constants/pace-chart-data';

import './pace-chart.scss';

const PaceChartCell = ({
  value
}) => {
  if (value === 1) {
    return (
      <div className="up-pace-chart__cell up-pace-chart__cell--available">
        <svg width="15" height="15x" viewBox="0 0 488.878 488.878">
          <polygon fill="#000" points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306
        144.423,442.58 488.878,98.123 437.055,46.298"/>
        </svg>
      </div>
    )
  }

  if (value === -1) {
    return (
      <div className="up-pace-chart__cell up-pace-chart__cell--unavailable">
        <svg width="15" height="15" viewBox="0 0 357 357">
          <polygon fill="#000" points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
        214.2,178.5"/>
        </svg>
      </div>
    )
  }

  if (value === 0) {
    return (
    <div className="up-pace-chart__cell up-pace-chart__cell--warning">
      <svg width="15" height="15" viewBox="0 0 512 512">
        <g>
          <g>
            <path d="M505.403,406.394L295.389,58.102c-8.274-13.721-23.367-22.245-39.39-22.245c-16.023,0-31.116,8.524-39.391,22.246
        L6.595,406.394c-8.551,14.182-8.804,31.95-0.661,46.37c8.145,14.42,23.491,23.378,40.051,23.378h420.028
        c16.56,0,31.907-8.958,40.052-23.379C514.208,438.342,513.955,420.574,505.403,406.394z M477.039,436.372
        c-2.242,3.969-6.467,6.436-11.026,6.436H45.985c-4.559,0-8.784-2.466-11.025-6.435c-2.242-3.97-2.172-8.862,0.181-12.765
        L245.156,75.316c2.278-3.777,6.433-6.124,10.844-6.124c4.41,0,8.565,2.347,10.843,6.124l210.013,348.292
        C479.211,427.512,479.281,432.403,477.039,436.372z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M256.154,173.005c-12.68,0-22.576,6.804-22.576,18.866c0,36.802,4.329,89.686,4.329,126.489
        c0.001,9.587,8.352,13.607,18.248,13.607c7.422,0,17.937-4.02,17.937-13.607c0-36.802,4.329-89.686,4.329-126.489
        C278.421,179.81,268.216,173.005,256.154,173.005z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M256.465,353.306c-13.607,0-23.814,10.824-23.814,23.814c0,12.68,10.206,23.814,23.814,23.814
        c12.68,0,23.505-11.134,23.505-23.814C279.97,364.13,269.144,353.306,256.465,353.306z"/>
          </g>
        </g>
      </svg>
    </div>
    )
  }

  return (
    <div className="up-pace-chart__cell">
      {value}
    </div>
  )
}

const PaceChart = () => {
  return (
    <div className="up-pace-chart">
      <div className="up-pace-chart__inner">
        <div className="up-pace-chart__title">
          <span>Your Options</span>
          Pace VS other funding options
        </div>
        <div className="up-pace-chart__row up-pace-chart__row--header">
          <div />
          <div>PACE</div>
          <div>New Mortgage</div>
          <div>Vendor Finance</div>
          <div>Company Cash</div>
        </div>
        {paceChartData.map(({name, options, tooltip}) => {
          const {
            companyCash,
            newMortgage,
            pace,
            vendorFinance,
          } = options;

          return (
            <div className="up-pace-chart__row">
              <div
                className="up-pace-chart__cell up-pace-chart__cell--name"
                onMouseEnter={(evt) => ReactTooltip.show(evt.target) }
                onMouseLeave={(evt) => ReactTooltip.hide(evt.target) }
                data-tip={tooltip}
              >
                <svg className="up-pace-chart__cell__icon" width={20} height={20} viewBox="0 0 330 330" >
                  <path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z" />
                  <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z" />
                </svg>
                {name}
              </div>
              <PaceChartCell value={pace} />
              <PaceChartCell value={newMortgage} />
              <PaceChartCell value={vendorFinance} />
              <PaceChartCell value={companyCash} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PaceChart;
