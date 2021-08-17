import React, { useState, useCallback } from 'react';

export const MessageContext = React.createContext({
  message: null,
  add: () => {},
  remove: () => {}
});

export default function MessageProvider({ children }) {
  const [message, setMessage] = useState(null);

  const contextValue = {
    message,
    add: useCallback((title, text) => {
      setMessage({ title, text })
    }, []),
    remove: useCallback(() => setMessage(null), [])
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
}
