"use client";

import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.wrap}>
        <p className={styles.kicker}>Products</p>
        <h2 id="cta-title" className={styles.title}>
          Explore Our Professional Ranges
        </h2>
        <p className={styles.lede}>
          We proudly stock Keune’s professional ranges, trusted by stylists worldwide.  
          Discover the care, colour, and styling products we use every day in the salon.
        </p>

        <div className={styles.row}>
          <Link href="/shop" className={styles.link}>
            <span className={styles.text}>Explore Our Products</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
