import styles from "./page.module.css";

export default function Login() {
  return (
    <>
      <div>
        <div className={styles.main}>
          <form className={styles.form}>
            <div className={styles.titleform}>
              <h1>CheckIn</h1>
              <p>Welcome to Checkin again</p>
            </div>

            <div className={styles.contentinputs}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.input}
                type="text"
                id="email"
                required
                autoComplete="off"
              />
            </div>

            <div className={styles.contentinputs}>
              <label htmlFor="password">Contraseña</label>
              <input
                className={styles.input}
                type="password"
                id="password"
                required
                autoComplete="off"
              />
            </div>

            <div className={styles.button}>
              <button>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
