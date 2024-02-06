import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './item.scss';

class Item extends PureComponent {

  static propTypes = {
    authorName: PropTypes.string,
    authorPosition: PropTypes.string,
    image: PropTypes.string,
    quote: PropTypes.string,
  };

  static defaultProps = {

  };

  render() {

    const {
      authorName,
      authorPosition,
      image,
      quote
    } = this.props;

    return (
      <div className="up-testimonial-item">
        <div className="up-testimonial-item__image">
          <img src={image} alt=""/>
        </div>
        <blockquote className="up-testimonial-item__content">
          <div className="up-testimonial-item__quote">
            {quote}
          </div>
          <div className="up-testimonial-item__author">
            <div className="up-testimonial-item__name">{authorName}</div>
            <div className="up-testimonial-item__position">{authorPosition}</div>
          </div>
        </blockquote>
      </div>
    )
  }
}

export default Item;
