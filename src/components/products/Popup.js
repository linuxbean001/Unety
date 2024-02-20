import React, { Component } from 'react';

class Popup extends Component {
  render() {
    const { isVisible, onClose, title, videoSrc } = this.props;

    if (!isVisible) return null;

    return (
      <div className="popup" style={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="popup-inner" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
          <button className="close-btn2" onClick={onClose}>X</button>
      
          <iframe src={videoSrc} width="800" height="450" allow="autoplay"></iframe>
        </div>
      </div>
    );
  }
}

export default Popup;
