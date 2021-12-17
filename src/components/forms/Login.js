import React from 'react';

const Login = () => {
  return (
    <div>
      <form className='form'>
        <div className='form_control'>
          <label className='label'>name:</label>
          <input type='text' className='form_input' />
        </div>
        <div className='form_control'>
          <label className='label'>password:</label>
          <input type='text' className='form_input' />
        </div>
        <div className='form_control'>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
