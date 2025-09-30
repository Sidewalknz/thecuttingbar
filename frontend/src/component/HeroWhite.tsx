"use client";

import Link from "next/link";
import styles from "./HeroWhite.module.css";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

type HeroWhiteProps = {
  kicker?: string;           // e.g. "About"
  title: string;             // e.g. "Who are we"
  subtitle?: string;         // supports \n\n for multiple paragraphs
  ctas?: CTA[];
};

export default function HeroWhite({ kicker, title, subtitle, ctas }: HeroWhiteProps) {
  const paragraphs = subtitle
    ? subtitle.split(/\n{2,}/).map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Hero Logo Overlay */}
      <div className={styles.heroLogo} aria-hidden="true" />

      <div className={styles.wrap}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}

        <h1 id="hero-title" className={styles.title}>
          {title}
        </h1>

        {paragraphs.length > 0 &&
          paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}

        {ctas && ctas.length > 0 && (
          <div className={styles.ctas}>
            {ctas.map((cta, i) =>
              cta.external ? (
                <a
                  key={i}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles[cta.variant ?? "primary"]}`}
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  key={i}
                  href={cta.href}
                  className={`${styles.btn} ${styles[cta.variant ?? "primary"]}`}
                >
                  {cta.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
