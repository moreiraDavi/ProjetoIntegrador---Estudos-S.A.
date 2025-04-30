import React from "react";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.registerBox}>
        <h2 className={styles.title}>Cadastro</h2>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Nome <span className={styles.required}>*</span>
          </label>
          <input type="text" className={styles.input} placeholder="Seu nome" />

          <label className={styles.label}>
            E-mail <span className={styles.required}>*</span>
          </label>
          <input type="email" className={styles.input} placeholder="Seu e-mail" />

          <label className={styles.label}>
            Senha <span className={styles.required}>*</span>
          </label>
          <input type="password" className={styles.input} placeholder="Sua senha" />
        </div>

        <button className={styles.button}>Cadastre-se</button>

        <p className={styles.loginLink}>
          Já tem cadastro? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
