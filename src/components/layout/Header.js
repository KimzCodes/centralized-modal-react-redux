import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <ul className='header-right'>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <ul className='header-left'>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Header;
