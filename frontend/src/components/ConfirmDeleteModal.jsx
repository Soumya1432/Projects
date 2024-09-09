import React from 'react';

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center shadow-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Are you sure you want to delete?</h2>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-orange-500 text-xl text-yellow-100 px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
