import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='justify-content-center text-center '>CopyRight @ {year}</div>
  )
}

export default Footer