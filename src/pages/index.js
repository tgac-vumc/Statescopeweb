import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Correct library for GitHub


export default function Home() {
  return (
    <Layout title="Statescope" description="Bayesian Log Normal Deconvolution">
      <main className={styles.mainContainer}>
        <div className={styles.badge}>
          Under Development
        </div>
        <div className="container">
          <div className={styles.logoContainer}>
            <img src="/img/Logo_statescope.png" alt="Statescope Logo" className={styles.logoImage} />
          </div>
          <div className={styles.buttonContainer}>
            <a href="/docs/installation" className={`${styles.button} ${styles.downloadButton}`}>
                <FontAwesomeIcon icon={faDownload} /> Download
            </a>
            <a href="https://github.com/tgac-vumc/OncoBLADE.git" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.githubButton}`}>
                <FontAwesomeIcon icon={faGithub} /> View on GitHub
            </a>
        </div>

          <div className={styles.imageContainer}>
            <img src="/img/Statescope_overview.png" alt="Statescope Overview" className={styles.responsiveImage} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
