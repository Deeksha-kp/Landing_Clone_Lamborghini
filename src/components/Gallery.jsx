import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h3>Our Models</h3>
      <div className="gallery-grid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg/800px-2023_Lamborghini_Aventador_Ultimae.jpg" alt="Model 1" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lamborghini_Revuelto_%28cropped%29.jpg/640px-Lamborghini_Revuelto_%28cropped%29.jpg" alt="Model 2" />
        <img src="https://cdn-ds.com/blogs-media/sites/94/2019/07/02092218/Lamborghini-Aventador-J__1_o.jpg" alt="Model 2" />
      </div>
    </section>
  );
};

export default Gallery;


