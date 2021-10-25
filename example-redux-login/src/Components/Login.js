import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit} className='anime'>
      <label className={styles.label}>
        Username
        <input
          className={styles.input}
          id='username'
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          id='password'
          type='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <button className={styles.button}>Send</button>
    </form>
  );
};

export default Login;
