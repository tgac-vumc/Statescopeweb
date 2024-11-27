---
id: PBMC-deconvolution
title: Deconvolution of PBMC Data
---

# Deconvolution of NSCLC Data

This tutorial explains how to use **BLADE** for NSCLC data deconvolution. It covers repository setup, signature creation, deconvolution execution on an HPC server, and visualizing the results.

---

## Prerequisites

1. **Access to an HPC Cluster**: Ensure you have SLURM or a similar job scheduler installed on your HPC.
2. **Git and Conda Installed**: Git for pulling the repository and Conda for managing environments.
3. **Bulk RNA-seq Data**: A transcriptome matrix in `.csv`, `.tsv`, or `.txt` format.

---

## Step 1: Pull the Repository

Clone the **BLADE** repository to your HPC server:

```bash
git clone https://github.com/aryamaanbose/BLADE.git
cd BLADE
```

---

## Step 2: Setup and Create Conda Environments

Ensure Conda is installed on your system. Create the required environments:

```bash
conda env create -f envs/oncoBLADE.yaml
conda env create -f envs/env_preprocess.yaml
```

Activate the `oncoBLADE` environment when running deconvolution:

```bash
conda activate oncoBLADE
```

---

## Step 3: Use Processed Signatures or Create New Signatures

### Option 1: Use Processed Signatures

Pre-processed signatures are provided in the repository. Use the file located at:

```bash
SignaturePipeline/output/Corrected_Signature_matrix.pickle
```

Ensure your bulk RNA-seq data matches the format of the signature file.

---

### Option 2: Create New Signatures

To create new signatures from single-cell RNA-seq data, follow these steps:

1. Prepare the raw data files:
   - Counts matrix in `.rds` or `.mtx` format.
   - Metadata in `.csv` format.

2. Edit the `config.yaml` file to specify the paths to your data:

   ```yaml
   data:
     counts_matrix: "data/raw/RNA_rawcounts_matrix.rds"
     metadata: "data/raw/metadata.csv"
     cell_type_column: "cell_type_major"
   ```

3. Run the Snakemake pipeline to preprocess the data and create signatures:

   ```bash
   snakemake -s Snakefile --cores 4 --use-conda
   ```

This will generate a corrected signature matrix at:

```bash
output/Corrected_Signature_matrix.pickle
```

---

## Step 4: Run Deconvolution on an HPC Server

### SLURM Job Script

Create a SLURM job script (`run_deconvolution.sh`) to execute the workflow:

```bash
#!/bin/bash
#SBATCH --job-name=pbmc_deconvolution
#SBATCH --output=logs/deconvolution_%j.out
#SBATCH --error=logs/deconvolution_%j.err
#SBATCH --time=24:00:00
#SBATCH --cpus-per-task=8
#SBATCH --mem=32G
#SBATCH --partition=standard

# Load required modules
module load python/3.8  # Adjust based on your cluster configuration

# Activate Conda environment
source activate oncoBLADE

# Run deconvolution
snakemake -s Snakefile \
    --cluster "sbatch --job-name={rule} --cpus-per-task={threads} --mem={resources.mem_mb} --output=logs/%x-%j.out --error=logs/%x-%j.err" \
    --default-resources mem_mb=32000 threads=1 \
    --use-conda \
    --jobs 10 \
    -p
```

Submit the job to SLURM:

```bash
sbatch run_deconvolution.sh
```

---

## Step 5: Visualize Results

The workflow generates several output files, including visualizations. To analyze and visualize the results:

### Deconvolution Outputs:

1. `output/torch/oncoBLADE_output.pickle`: Contains deconvolution results.
2. `graphs/estimated_fractions.png`: Visualization of estimated cell fractions.

---

### Python Script for Custom Visualization

Use the following script to load and plot the deconvolution results:

```python
import pickle
import pandas as pd
import matplotlib.pyplot as plt

# Load deconvolution results
with open('output/torch/oncoBLADE_output.pickle', 'rb') as f:
    results = pickle.load(f)

# Convert to DataFrame
fractions = pd.DataFrame(results['cell_fractions'])
fractions.index = results['samples']
fractions.columns = results['cell_types']

# Plot estimated cell fractions
fractions.plot(kind='bar', stacked=True, figsize=(10, 6))
plt.title('Estimated Cell Fractions')
plt.ylabel('Fraction')
plt.xlabel('Samples')
plt.legend(loc='upper right', bbox_to_anchor=(1.25, 1))
plt.tight_layout()
plt.savefig('graphs/custom_estimated_fractions.png')
plt.show()
```

---



