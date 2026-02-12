---
title: Release Notes
description: Statescope software updates, new features, and bug fixes
---

This page documents **user-facing releases** of **Statescope**, including new features, algorithmic improvements, and important bug fixes.  
For full commit history, see the GitHub repository.

---

## <span class="release-version latest">v1.0.4</span><span class="release-tag">LATEST</span> — August 2025

### Highlights
- Improved **GPU ↔ CPU interoperability**
- New visualization utilities
- Expanded and tested tutorial workflows

### New features
- Safe model load/save functions enabling seamless transfer between GPU and CPU environments
- New plotting helper: `Boxplot_CelltypeAbundance()` for inspecting cell-type abundance distributions
- Advanced tutorial notebook aligned with the current stable release

### Improvements
- Increased robustness of signature validation
- Improved numerical stability in internal model routines
- Better handling of edge cases during data loading and preprocessing

### Bug fixes
- Fixed datetime-related issues in tutorial notebooks
- Minor fixes across tutorial and visualization code paths

---

## <span class="release-version">v1.0.3</span> — May 2025

### Highlights
- Improved documentation and onboarding experience

### Improvements
- Added an **Advanced Tutorial** demonstrating full end-to-end Statescope workflows
- Tutorials validated against the stable 1.0.x API

---

## <span class="release-version">v1.0.2</span> — May 2025

### Bug fixes
- Fixed bulk input format validation issues
- Resolved small numerical and consistency bugs

---

## <span class="release-version">v1.0.1</span> — May 2025

### Changes
- Removed fixed random seeds to allow stochastic robustness and reproducibility testing

---

## <span class="release-version">v1.0.0</span> — May 2025  
**First stable PyPI release**

### Highlights
- 🎉 First official **pip / PyPI release** of Statescope
- Stable, documented, and installable version of the framework

### Core features
- Bayesian log-normal deconvolution of bulk RNA-seq data
- Cell-type fraction estimation
- Cell-state discovery using cNMF
- Refinement and state retrieval workflows
- GPU and CPU support

### Installation
```bash
pip install statescope
