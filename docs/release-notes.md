---
title: Release Notes
description: Statescope software updates, new features, and bug fixes
---

This page documents **user-facing releases** of **Statescope**, including new features, algorithmic improvements, and important bug fixes.  For full commit history, see the GitHub repository.

---

## <span class="release-version latest">v1.0.7</span> — February 2026

**Current stable installation version (PyPI)**

### Highlights

* Improved install reliability on modern Python environments (pip ≥ 24.1).

### Fixes & improvements

* Fixed pip ≥ 24.1 installation issues by switching to statescope-autogenes (AutoGeneS packaging-compatible fork).

* Added modern dependency pins (NumPy/SciPy/scikit-learn/pandas) to prevent legacy source builds during installation.
---

## <span class="release-version">v1.0.6</span> — February 2026

### Highlights

* Improved **CPU ↔ GPU interoperability** for saved models and execution

### Improvements

* More robust device handling to reduce CPU/GPU mismatch edge cases during load/run

---

## <span class="release-version">v1.0.4</span> — August 2025

### Highlights

* Added new visualization utilities
* Expanded and tested tutorial workflows

### New features

* Safer model load/save behavior for transferring runs between CPU and GPU environments
* Additional visualization helpers for inspecting results quality and cell-type abundance patterns
* Updated tutorial workflows aligned with the stable 1.0.x API

### Improvements

* Increased robustness of signature validation
* Improved numerical stability in internal routines
* Better handling of edge cases during data loading and preprocessing

### Bug fixes

* Fixed minor issues in tutorial notebooks
* Small fixes across visualization and utility code paths

---

## <span class="release-version">v1.0.3</span> — May 2025

### Highlights

* Improved documentation and onboarding experience

### Improvements

* Added an **Advanced Tutorial** demonstrating end-to-end workflows
* Tutorials validated against the stable 1.0.x API

---

## <span class="release-version">v1.0.2</span> — May 2025

### Bug fixes

* Fixed bulk input format validation issues
* Resolved small numerical and consistency bugs

---

## <span class="release-version">v1.0.1</span> — May 2025

### Changes

* Removed fixed random seeds to allow stochastic robustness and reproducibility testing

---

## <span class="release-version">v1.0.0</span> — May 2025

**First stable PyPI release**

### Highlights

* 🎉 First official **pip / PyPI release** of Statescope
* Stable, documented, and installable version of the framework

### Installation

```bash
pip install statescope
```
