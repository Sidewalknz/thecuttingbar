"use client";

import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.wrap}>
        <p className={styles.kicker}>About Us</p>
        <h2 id="about-title" className={styles.title}>
          The Cutting Bar
        </h2>
        <p className={styles.body}>
          The Cutting Bar is owned and operated by Claire Chicken. Originally
          from the UK, moved over to New Zealand with her partner in 2009. They
          were only planning to stay for 2 years, but both fell in love with the
          country and decided to make New Zealand their home.
        </p>
        <p className={styles.body}>
          After 12 years’ experience in the hairdressing industry, Claire decided
          that opening The Cutting Bar was the next step in her career. Taking
          qualities from both salons and barbershops to create a relaxed, friendly
          environment for everyone.
        </p>

        <div className={styles.ctas}>
          <Link
            href="/about"
            className={`${styles.btn} ${styles.primary}`}
          >
            Learn More
          </Link>

          <Link
            href="/careers"
            className={`${styles.btn} ${styles.secondary}`}
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
