// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        {children}
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
