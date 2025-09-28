"use client";

import Link from "next/link";
import styles from "./Products.module.css";

const products = [
  { name: "Keune – Care", slug: "care" },
  { name: "Keune – Re.Styled", slug: "re-styled" },
  { name: "Keune – So Pure", slug: "so-pure" },
  { name: "1922 by JM Keune", slug: "1922" },
];

export default function Products() {
  return (
    <section className={styles.products} aria-labelledby="products-title">
      <div className={styles.wrap}>
        <h2 id="products-title" className={styles.title}>
          Products
        </h2>
        <p className={styles.lede}>
          We proudly stock Keune’s professional ranges, trusted by stylists worldwide.
        </p>

        <ul className={styles.grid}>
          {products.map(({ name, slug }) => (
            <li key={slug} className={styles.item}>
              {/* Link to your shop, filter, or info page */}
              <Link
                href={`/shop?range=${encodeURIComponent(slug)}`}
                className={styles.link}
                aria-label={`${name} – view products`}
              >
                <span className={styles.text}>{name}</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
