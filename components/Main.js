import Image from "next/image";
import styles from "../styles/TopBanner.module.css";

import scrollPng from "../images/scroll.png";
export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>손으로 매매하기 힘드시죠?</div>
      <div className={styles.copyContainer}>
        <p className={styles.copy}>
          <span className={styles.highlight}>
            <span>똑똑한</span>
          </span>
          <span> 투자자들은</span>
          <br />
          <span>코인러버</span>
          <span>와 함께합니다</span>
          <span>.</span>
        </p>
      </div>
      <div className={styles.gradient}>
        <div className={styles.centerbg}></div>
      </div>

      <div className={styles.cardContainer}>
        <Image src={scrollPng} alt="Scroll Down" width={50} height={60} />
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
}
