import classNames from 'classnames';
import React from 'react';
import './browser.scss';

const BrowserFrame = ({
  className = '',
  children,
  ...props,
}) => {
  const frameClasses = classNames('up-browser-frame', className)
  return (
    <div className={frameClasses}>
      <div className="row">
        <div className="column left">
          <span className="dot" style={{backgroundColor: '#ED594A'}} />
          <span className="dot" style={{backgroundColor: '#FDD800'}} />
          <span className="dot" style={{backgroundColor: '#5AC05A'}} />
        </div>
        <div className="column middle">
          <input disabled type="text" value="https://www.unety.io" />
        </div>
        <div className="column right">
          <div style={{float: 'right'}}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </div>

      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default BrowserFrame;
