import React from 'react';
import deleteIcon from '../../images/delete.svg';
import editIcon from '../../images/edit.svg';
import addIcon from '../../images/add.svg';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="search">
      <input type ="text" placeholder="Enter Your Book Name"/>
      <button><i class= "fa-search"></i></button>
    </div>
    
      <div className="icon-container">
        <img src={addIcon} alt="Add Icon" className="icon" />
        <img src={editIcon} alt="Edit Icon" className="icon" />
        <img src={deleteIcon} alt="Delete Icon" className="icon" />
      </div>
      <img src="./images/imgb.webp" alt=""/>
      <div className="card-container">
        <div className="card">
          <img className="card-img-top" src={addIcon} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
