import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';

const PhimDetail = () => {
  const { id } = useParams();
  const phim = data.find(item => item.id === parseInt(id)); // Ép kiểu id sang số nguyên

  return (
    <div>
      <h2>{phim.title}</h2>
      <img src={phim.image} alt={phim.title} />
      <p>{phim.description}</p>
      {/* Hiển thị thông tin chi tiết khác của phim */}
    </div>
  );
};

export default PhimDetail;
