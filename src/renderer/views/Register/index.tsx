import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  async function register(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await window.electron.register({ username, password });

    if (response) {
      alert('User registered successfully');
      navigate('/login');
      return;
    }

    alert('Error registering user');

    console.log(response);
  }
  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h1>Sign Up</h1>
        <form onSubmit={register}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className={styles.button} onClick={register}>
            Sign Up
          </button>
        </form>
        <p className={styles.signupContainer}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
