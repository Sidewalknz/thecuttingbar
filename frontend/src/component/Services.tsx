"use client";

import styles from "./Services.module.css";

type Service = {
  title: string;
  blurb: string;
  iconSrc: string;
  alt: string;
};

const services: Service[] = [
  {
    title: "Cutting & Styling",
    blurb:
      "Precision cuts, fashion restyles, clipper work, and grooming – tailored to suit your style.",
    iconSrc: "/icons/scissors.svg",
    alt: "Scissors icon",
  },
  {
    title: "Colour",
    blurb:
      "From global colour to foils, balayage, and colour correction – we offer expert colour services personalised to your lifestyle.",
    iconSrc: "/icons/palette.svg",
    alt: "Palette icon",
  },
  {
    title: "BKT Nanoplasty",
    blurb:
      "BKT Nanoplasty is a breakthrough hair treatment that straightens, smooths, and repairs from within—lasting up to 8 months. Safe for all hair types, it’s perfect for anyone wanting frizz-free, manageable, and healthy-looking hair.",
    iconSrc: "/icons/flask.svg",
    alt: "Flask icon",
  },
];

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.header}>
        <p className={styles.kicker}>Services</p>
        <h2 id="services-title" className={styles.title}>
          Healthy hair, beautiful colour, and cuts that grow out seamlessly
        </h2>
        <p className={styles.lede}>
          From precision cutting to colour transformations and innovative
          treatments, we tailor every service to your lifestyle and look.
        </p>
      </div>

      <ul className={styles.grid}>
        {services.map(({ title, blurb, iconSrc, alt }) => (
          <li key={title} className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <img
                src={iconSrc}
                alt={alt}
                className={styles.icon}
                width={34}
                height={34}
              />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardBody}>{blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
