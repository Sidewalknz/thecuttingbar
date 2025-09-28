"use client";

import styles from "./Divider.module.css";

interface DividerProps {
  flip?: boolean;
}

export default function Divider({ flip = false }: DividerProps) {
  return (
    <div className={`${styles.divider} ${flip ? styles.flip : ""}`}>
      <div className={styles.solid}></div>
      <div className={styles.dashed}></div>
    </div>
  );
}
