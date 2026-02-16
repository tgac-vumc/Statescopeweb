---
id: development
title: Development Branch
---

---

# StatescopePro (Dev) — Overview

**StatescopePro** is the **next-generation (development)** implementation of Statescope: a **memory- and time-efficient PyTorch-based rewrite** designed for faster, more scalable deconvolution on large cohorts—while preserving the same core **Bayesian log-normal model**.

## Where to find it

You can find StatescopePro on GitHub in the **development branch**:

* **Repo:** `tgac-vumc/Statescope`
* **Branch:** `dev`
* **Folder / module:** `StatescopePro`

> The `StatescopePro` directory contains a **README** with the most up-to-date **API usage**, **installation notes**, and **troubleshooting** steps.

---
* PyTorch rewrite: faster runtimes + easier GPU use.

* Lower memory: more efficient tensors/caching → better for large cohorts.

* Same model: preserves the Bayesian log-normal framework; results stay near-identical (within numerical tolerance).

* Cleaner codebase: easier profiling, debugging, and extending.