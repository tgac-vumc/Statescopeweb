---
id: installation
title: Installation Guide
sidebar_position: 1
---


## Hardware Requirements

BLADE can operate on a variety of systems depending on the data size:
- **Small-scale data**: Suitable for Binder (1 CPU, 2GB RAM on Google Cloud).
- **Large-scale data**: Performance improves significantly with higher computational power. Our recommendation for optimal performance is:
  - **CPU**: 40 threads (Xeon 2.60GHz or equivalent)
  - **Memory**: 128 GB RAM

BLADE’s Empirical Bayes procedure includes independent optimization steps that can be parallelized to leverage multiple CPUs for faster execution.

### OS Requirements

BLADE is primarily tested on Linux-based operating systems. We recommend:
- **Linux distributions**: CentOS 7 or Ubuntu 16.04.
  
> **Note**: While BLADE might work on other OS platforms (macOS, Windows with WSL), these setups may require additional configurations.

## Installation Steps

### 1. Install 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/custom.css';


<Tabs>
  <TabItem value="python" label="Python Installation" default>
    To install **OncoBLADE** using pip, run the following command:

    ```bash
    pip install OncoBLADE
    ```
  </TabItem>

  <TabItem value="r" label="R Installation">
    To install **BLADE** from Bioconductor in R, use the following commands:

    ```r
    if (!requireNamespace("BiocManager", quietly = TRUE))
        install.packages("BiocManager")
    BiocManager::install("BLADE")
    ```
  </TabItem>

  <TabItem value="github" label="GitHub Repository">
    To clone the GitHub repository, execute:

    ```bash
    git clone https://github.com/aryamaanbose/BLADE_tasks.git
    cd BLADE_tasks
    ```
  </TabItem>
</Tabs>

### 2. Creating a Conda Environment

To manage dependencies for BLADE, we recommend creating a Conda environment using the `environment.yml` file.

1. **Download the `environment.yml` file**  
   Click the button below to download the file: <a href="/BLADE-site/BLADE/static/environment.yml" download class="download-button">Download environment.yml</a>
2. **Create the Conda environment**  
   Open your terminal and navigate to the directory where the `environment.yml` file is located. Then, run the following command:

   ```bash
   conda env create -f environment.yml -n BLADE
   ````


#### Step 1: Installing Conda

If you don’t already have Conda installed, you can download and install Miniconda by following these steps:

1. Go to the [Miniconda download page](https://docs.conda.io/en/latest/miniconda.html).
2. Download the appropriate installer for your OS.
3. Follow the installation instructions for your operating system to set up Conda.

After installation, you can verify Conda by running:

```bash
conda --version
```

#### Step 2: Creating the Conda Environment

Ensure you are in the `BLADE_tasks` directory, where the `environment.yml` file is located, and create the environment using:

```bash
conda env create -f environment.yml
```

This command will create an environment named `snakemake` with all necessary dependencies for BLADE.

#### Step 3: Activating the Environment

To activate the environment, run:

```bash
conda activate snakemake
```

Once activated, you are ready to use BLADE within this environment.

#### Step 4: Updating the Environment

To keep your environment up-to-date, you can pull the latest changes from the repository and update the environment:

**Pull the latest changes:**

```bash
git pull origin main
```

**Update the Conda environment:**

```bash
conda env update -f environment.yml
```

This command will ensure your `snakemake` environment is updated with any new dependencies added to the `environment.yml` file.

