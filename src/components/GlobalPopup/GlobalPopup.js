import { useContext } from 'react';
import { MessageContext } from '../../contexts/MessageContext';

import Popup from '../Popup/Popup';

import './GlobalPopup.css';

function GlobalPopup() {

  const { message, remove } = useContext(MessageContext);

  function closePopup() {
    remove();
  }

  return (
    <Popup name="global" isOpen={message} onClose={closePopup}>
      <div className="popup-app__msg">
        {message && <>{`${message.title} ${message.text}`}</>}
      </div>
    </Popup>
  );
}

export default GlobalPopup;
