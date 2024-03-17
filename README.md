# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




<!-- <div> {data.map((item)=>(<link to={`/phimle/${item.title}`}>  <img src={item.img} key={item.id} /> </link> ))} </div> -->

.product {
  display: flex;
  justify-content: space-around; /* Căn các ảnh đều nhau */
}

.product a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Căn giữa văn bản trong phần tử a */
}

.product img {
  width: 260px; /* Độ rộng của ảnh */
  height: 384px; /* Chiều cao tự động điều chỉnh theo tỉ lệ */
  margin: 10px; /* Khoảng cách giữa các ảnh (10px trên/dưới, 5px trái/phải) */
}
.product p {
  color: #7a7a7a;
}




chạy jsx 
node -v
npm create vite
npm install












      <h1> Phim bộ </h1> 
      <div className='menu'> 
        {/* Loại phim */}
        <div className='mobile-loaiphim'> 
          <div className='field'> 
            <label className="label">Loại phim:</label> 
            <div className="control">
              <div className="select">
                <select onChange={(e) => setMovieType(e.target.value)}>
                  <option selected="" value="">- Tất cả -</option>
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
                <select onChange={(e) => setGenre(e.target.value)}>
                  <option selected="" value="">- Tất cả -</option>
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
                <select onChange={(e) => setCountry(e.target.value)}>
                  <option selected="" value="">- Tất cả -</option>
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
                <select onChange={(e) => setYear(e.target.value)}>
                  <option selected="" value="">- Tất cả -</option>
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
                <select onChange={(e) => setSortBy(e.target.value)}>
                  <option selected="" value="">- Tất cả -</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  {/* Thêm các option khác */}
                </select>
              </div>
            </div> 
          </div>
        </div>
      </div> {/* menu */} 