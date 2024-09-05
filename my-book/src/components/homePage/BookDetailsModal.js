import React from 'react';
import './modalDetail.css'; 

function BookDetailsModal({ isOpen, onClose, book }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {book ? (
          <div className="book-details">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Published:</strong> {book.publishedDate}</p>
            <img src={book.img} alt={book.title} className="book-img" />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default BookDetailsModal;
