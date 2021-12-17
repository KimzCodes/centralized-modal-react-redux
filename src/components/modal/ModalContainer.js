import React from 'react';
import CloseSVG from '../../assets/close.svg';
import Register from '../forms/Register';

const Modalcontainer = () => {
  return (
    <div className='modal'>
      <div className='modal-container'>
        <div className='modal-close'>
          <img src={CloseSVG} className='modal-close-img' alt='close-modal' />
        </div>
        <div className='modal-content'>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Modalcontainer;
