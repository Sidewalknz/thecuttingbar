"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.wrap}>
        {/* Left: Logo + socials */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="The Cutting Bar"
              width={240}
              height={120}
              priority
            />
          </Link>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/the_cutting_bar_nelson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/icons/instagram.svg" alt="" className={styles.icon} />
            </a>
            <a
              href="https://www.facebook.com/thecuttingbarnelson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/icons/facebook.svg" alt="" className={styles.icon} />
            </a>
          </div>
        </div>

        {/* Middle: Contact details */}
        <address className={styles.contact}>
          <p>
            <img src="/icons/phone.svg" alt="" className={styles.icon} />
            <a href="tel:+6435390186">03 539 0186</a>
          </p>
          <p>
            <img src="/icons/mail.svg" alt="" className={styles.icon} />
            <a href="mailto:info@thecuttingbar.co.nz">
              info@thecuttingbar.co.nz
            </a>
          </p>
          <p className={styles.addr}>
            <img src="/icons/location.svg" alt="" className={styles.icon} />
            87 Vanguard Street
            <br />
            Nelson 7010, New&nbsp;Zealand
          </p>
        </address>

        {/* Right: Attribution */}
        <div className={styles.attribution}>
          <p>
            Created by{" "}
            <a
              href="https://sidewalks.co.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sidewalk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
