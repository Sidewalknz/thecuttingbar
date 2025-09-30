"use client";

import HeroWhite from "@/component/HeroWhite";
import Image from "next/image";
import Link from "next/link";
import staff from "@/data/staff.json";
import styles from "./About.module.css";
import Divider from "@/component/Divider";

type Staff = {
  id: string;
  name: string;
  role: string;
  image: string;        // e.g. "/images/staff/name.webp"
  bookingUrl?: string;
  bio: string;
  specialties?: string[];
  startedYear?: number;
};

export default function AboutPage() {
  const heroText = `The Cutting Bar is owned and operated by Claire Chicken. Originally from the UK, Claire moved to New Zealand with her partner in 2009. They planned to stay for just two years, but fell in love with the country and made Aotearoa their home.

After 12 years’ experience in the hairdressing industry, Claire opened The Cutting Bar—bringing together the best of salons and barbershops to create a relaxed, friendly environment for everyone.`;

  return (
    <>
      <HeroWhite
        kicker="-About-"
        title="Who is the cutting bar?"
        subtitle={heroText}
      />
      <Divider />

      <main className={styles.wrap}>
        <section id="team" className={styles.teamSection} aria-labelledby="team-heading">
          <h2 id="team-heading" className={styles.sectionTitle}>Meet the Team</h2>

          <ul className={styles.grid} role="list">
            {(staff as Staff[]).map((member, idx) => (
              <li key={member.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    priority={idx < 2}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>

                  {member.specialties?.length ? (
                    <p className={styles.meta}>
                      <strong>Specialties:</strong> {member.specialties.join(", ")}
                    </p>
                  ) : null}

                  {member.startedYear ? (
                    <p className={styles.meta}>
                      <strong>In the industry since:</strong> {member.startedYear}
                    </p>
                  ) : null}

                  <p className={styles.bio}>{member.bio}</p>

                  <div className={styles.ctaRow}>
                    {member.bookingUrl && (
                      <Link
                        href={member.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}
                      >
                        Book with {member.name.split(" ")[0]}
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
