import {Link} from "react-router-dom";
import styles from "./Login.module.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <a href="#" className={styles.forgotPassword}>Esqueceu a senha?</a>

        <div className={styles.socialLogin}>
          <button className={styles.iconButton}><FaGoogle /></button>
          <button className={styles.iconButton}><FaFacebookF /></button>
          <button className={styles.iconButton}><FaApple /></button>
        </div>

        <button className={styles.loginButton}>Login</button>

        <p className={styles.register}>
          Novo aqui? <Link>Registrar</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;