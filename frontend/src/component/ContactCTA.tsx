"use client";

import Link from "next/link";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.wrap}>
        <p className={styles.kicker}>Contact</p>
        <h2 id="contact-title" className={styles.title}>
          Ready for your new look?
        </h2>
        <p className={styles.body}>
          Book your appointment online, call us directly, or drop in when we’re available.
        </p>

        <div className={styles.ctas}>
          <Link
            href="https://www.fresha.com/a/the-cutting-bar-nelson-87-vanguard-street-hqgw7pdp/booking?menu=true"
            target="_blank"
            className={`${styles.btn} ${styles.primary}`}
          >
            Book Online
          </Link>

          <a href="tel:+6435390186" className={`${styles.btn} ${styles.secondary}`}>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
