---
id: installation
title: Installation Guide
sidebar_position: 1
---

## Hardware Requirements

Statescope is designed to scale from lightweight demo usage to large cohort-level Bayesian analyses.
Performance depends strongly on **sample size**, **parallelization strategy**, and **GPU VRAM availability**.

### Recommended Configurations

#### Small-scale data (tutorials, testing, serial jobs)
- Sample size: ~50 samples
- CPU: 1–4 cores
- Memory: 8–16 GB RAM
- GPU: optional (small VRAM sufficient)

---

#### Medium-scale data (hundreds of samples)
- CPU: 16–32 threads
- Memory: 64–128 GB RAM
- GPU: optional but recommended


---

#### Large-scale data (≥1,000 samples, full Bayesian optimization)
- CPU: 32–64 threads (Xeon / EPYC class, ≥2.6 GHz)
- Memory: **128 GB RAM or more**
- GPU (recommended):
  - NVIDIA A100 / A40 / RTX 3090 / H100
  - **≥40 GB VRAM** strongly recommended

> GPU acceleration typically provides a **6–7× speed-up** compared to CPU-only execution  
> (e.g. **3 minutes on GPU vs ~20 minutes on CPU**).


## Operating System Requirements

Statescope is primarily tested on **Linux-based systems**:

- Ubuntu 20.04 / 22.04 (recommended)
- CentOS 7 / Rocky Linux 8+

> macOS and Windows (via WSL) may work but are not officially benchmarked.

---

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="python" label="Python Installation" default>

### Python Installation

Statescope can be installed **directly via pip**.  
A Conda environment is **not required**, but can be used if desired.

```bash
pip install Statescope
````

#### Requirements

* Python ≥ **3.9**
* `pip` **< 23.24**
  (tested with `pip 23.23`)

</TabItem>

<TabItem value="r" label="R Installation (StatescopeR)">

### R Installation (Bioconductor)

The R implementation **StatescopeR** is a **separate package** maintained independently
from the Python version.

* **GitHub repository**
  [https://github.com/tgac-vumc/StatescopeR](https://github.com/tgac-vumc/StatescopeR)

StatescopeR is distributed via **Bioconductor (devel)** and manages its own runtime
dependencies internally using **Bioconductor + basilisk**.

No Conda environment is required for R usage.

---

#### Documentation

* [https://bioc.r-universe.dev/articles/StatescopeR/StatescopeR.html](https://bioc.r-universe.dev/articles/StatescopeR/StatescopeR.html)
* [https://bioconductor.org/packages/devel/bioc/html/StatescopeR.html](https://bioconductor.org/packages/devel/bioc/html/StatescopeR.html)

---

#### Installation

```r
if (!requireNamespace("BiocManager", quietly = TRUE))
  install.packages("BiocManager")

# Initialize Bioconductor devel
BiocManager::install(version = "devel")

BiocManager::install("StatescopeR")
```

---

#### Package Details

* Package: **StatescopeR**
* Version: **0.99.33**
* Bioconductor: **3.23**
* R ≥ **4.6.0**
* License: **MIT**

---

#### Environment Handling (R)

* Python dependencies (if required) are managed internally via **basilisk**
* Designed for reproducible R ↔ Python workflows using `reticulate`
* No external Conda or virtualenv setup is needed

</TabItem>

<TabItem value="github" label="GitHub / Conda Environment">

### GitHub Installation

Clone the Python repository:

```bash
git clone https://github.com/tgac-vumc/Statescope.git
cd Statescope
```

---

### Optional: Conda Environment

An `environment.yaml` file is provided for users who want a **fully reproducible setup**
(Python + optional R tooling).

```bash
conda env create -f environment.yaml
conda activate statescope
```

#### Environment Includes

* Python dependencies
* Optional R ≥ 4.6
* StatescopeR
* `reticulate` integration

</TabItem>

</Tabs>

---

## Running a Demo Script

A basic demo notebook is provided in the tutorial folder.

After installation, launch:

```bash
jupyter notebook tutorial/BasicTutorial.ipynb
```

---

## Optional: Installing Conda

If you choose to use Conda and do not have it installed:

1. Visit [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
2. Download the installer for your OS
3. Follow the installation instructions

Verify installation:

```bash
conda --version
```


