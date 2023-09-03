import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from 'renderer/context/Auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  async function login(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    const response = await signin({ username, password });

    if (response) {
      navigate('/');
      return;
    }

    alert('Username or Password is incorrect');
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Login</h1>
        <form>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} onClick={login}>
            Login
          </button>
        </form>
        <p className={styles.signupContainer}>
          Don't have an account?{' '}
          <Link className={styles.link} to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
