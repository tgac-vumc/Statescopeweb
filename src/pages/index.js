import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import sidebars from '@site/sidebars';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarItems = sidebars?.tutorialSidebar ?? [];

  const renderSidebarItems = (items) => (
    <ul className={styles.sidebarList}>
      {items.map((item, index) => {
        if (item.type === 'category') {
          return (
            <li key={`${item.label}-${index}`} className={styles.sidebarCategory}>
              <div className={styles.sidebarCategoryLabel}>{item.label}</div>
              {renderSidebarItems(item.items)}
            </li>
          );
        }

        if (item.type === 'doc') {
          const label = item.label || item.id;
          return (
            <li key={`${item.id}-${index}`}>
              <a className={styles.sidebarLink} href={useBaseUrl(`docs/${item.id}`)}>
                {label}
              </a>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );

  return (
    <Layout title="Statescope" description="Bayesian Log Normal Deconvolution">
      <main className={styles.mainContainer} style={{ position: 'relative' }}>

        {/* ================= ANNOUNCEMENTS (OUTSIDE CONTAINER) ================= */}
        <div className={styles.announcementBox}>
          <h3>📣 Announcements</h3>
          <ul>
            <li>
              <strong>StatescopePro on development branch</strong> — Faster Deconvolution scaled for large cohorts with advanced features. Find it on branch <code>StatescopePro</code> on tgac-vumc/Statescope on GitHub.
            </li>
            <li>
              <strong>v1.0.5 released</strong> — improved GPU ↔ CPU portability
            </li>
          </ul>
        </div>

        {/* translucent overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            zIndex: 1,
          }}
        />

        {/* ================= PAGE CONTENT ================= */}
        <button
          type="button"
          className={`${styles.sidebarHandle} ${isSidebarOpen ? styles.sidebarHandleOpen : ''}`}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          aria-label={isSidebarOpen ? 'Close documentation sidebar' : 'Open documentation sidebar'}
          aria-expanded={isSidebarOpen}
        >
          <span className={styles.sidebarHandleLabel}>DOCS</span>
          <span className={styles.sidebarHandleChevron}>{'>'}</span>
        </button>
        <div
          className={`${styles.sidebarBackdrop} ${isSidebarOpen ? styles.sidebarBackdropOpen : ''}`}
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`${styles.sidebarDrawer} ${isSidebarOpen ? styles.sidebarDrawerOpen : ''}`}
          aria-hidden={!isSidebarOpen}
        >
          {renderSidebarItems(sidebarItems)}
        </aside>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* HERO BANNER */}
          <div className={`${styles.heroBox} fadeInDown`}>
            <h1 className={styles.heroTitle}>
              Statescope
            </h1>

            <p className={styles.heroSubtitle}>
              Statescope is a probabilistic framework for robust cell-type and
              cell-state inference from bulk RNA-seq data.
            </p>
          </div>

          {/* LOGO + CTA */}
          <div className={styles.heroLowerGrid}>
            <div className={styles.heroRight}>
              <div className={styles.logoContainer}>
                <img
                  src={useBaseUrl('img/new_logo_nobg.png')}
                  alt="Statescope Logo"
                  className={styles.logoImage}
                />
              </div>

              <div className={styles.buttonContainer}>
                <a
                  href={useBaseUrl('docs/installation')}
                  className={`${styles.button} ${styles.downloadButton}`}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download
                </a>

                <a
                  href="https://github.com/tgac-vumc/Statescope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.githubButton}`}
                >
                  <FontAwesomeIcon icon={faGithub} /> View on GitHub
                </a>

                <a
                  href={useBaseUrl('docs/PBMC-deconvolution')}
                  className={`${styles.button} ${styles.backButton}`}
                >
                  Example analysis <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className={`${styles.featuresSection} fadeInUp`}>
            <div className={styles.featureCard}>
              <h3>Bayesian Modeling</h3>
              <p>
                Unified Bayesian framework for cell-type fractions, in silico purification, and downstream state discovery.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Python and R packages </h3>
              <p>
                Easy install, reproducible workflows, and simple APIs for both Python and R users.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>GPU Accelerated</h3>
              <p>
                Optimized for large cohorts with seamless CPU ↔ GPU
                interoperability.
              </p>
            </div>
          </div>

          {/* OVERVIEW IMAGE */}
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
