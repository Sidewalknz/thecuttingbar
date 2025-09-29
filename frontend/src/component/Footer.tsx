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
              width={160}
              height={40}
              priority
            />
          </Link>
          <div className={styles.socials}>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Middle: Contact details */}
        <address className={styles.contact}>
          <p>
            <a href="tel:03 539 0186">03 539 0186</a>
            <br />
            <a href="mailto:info@thecuttingbar.co.nz">
              info@thecuttingbar.co.nz
            </a>
          </p>
          <p className={styles.addr}>
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
