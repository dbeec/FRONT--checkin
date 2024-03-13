"use client"
import { useRouter } from "next/navigation";
import styles from "./sidebar.module.css";
import { useState } from "react";
import companiesData from "./menu";

export default function Sidebar() {
  const route = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  //funcion para cerrar sesion
  const logoutSession = () => {
    localStorage.removeItem("access token");
    alert("YEPP, You have successfully logged out! 😶‍🌫️");
    setTimeout(() => {
      route.push("/");
    }, 2000);
  };
  return (
    <>
      <div className={styles.contentsidebar}>
        <div className={styles.contentlogo}>
          <h2>
            Check<span>In</span>
          </h2>
        </div>

        <div className={styles.createuser}>
          <li onClick={() => setOpen(!open)}>create worker</li>
        </div>

        <span className={styles.categories}>companies</span>

        <ul className={styles.contentoptions}>
          {companiesData.companies.map((item, index) => (
            <a key={index} href={item.url}>
              <li>
                <div className={styles.icon}>{item.icon}</div>
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        <span className={styles.categories}>history table</span>

        <ul className={styles.historytables}>
          {companiesData.histories.map((item, index) => (
            <a key={index} href={item.url}>
              <li>
                <div className={styles.icon}>{item.icon}</div>
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        <span className={styles.categories}>externals</span>

        <ul className={styles.historytables}>
          {companiesData.externals.map((item, index) => (
            <a key={index} href={item.url}>
              <li>
                <div className={styles.icon}>{item.icon}</div>
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        <div className={styles.contentlogout}>
          <li onClick={logoutSession}>logout</li>
        </div>
      </div>
    </>
  );
}
