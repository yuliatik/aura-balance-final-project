import React from 'react';
import './Loader.css';  
const Loader = () => {
  return (
    <div className="container-loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loader-text">Es dauert nur noch einen Moment...</div>
    </div>
  );
};

export default Loader;

