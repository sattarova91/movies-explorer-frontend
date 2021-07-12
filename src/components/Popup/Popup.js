import React from 'react';
import './Popup.css'
function Popup(props) {
  const popupRef = React.useRef();

  function handleOverlayClick(evt) {
    if (evt.target === popupRef.current) {
      props.onClose();
    }
  }

  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`} onClick={handleOverlayClick} ref={popupRef}>
      <div className={`popup__container popup-${props.name}__container`}>
        <button className={`button popup__close popup-${props.name}__close`} onClick={props.onClose} type="button"></button>
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
