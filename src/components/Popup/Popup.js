import React from 'react';
import './Popup.css';

function Popup({
  isOpen, name, onClose, children,
}) {
  const popupRef = React.useRef();

  function handleOverlayClick(evt) {
    if (evt.target === popupRef.current) {
      onClose();
    }
  }

  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_is-opened' : ''}`} onClick={handleOverlayClick} ref={popupRef}>
      <div className={`popup__container popup-${name}__container`}>
        <button className={`button popup__close popup-${name}__close`} onClick={onClose} type="button" />
        {children}
      </div>
    </div>
  );
}

export default Popup;
