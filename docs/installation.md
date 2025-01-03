---
id: installation
title: Installation Guide
sidebar_position: 1
---

## Hardware Requirements

## Hardware Requirements

Statescope can operate on a variety of systems depending on the data size:

- **Small-scale data**: Suitable for Binder (1 CPU, 2GB RAM on Google Cloud).
- **Large-scale data**: Performance improves significantly with higher computational power. Our recommendation for optimal performance is:
  - **CPU**: 40 threads (Xeon 2.60GHz or equivalent)
  - **Memory**: 128 GB RAM

Statescope’s Empirical Bayes procedure includes independent optimization steps that can be parallelized to leverage multiple CPUs for faster execution.

> **Note**: For faster performance, the Statescope deconvolution module has GPU support, which can make computations 3-4 times faster.

### OS Requirements

BLADE is primarily tested on Linux-based operating systems. We recommend:
- **Linux distributions**: CentOS 7 or Ubuntu 16.04.
  
> **Note**: While BLADE might work on other OS platforms (macOS, Windows with WSL), these setups may require additional configurations.


## Installation Steps

### Installation Tutorials

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/custom.css';

<Tabs>
  <TabItem value="python" label="Python Installation" default>

#### Python Installation

To install **Statescope** using pip, run the following command:

```bash
pip install Statescope
```

To manage dependencies, use Conda and the `environment.yml` file for a consistent environment setup:

1. **Download the `environment.yml` file**:  <a href="/BLADE-site/BLADE/static/environment.yml" download class="download-button">Download environment.yml</a>


   - Place the file in your working directory.

2. **Create the Conda environment**:

   ```bash
   conda env create -f environment.yml -n blade_env
   ```

3. **Activate the environment**:

   ```bash
   conda activate blade_env
   ```

4. **Update the environment if necessary**:
  

   ```bash
   conda env update -f environment.yml
   ```
  

</TabItem>

<TabItem value="r" label="R Installation">

#### R Installation

To install **BLADE** from Bioconductor, use the following commands:

```r
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("BLADE")
```

### Setting up an R Environment (Placeholder Steps)

1. Install R and RStudio from [CRAN](https://cran.r-project.org/) or [RStudio](https://www.rstudio.com/).

2. Use the following commands to set up a project environment in RStudio:

   ```r
   install.packages("renv")
   renv::init()
   ```

3. Ensure all dependencies are installed by running:

   ```r
   renv::restore()
   ```

4. Verify the installation:

   ```r
   library(BLADE)
   ```

</TabItem>

<TabItem value="github" label="GitHub Repository">

#### GitHub Installation

To clone the GitHub repository, execute the following commands:

```bash
git clone https://github.com/aryamaanbose/BLADE_tasks.git
cd BLADE_tasks
```

### Setting up the Repository (Placeholder Steps)

1. Ensure `git` is installed:

   ```bash
   git --version
   ```

2. Create a Conda environment and install dependencies:

   ```bash
   conda env create -f environment.yml -n blade_repo_env
   conda activate blade_repo_env
   ```

3. Pull updates regularly:

   ```bash
   git pull origin main
   ```

4. Start using the repository for your tasks.

</TabItem>
</Tabs>

#####Make it bigger 
**Demo**
You can find the demo for Statescope in the GitHub repository. It is provided as a Jupyter notebook and can be accessed here.

### Additional Information

#### Step 1: Installing Conda

If you don’t already have Conda installed, you can download and install Miniconda by following these steps:

1. Go to the [Miniconda download page](https://docs.conda.io/en/latest/miniconda.html).
2. Download the appropriate installer for your OS.
3. Follow the installation instructions for your operating system to set up Conda.

After installation, you can verify Conda by running:

```bash
conda --version
```

#### Step 2: Updating the Environment

To keep your environment up-to-date, pull the latest changes from the repository and update the environment:

```bash
git pull origin main
conda env update -f environment.yml
