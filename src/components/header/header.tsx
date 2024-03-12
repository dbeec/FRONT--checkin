import Image from "next/image"
import styles from "./header.module.css";
import moment from "moment";
export default function Header(){
  const date = moment();
  return (
    <>
    <div className={styles.contentheader}>
        <div className={styles.welcome}>
          <li>Welcome back, <span className={styles.name}>Johan Díaz</span></li>
          <span>{date.format("ddd, LL")}</span>
        </div>

        <div className={styles.profile}>
          {/* <Image src={profileImage} alt="profile" width={50} height={50} unoptimized={true}/> */}
        </div>
      </div>
    </>
  )
}