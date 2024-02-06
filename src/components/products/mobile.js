import classNames from 'classnames';
import React from 'react';
import './mobile.scss';

const MobileFrame = ({
  className = '',
  children,
  ...props,
}) => {
  const frameClasses = classNames('marvel-device nexus5', className)
  return (
    <div className={frameClasses}>
      <div className="top-bar" />
      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="screen">
        {children}
      </div>
    </div>
  )
}

export default MobileFrame;
