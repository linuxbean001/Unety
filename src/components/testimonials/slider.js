import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import TestimonialItem from './item';

import './slider.scss';

class Slider extends PureComponent {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({

    }))
  };

  static defaultProps = {
    list: [],
  };

  render() {

    const {
      list
    } = this.props;

    return (
      <div className="up-testimonial-slider">
        {list.map((item, i) => {
          return (
            <div key={i} className="up-testimonial-slider__item">
              <TestimonialItem
                {...item}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Slider;
