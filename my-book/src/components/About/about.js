import React from 'react';
import book from '../../images/book.png';
import  './about.css'; 

function About() { 
  return (
    <div className='container'>
      <img
        src={book}
        alt="book"
        className='image' 
      />
      <h1>About Book Library</h1>
      <h3 className='paraghraf'> A book library is a collection of resources, primarily books, that are organized and made accessible for reading, research, and borrowing. Libraries serve as a hub of knowledge, offering a wide variety of books across genres, including fiction, non-fiction, academic texts, reference materials, and more. They are often categorized by subject, author, or genre to make it easier for users to find what they are looking for.</h3>
    </div>
  );
}

export default About;
