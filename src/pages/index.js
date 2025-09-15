import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Layout title="Statescope" description="Bayesian Log Normal Deconvolution">
      <main
        className={styles.mainContainer}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
        }}
      >
        {/* translucent overlay for readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            zIndex: 1,
          }}
        />

        {/* example analysis link */}
        <div className={`${styles.topLeftContainer} fadeInDown`}>
          <a
            href={useBaseUrl('docs/PBMC-deconvolution')}
            className={`${styles.button} ${styles.backButton}`}
          >
            Example analysis with Statescope&nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        {/* development badge */}
        <div className={`${styles.badge} fadeInDown`} style={{ position: 'relative', zIndex: 2 }}>
          Under Development
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={`${styles.logoContainer} fadeInDown`}>
            <img
              src={useBaseUrl('img/Logo_Statescope.jpg')}
              alt="Statescope Logo"
              className={styles.logoImage}
            />
          </div>

          <div className={`${styles.buttonContainer} fadeInUp`}>
            <a
              href={useBaseUrl('docs/installation')}
              className={`${styles.button} ${styles.downloadButton}`}
            >
              <FontAwesomeIcon icon={faDownload} /> Download
            </a>
            <a
              href="https://github.com/tgac-vumc/Statescope.git"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.githubButton}`}
            >
              <FontAwesomeIcon icon={faGithub} /> View on GitHub
            </a>
          </div>

          <div className={`${styles.imageContainer} fadeIn`}>
            <img
              src={useBaseUrl('img/Statescope_Overview.jpg')}
              alt="Statescope Overview"
              className={styles.responsiveImage}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
