import React from 'react';

const Card = ({ card, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 shadow-md p-4 rounded-lg">
      <h3 className="text-xl font-bold">{card.title}</h3>
      <p className="text-gray-700">{card.descriptions}</p>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onEdit}
          className="bg-emerald-500 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-orange-500 text-yellow-100 px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
