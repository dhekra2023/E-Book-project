import React, { useState, useEffect } from 'react';
import deleteIcon from '../../images/delete.svg';
import editIcon from '../../images/edit.svg';
import addIcon from '../../images/add.svg';
import axios from 'axios';

function Categories() {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getCategories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Error fetching categories');
      }
    };

    fetchCategories();
  }, []);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/categorie', {
        CategorieName: categoryName,
        description: description,
      });
      alert('Category added successfully!');
      setShowModal(false);
      setCategoryName('');
      setDescription('');

      const response = await axios.get('http://localhost:3000/api/getCategories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error inserting category:', error);
      alert('Error inserting category');
    }
  };

  return (
    <div>
      <div className="icon-container">
        <img src={addIcon} alt="Add Icon" className="icon" onClick={handleAddClick} />
        <img src={editIcon} alt="Edit Icon" className="icon" />
        <img src={deleteIcon} alt="Delete Icon" className="icon" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>Categories</h2>
        <div
          className="categories"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.idCategories} className="card" style={{ width: '18rem', marginBottom: '1rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{category.CategorieName}</h5>
                  <p className="card-text">{category.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Add Category</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyle = {
  display: 'block',
  position: 'fixed',
  zIndex: 1,
  paddingTop: '100px',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.4)',
};

const modalContentStyle = {
  backgroundColor: '#fefefe',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #888',
  width: '40%',
  position: 'relative',
};

export default Categories;
