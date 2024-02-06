import React, { PureComponent } from 'react';
import { TestimonialSlider } from "./index"
import { testimonials } from "../../constants/testimonials"

import './block.scss';

class Block extends PureComponent {
  render() {
    return (
      <section className="up-testimonials-block">
        <div className="up-testimonials-block__inner">
          <h2 className="up-testimonials-block__title">
            <span>Still curious</span>
            See what others have to say
          </h2>
          <div className="up-testimonials-block__slider">
            <TestimonialSlider
              list={testimonials}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Block;
