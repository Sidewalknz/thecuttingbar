"use client";

import styles from "./Services.module.css";

type Service = {
  title: string;
  blurb: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const ScissorsIcon: Service["Icon"] = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <path d="M36.5 31.6 58 9a2.5 2.5 0 1 0-3.5-3.5L33 26.9l-5-5a10 10 0 1 0-3.5 3.5l5 5-5 5a10 10 0 1 0 3.5 3.5l5-5 21.6 21.6a2.5 2.5 0 0 0 3.5-3.5L36.5 31.6zM16 14a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 25a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" fill="currentColor"/>
  </svg>
);

const PaletteIcon: Service["Icon"] = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <path d="M32 6C17.6 6 6 17 6 30.5 6 40 13 45 20.3 45H24a4 4 0 0 1 4 4c0 4.4 3.3 8.5 8.8 8.5C47.6 57.5 58 47 58 33.5 58 18.7 46.4 6 32 6zM18 24a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12-5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM42 28a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM24 34a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="currentColor"/>
  </svg>
);

const SparkleIcon: Service["Icon"] = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <path d="M32 6l4.2 10.8L47 21l-10.8 4.2L32 36l-4.2-10.8L17 21l10.8-4.2L32 6zm20 14 2.6 6.7L62 30l-7.4 2.9L51.6 40l-2.9-7.1L41 30l7.7-3.3L52 20zM10 36l2.2 5.6L18 44l-5.8 2.4L10 52l-2.2-5.6L2 44l5.8-2.4L10 36z" fill="currentColor"/>
  </svg>
);

const services: Service[] = [
  {
    title: "Cutting & Styling",
    blurb:
      "Precision cuts, fashion restyles, clipper work, and grooming – tailored to suit your style.",
    Icon: ScissorsIcon,
  },
  {
    title: "Colour",
    blurb:
      "From global colour to foils, balayage, and colour correction – we offer expert colour services personalised to your lifestyle.",
    Icon: PaletteIcon,
  },
  {
    title: "BKT Nanoplasty",
    blurb:
      "BKT Nanoplasty is a breakthrough hair treatment that straightens, smooths, and repairs from within—lasting up to 8 months. Safe for all hair types, it’s perfect for anyone wanting frizz-free, manageable, and healthy-looking hair.",
    Icon: SparkleIcon,
  },
];

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.header}>
        <h2 id="services-title">Our Services</h2>
        <p className={styles.lede}>
          Healthy hair, beautiful colour, and cuts that grow out seamlessly.
        </p>
      </div>

      <ul className={styles.grid}>
        {services.map(({ title, blurb, Icon }) => (
          <li key={title} className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <Icon className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardBody}>{blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
