"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Big logo background anchored at bottom */}
      <div className={styles.heroLogo}></div>

      <div className={styles.inner}>
        <h1 className={styles.title}>Cut. Colour. Confidence.</h1>

        <p className={styles.subtitle}>
          Experience a relaxed, friendly environment for all your hair needs in Nelson, NZ.
        </p>

        <div className={styles.ctas}>
          <Link
            href="https://www.fresha.com/a/the-cutting-bar-nelson-87-vanguard-street-hqgw7pdp/booking?menu=true"
            target="_blank"
            className={`${styles.btn} ${styles.primary}`}
          >
            Book Now
          </Link>
          <a href="tel:03 539 0186" className={`${styles.btn} ${styles.secondary}`}>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
