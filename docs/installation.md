---
id: installation
title: Installation Guide
sidebar_position: 1
---

## 🖥️ Hardware Requirements

Statescope can operate on a variety of systems depending on the data size:

- **Small-scale data**: Suitable for Binder (1 CPU, 2GB RAM on Google Cloud).
- **Large-scale data**: Performance improves significantly with higher computational power. Our recommendation for optimal performance is:
  - **CPU**: 40 threads (Xeon 2.60GHz or equivalent)
  - **Memory**: 128 GB RAM

Statescope’s Empirical Bayes procedure includes independent optimization steps that can be parallelized to leverage multiple CPUs for faster execution.

> **Note**: For faster performance, the Statescope deconvolution module has GPU support, which can make computations 3-4 times faster.

### OS Requirements

Statescope is primarily tested on Linux-based operating systems. We recommend:
- **Linux distributions**: CentOS 7 or Ubuntu 16.04.
  
> **Note**: While BLADE might work on other OS platforms (macOS, Windows with WSL), these setups may require additional configurations.


## ⬇️ Installation Tutorials

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/custom.css';

<Tabs>
  <TabItem value="python" label="Python Installation" default>

### Python Installation

To manage dependencies, use a Conda enviroment for a consistent environment setup:

1. **Create the Conda environment**:

   ```bash
   conda create -n statescope_env python=3.8
   conda activate statescope_env
   ```

2. **Activate the environment**:

   ```bash
   conda activate statescope_env
   ```

3. **Install Statescope**

To install **Statescope** using pip, run the following command:

```bash
pip install --extra-index-url https://test.pypi.org/simple/ Statescope==0.2.0
```

  

</TabItem>

<TabItem value="r" label="R Installation">

### R Installation

To install **Statescope** from Bioconductor, use the following commands:

```r
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("Statescope")
```

</TabItem>

<TabItem value="github" label="GitHub Repository">

### GitHub Installation

To clone the GitHub repository, execute the following commands:

```bash
git clone https://github.com/tgac-vumc/Statescope.git
```



</TabItem>
</Tabs>

## 📽️ Running a Demo Script

You can find a basic demo script under the [Tutorial](../docs/python.md). You can open the script using the command below after installing **Statescope**:

```bash
jupyter notebook tutorial/BasicTutorial.ipynb
```

## 🛠️Additional Information

#### Installing Conda

If you don’t already have Conda installed, you can download and install Miniconda by following these steps:

1. Go to the [Miniconda download page](https://docs.conda.io/en/latest/miniconda.html).
2. Download the appropriate installer for your OS.
3. Follow the installation instructions for your operating system to set up Conda.

After installation, you can verify Conda by running:

```bash
conda --version
```
