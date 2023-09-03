import { decriptText, hashText } from '../utils/encrypt';
import { connect } from './Database.service';

export function getUser(username: string) {
  const db = connect();

  const stm = db.prepare('SELECT * FROM users where username = @username');

  return stm.get({ username }) as User | undefined;
}

export function login(user: Auth) {
  const dbUser = getUser(user.username);

  if (!dbUser) return false;

  const passwordCheck = decriptText(dbUser.password_hash);

  if (passwordCheck !== user.password) {
    return false;
  }

  return true;
}

export function register(user: Auth) {
  try {
    const checkUser = getUser(user.username);

    if (checkUser) return false;

    const db = connect();

    const registerUser = {
      username: user.username,
      password_hash: hashText(user.password),
      status: 1,
    };

    const stm = db.prepare(
      `INSERT INTO users (username, password_hash, status)
    VALUES (@username, @password_hash, @status)`,
    );

    stm.run(registerUser);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}
