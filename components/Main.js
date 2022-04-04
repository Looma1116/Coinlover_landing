import Image from "next/image";
import styles from "../styles/Main.module.css";

import scrollPng from "../images/scroll.png";
import crownPng from "../images/crown.png";
import { useEffect, useState } from "react";
export default function Main() {
  const [scroll1, setScroll1] = useState(false);
  const [scroll2, setScroll2] = useState(false);
  const [scroll3, setScroll3] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY > 150) {
      setScroll1(true);
    }
    if (window.scrollY > 370) {
      setScroll2(true);
    }
    if (window.scrollY > 590) {
      setScroll3(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

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
        <div className={styles.card}>
          <div
            className={scroll1 ? styles.imageChange1 : styles.imageBox1}
          ></div>

          <div className={styles.textBox}>
            이제 편히 주무세요.
            <br />
            차트는 <span className={styles.point}>코인러버</span>가
            보고있을게요.
            <h2 className={styles.copy2}>24시간 돌아가는 자동매매 프로그램</h2>
          </div>
        </div>
        <div className={styles.card2}>
          <div
            className={scroll2 ? styles.imageChange2 : styles.imageBox2}
          ></div>
          <div className={styles.textBox2}>
            또 욕심 내다가 손절하셨나요?
            <br />
            이젠 <span className={styles.point}>냉철하게</span> 투자하세요.
            <h2 className={styles.copy2}>
              전략적 알고리즘에 따른 정확한 자동매매
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={scroll3 ? styles.imageChange3 : styles.imageBox3}
          ></div>
          <div className={styles.textBox}>
            잃어버린 일상생활
            <br />
            <span className={styles.point}>코인러버</span>가 찾아드립니다.
            <h2 className={styles.copy2}>
              이젠 더 이상 신경쓰지 않으셔도 됩니다.
            </h2>
          </div>
        </div>
        <div className={styles.crown}>
          <Image
            src={crownPng}
            alt="Number 1"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
