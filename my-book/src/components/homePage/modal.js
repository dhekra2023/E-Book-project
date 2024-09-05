import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './modal.css';

function Modal({ isOpen, onClose, onAdd, book }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    stock: '',
    author: '',
    img: '',
    idbook: ''
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || '',
        price: book.price || '',
        description: book.description || '',
        stock: book.stock || '',
        author: book.author || '',
        img: book.img || '',
        idbook: book.idbook || ''
      });
    } else {
      setFormData({
        title: '',
        price: '',
        description: '',
        stock: '',
        author: '',
        img: '',
        idbook: ''
      });
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.idbook) {
        await axios.put('http://localhost:3000/api/updateBook', formData);
      } else {
        await axios.post('http://localhost:3000/api/addBook', formData);
      }
      onAdd();
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{formData.idbook ? 'Update Book' : 'Add Book'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
          <button type="submit">{formData.idbook ? 'Update Book' : 'Add Book'}</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
