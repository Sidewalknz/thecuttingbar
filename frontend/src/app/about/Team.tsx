"use client";

import Image from "next/image";
import Link from "next/link";
import staff from "@/data/staff.json";
import styles from "./About.module.css"; // reusing your About styles

type Staff = {
  id: string;
  name: string;
  role: string;
  image: string;
  bookingUrl?: string;
  bio: string;
  specialties?: string[];
  startedYear?: number;
};

export default function Team() {
  return (
    <section id="team" className={styles.teamSection} aria-labelledby="team-heading">
      <h2 id="team-heading" className={styles.sectionTitle}>Meet the Team</h2>

      <ul className={styles.grid} role="list">
        {(staff as Staff[]).map((member, idx) => (
          <li
            key={member.id}
            className={`${styles.card} ${idx % 2 === 1 ? styles.reverse : ""}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src={member.image}
                alt={`${member.name} — ${member.role}`}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 45vw, 520px"
                className={styles.image}
                priority={idx < 2}
              />
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>

              {member.specialties?.length && (
                <p className={styles.meta}>
                  <strong>Specialties:</strong> {member.specialties.join(", ")}
                </p>
              )}

              {member.startedYear && (
                <p className={styles.meta}>
                  <strong>In the industry since:</strong> {member.startedYear}
                </p>
              )}

              <p className={styles.bio}>{member.bio}</p>

              {member.bookingUrl && (
                <Link
                  href={member.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookLink}
                >
                  Book with {member.name.split(" ")[0]}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
