import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerLeft}>
          <div className={styles.footerBrand}>Tumour Genome Analysis Core</div>
          <div className={styles.footerAffiliation}>Amsterdam UMC</div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerMeta}>
            <span>Statescope</span>
          </div>
          <div className={styles.footerMeta}>
            <span>Built with</span>
            <a
              href="https://docusaurus.io"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Docusaurus 3.6.1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
