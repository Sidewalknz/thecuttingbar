"use client";

import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.wrap}>
        <p className={styles.kicker}>About Us</p>
        <h2 id="about-title" className={styles.title}>
          The Cutting Bar, Nelson
        </h2>
        <p className={styles.body}>
          At The Cutting Bar we provide exceptional service in global colours, balayage,
          foiling, haircuts and styles for everyone. Experience a relaxed, friendly
          environment for all your hair needs in Nelson, NZ.
        </p>
        <p className={styles.body}>
          You can book your appointment online or give us a call. We take walk-ins when
          there is availability.
        </p>

        <div className={styles.ctas}>
          <Link
            href="https://www.fresha.com/a/the-cutting-bar-nelson-87-vanguard-street-hqgw7pdp/booking?menu=true"
            target="_blank"
            className={`${styles.btn} ${styles.primary}`}
          >
            Book Online
          </Link>

          <a href="tel:+64XXXXXXXXX" className={`${styles.btn} ${styles.secondary}`}>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
