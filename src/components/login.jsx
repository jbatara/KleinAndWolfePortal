import React from 'react';

function Login(props) {
  return (
    <div className='splash block'>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <tr>
          <th><label for="Email">Email</label></th>
          <th><input type="text" id='email' /></th>
        </tr>
        <tr>
          <th><label for="Password">Password</label></th>
          <th><input type='password' id='password' /></th>
        </tr>

        <button type='submit' class='btn btn-light right'>Login</button>
      </form>
    </div>
  );
}


export default EmployeeLoginForm;