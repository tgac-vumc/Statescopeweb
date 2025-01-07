import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        {/* Left side text */}
        <span className={styles.footerLeft}>
          Tumour Genome Analysis Core, Amsterdam UMC
        </span>

        {/* Right side text */}
        <span className={styles.footerRight}>
          Site built with Docusaurus 2.4.0
        </span>
      </div>
    </footer>
  );
}
