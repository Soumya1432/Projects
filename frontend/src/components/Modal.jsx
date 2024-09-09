import React, { useState, useEffect } from 'react';

const Modal = ({ card, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [descriptions, setdescriptions] = useState('');

  useEffect(() => {
    if (card) {
      setTitle(card.title);
      setdescriptions(card.descriptions);
    }
  }, [card]);

  const handleSave = () => {
    if (title && descriptions) {
      onSave(title, descriptions); // Pass data to parent
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{card ? 'Edit Note' : 'Add Note'}</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded-md"
        />
        <textarea
          placeholder="descriptions"
          value={descriptions}
          onChange={(e) => setdescriptions(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded-md"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-emerald-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
