"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Products.module.css";

type Product = {
  name: string;
  slug: string;
  imgSrc: string;
  imgAlt: string;
};

const products: Product[] = [
  { name: "Keune – Care",       slug: "care",      imgSrc: "/images/keune-care.webp",      imgAlt: "Keune Care" },
  { name: "Keune – Re.Styled",  slug: "re-styled", imgSrc: "/images/keune-restyled.webp",  imgAlt: "Keune Re.Styled" },
  { name: "Keune – So Pure",    slug: "so-pure",   imgSrc: "/images/keune-sopure.webp",    imgAlt: "Keune So Pure" },
  { name: "1922 by JM Keune",   slug: "1922",      imgSrc: "/images/keune-1922.webp",      imgAlt: "1922 by JM Keune" },
];

export default function Products() {
  return (
    <section className={styles.products} aria-labelledby="products-title">
      <div className={styles.wrap}>
        <p className={styles.kicker}>Products</p>
        <h2 id="products-title" className={styles.title}>
          Professional ranges we trust and stock
        </h2>
        <p className={styles.lede}>
          We proudly stock Keune’s professional ranges, trusted by stylists worldwide.
        </p>

        <ul className={styles.grid}>
          {products.map(({ name, slug, imgSrc, imgAlt }) => (
            <li key={slug} className={styles.item}>
              <Link
                href={`/shop?range=${encodeURIComponent(slug)}`}
                className={styles.link}
                aria-label={`${name} – view products`}
              >
                <div className={styles.thumb} aria-hidden="true">
                  <Image
                    src={imgSrc}
                    alt=""
                    fill
                    sizes="(min-width: 760px) 220px, 160px"
                    priority={false}
                  />
                </div>
                <div className={styles.label}>
                  <span className={styles.text}>{name}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
