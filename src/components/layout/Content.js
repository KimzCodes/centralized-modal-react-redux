import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modalSlice';

const Content = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className='article'>
        <h2>What is Lorem Ipsum? </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley not only five
          centuries, but also the leap into electronic typesetting....
        </p>
        <button
          className='btn'
          onClick={() => dispatch(openModal({ name: 'LoginRegister' }))}
        >
          Read full article
        </button>
      </div>
    </div>
  );
};

export default Content;
