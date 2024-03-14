import React, { useState, useEffect } from 'react';

const PageLeaveMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (showMessage) {
        event.preventDefault();
        event.returnValue = ''; // This message will be ignored in most modern browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [showMessage]);

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <div>
      {showMessage && (
        <div className="page-leave-message">
          <p>Are you sure you want to leave this page?</p>
          <button className="close-icon" onClick={handleClose}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default PageLeaveMessage;
