import Header from "@/components/header/header";
import styles from "../page.module.css";
import Sidebar from "@/components/sidebar/sidebar";

export default function Etfundacion() {
  return (
    <>
      <div className={styles.maincontent}>
        <Sidebar />

        <div className={styles.sidebar}>
          <Header />
        </div>
      </div>
    </>
  );
}
