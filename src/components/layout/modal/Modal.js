import React, { Fragment } from 'react';
import CloseSVG from '../../../assets/close.svg';

import './modal.css';

const Modal = () => {
  return (
    <Fragment>
      <div className='modal-backDrop'></div>
      <div className='modal-container'>
        <div className='modal-close'>
          <img src={CloseSVG} className='modal-close-img' alt='close-modal' />
        </div>
        <div className='modal-content'></div>
      </div>
    </Fragment>
  );
};

export default Modal;
