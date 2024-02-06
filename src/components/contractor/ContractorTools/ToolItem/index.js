import React from 'react';

const ToolItem = (props) => {
  const {
    imgSrc,
    imgAlt,
    title,
    description,
  } = props;

  return (
    <div className="contractor-signup__tools__item">
      <div className="contractor-signup__tools__item__image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="contractor-signup__tools__item__copy">
        <h3 className="contractor-signup__tools__item__title">{title}</h3>
        <p className="contractor-signup__tools__item__copy">{description}</p>
      </div>
    </div>
  )
};

export default ToolItem;
