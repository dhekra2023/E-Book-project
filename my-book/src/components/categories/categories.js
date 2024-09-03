import React from 'react';

function Categories() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Categories</h2>
      <div
        className="categories"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '2rem',
        }}
      >
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Categories;
