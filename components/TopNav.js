import Link from "next/link";
import styles from "../styles/TopNav.module.css";
export default function TopNav() {
  return (
    <nav className={styles.nav}>
      <h1>
        <Link href="/" passHref>
          코인러버
        </Link>
      </h1>
      <h2> | 가상화폐 자동매매 프로그램</h2>
    </nav>
  );
}
