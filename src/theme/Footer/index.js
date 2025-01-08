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

        {/* Right side text with a link */}
        <span className={styles.footerRight}>
          Site built with{' '}
          <a
            href="https://docusaurus.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docusaurus 3.6.1
          </a>
        </span>
      </div>
    </footer>
  );
}
