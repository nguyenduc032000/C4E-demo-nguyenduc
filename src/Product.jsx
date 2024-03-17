import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import "./Style/App.css";

const Product = () => {
  const [movieType, setMovieType] = useState('');
  const [genre, setGenre] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(24); // Số phim trên mỗi trang
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const filtered = data.filter(movie => {
      if (movieType && movieType !== '' && movie.category !== movieType) return false;
      if (genre && !movie.genre.includes(genre)) return false;
      if (country && movie.country !== country) return false;
      if (year && movie.year !== year) return false;
      if (movieType === 'movie' && ![6, 7, 8, 9].includes(movie.id)) return false;
      if (movieType === 'show' && ![1, 2, 3, 4, 5].includes(movie.id)) return false;
      return true;
    });

    if (sortBy === 'A-Z') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'Z-A') {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredMovies(filtered);
  }, [movieType, genre, country, year, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [movieType, genre, country, year, sortBy]);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='menutong'>
      <h1> Phim bộ </h1> 
      <div className='menu'> 
        {/* Loại phim */}
        <div className='mobile-loaiphim'> 
          <div className='field'> 
            <label className="label">Loại phim:</label> 
            <div className="control">
              <div className="select">
                <select value={movieType} onChange={(e) => setMovieType(e.target.value)}>
                  <option value="">- Tất cả -</option>
                  <option value="movie">Phim Lẻ</option>
                  <option value="show">Phim Bộ</option>
                </select>
              </div>
            </div> 
          </div>
        </div> 

        {/* Thể loại */}
        <div className='mobile-loaiphim'> 
          <div className='field'> 
            <label className="label">Thể loại:</label> 
            <div className="control">
              <div className="select">
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                  <option value="">- Tất cả -</option>
                  <option value="Âm nhạc">Âm nhạc</option>
                  <option value="Bí ẩn">Bí ẩn</option>
                  {/* Thêm các option khác */}
                </select>
              </div>
            </div> 
          </div>
        </div> 

        {/* Quốc gia */}
        <div className='mobile-loaiphim'> 
          <div className='field'> 
            <label className="label">Quốc gia:</label> 
            <div className="control">
              <div className="select">
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">- Tất cả -</option>
                  <option value="Quốc gia 1">Quốc gia 1</option>
                  <option value="Quốc gia 2">Quốc gia 2</option>
                  {/* Thêm các option khác */}
                </select>
              </div>
            </div> 
          </div>
        </div> 

        {/* Năm */}
        <div className='mobile-loaiphim'> 
          <div className='field'> 
            <label className="label">Năm:</label> 
            <div className="control">
              <div className="select">
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="">- Tất cả -</option>
                  <option value="Năm 1">Năm 1</option>
                  <option value="Năm 2">Năm 2</option>
                  {/* Thêm các option khác */}
                </select>
              </div>
            </div> 
          </div>
        </div>

        {/* Sắp xếp */}
        <div className='mobile-loaiphim'> 
          <div className='field'> 
            <label className="label">Sắp xếp:</label> 
            <div className="control">
              <div className="select">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="">- Tất cả -</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  {/* Thêm các option khác */}
                </select>
              </div>
            </div> 
          </div>
        </div>
      </div> {/* menu */} 
      <div className="product-container"> 
        {currentMovies.length > 0 ? (
          currentMovies.map((item) => ( 
            <Link to={`/phim/${item.slug}`} key={item.id} className="product-item"> {/* Sửa đường dẫn */}
              <img className="product-image" src={item.image} alt={item.title} />
              <div className="product-info">
                <p className="product-title">{item.title}</p>
                <p className="product-price">{item.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Không có phim phù hợp</p>
        )}
      </div>

      {/* Phân trang */}
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className={index + 1 === currentPage ? 'active' : null}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
