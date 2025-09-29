"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo2.svg" alt="The Cutting Bar" width={140} height={40} />
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <Link href="/book" className={styles.cta}>Book Now</Link>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
      >
        <div className={styles.mobileHeader}>
          <Link href="/" onClick={() => setOpen(false)} className={styles.mobileLogo}>
            <Image src="/logo.svg" alt="The Cutting Bar" width={150} height={80} priority />
          </Link>
        </div>

        <ul className={styles.mobileList} onClick={() => setOpen(false)}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/book" className={styles.mobileCta}>Book Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}
