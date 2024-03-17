import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img className="detail-image" src={movie.image} alt={movie.title} />
      <div className="detail-info">
        <p className="detail-title">{movie.title}</p>
        <p className="detail-description">{movie.description}</p>
        <p className="detail-duration">Thời lượng: {movie.duration}</p>
        <p className="detail-director">Đạo diễn: {movie.director}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
