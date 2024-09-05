import React, { useState, useEffect } from 'react';
import deleteIcon from '../../images/delete.svg';
import editIcon from '../../images/edit.svg';
import addIcon from '../../images/add.svg';
import './home.css';
import axios from 'axios';
import Modal from './modal'; 
import BookDetailsModal from './BookDetailsModal'; 

function Home() {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookDetailsModalOpen, setIsBookDetailsModalOpen] = useState(false); 
  const [modalData, setModalData] = useState(null); 
  const [editingBookId, setEditingBookId] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleAddClick = () => {
    setModalData(null); 
    setEditingBookId(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (book) => {
    setModalData(book); 
    setEditingBookId(book.idbook);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (idbook) => {
    try {
      await axios.delete(`http://localhost:3000/api/deleteBook/${idbook}`);
      setBooks(books.filter(book => book.idbook !== idbook));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingBookId(null);
  };

  const handleBookAdded = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/');
      setBooks(response.data); 
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleCardClick = async (idbook) => {
    try {
      const response = await axios.post('http://localhost:3000/api/getBookById', { idbook });
      setSelectedBook(response.data[0]); 
      setIsBookDetailsModalOpen(true);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleBookDetailsModalClose = () => {
    setIsBookDetailsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="home-container">
      <div className="icon-container">
        <img
          src={addIcon}
          alt="Add Icon"
          className="icon"
          onClick={handleAddClick}
        />
      </div>
      
      <img src="./images/imgb.webp" alt="" />
      
      <div className="card-container">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(book.idbook)}>
              <div className="icon-container">
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="icon"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleEditClick(book);
                  }}
                />
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className="icon"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleDeleteClick(book.idbook);
                  }}
                />
              </div>
              <img className="card-img-top" src={book.img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Title Book:{book.title || 'Card title'}</h5>
                <p className="card-text">
                  Author:{book.author || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onAdd={handleBookAdded}
        book={modalData} 
        bookId={editingBookId} 
      />
      
      <BookDetailsModal
        isOpen={isBookDetailsModalOpen}
        onClose={handleBookDetailsModalClose}
        book={selectedBook} 
      />
    </div>
  );
}

export default Home;
