import React from "react";
import * as styles from ".././styles/hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__window}>
        <div className={styles.hero__window__header}>
          <div className={styles.hero__window__header__buttons}>
            <div className={styles.hero__window__header__button}></div>
            <div className={styles.hero__window__header__button}></div>
            <div className={styles.hero__window__header__button}></div>
          </div>
          <div className={styles.hero__window__header__status}>
            <div className={styles.hero__window__header__status__battery}>
              <div
                className={styles.hero__window__header__status__battery__icon}
              ></div>
              <span
                className={styles.hero__window__header__status__battery__text}
              >
                100%
              </span>
            </div>
            <div className={styles.hero__window__header__status__network}>
              <div
                className={styles.hero__window__header__status__network__icon}
              ></div>
              <span
                className={styles.hero__window__header__status__network__text}
              >
                Offline
              </span>
            </div>
            <div className={styles.hero__window__header__status__time}>
              <span className={styles.hero__window__header__status__time__text}>
                Sat 17 Jun 8:31 PM
              </span>
            </div>
          </div>
        </div>
        <div className={styles.hero__window__body}>
          <div className={styles.hero__window__body__text}>
            <h1 className={styles.hero__window__body__text__title}>Vanakkam</h1>
            <h2 className={styles.hero__window__body__text__subtitle}>
              I'm VIKASH
            </h2>
            <p className={styles.hero__window__body__text__description}>
              Student & Engineer
            </p>
            <div className={styles.hero__window__body__text__buttons}>
              <div className={styles.hero__window__body__text__button}></div>
              <div className={styles.hero__window__body__text__button}></div>
            </div>
          </div>
          <div className={styles.hero__window__body__image}>
            <div className={styles.hero__window__body__image__container}>
              <div
                className={styles.hero__window__body__image__container__image}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
