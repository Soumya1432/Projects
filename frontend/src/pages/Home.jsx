import React from 'react'
import  { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Card from '../components/Card';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import axios from 'axios';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(null); // To handle editing
    const [cardToDelete, setCardToDelete] = useState(null); // To handle deletion
    useEffect(() => {
        // Fetch notes from the backend
        axios.get('http://localhost:5000/api/notes')
          .then(response => setCards(response.data))
          .catch(error => console.error('Error fetching notes:', error));
      }, []);
    
      const handleSave = (title, descriptions) => {
        if (currentCard) {
          // Update existing card
          axios.put(`http://localhost:5000/api/notes/${currentCard.id}`, { title, descriptions })
            .then(() => {
              setCards(cards.map(card =>
                card.id === currentCard.id ? { ...card, title, descriptions } : card
              ));
              setModalOpen(false);
              setCurrentCard(null); // Reset after editing
        
            })
            .catch(error => console.error('Error updating note:', error));
        } else {
          // Create new card
          axios.post('http://localhost:5000/api/notes', { title, descriptions })
            .then(response => {
              setCards([...cards, response.data]);
              setModalOpen(false);
            })
            .catch(error => console.error('Error adding note:', error));
        }
      };
    
      const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/notes/${cardToDelete.id}`)
          .then(() => {
            setCards(cards.filter(card => card.id !== cardToDelete.id));
            setConfirmDeleteOpen(false);
            setCardToDelete(null); // Reset after deletion
          })
          .catch(error => console.error('Error deleting note:', error));
      };
  return (
    <div>
      <Navbar setModalOpen={setModalOpen} />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onEdit={() => {
                setCurrentCard(card);
                setModalOpen(true);
              }}
              onDelete={() => {
                setCardToDelete(card);
                setConfirmDeleteOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {modalOpen && (
        <Modal
          card={currentCard}
          onSave={handleSave}
          onCancel={() => {
            setModalOpen(false);
            setCurrentCard(null); // Reset if canceled
          }}
        />
      )}

      {confirmDeleteOpen && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setConfirmDeleteOpen(false)}
        />
      )}
    </div>
  )
}

export default Home;
