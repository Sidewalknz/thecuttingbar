"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        {/* Logo on the left */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo2.svg" alt="The Cutting Bar" width={140} height={40} />
          </Link>
        </div>

        {/* Links on the right */}
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <Link href="/book">
              <button className={styles.cta}>Book Now</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
