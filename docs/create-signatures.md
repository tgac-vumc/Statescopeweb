---
id: create-signatures
title: Create Signatures from scRNA Data
sidebar_label: Create Signatures
---

# Create Signatures from Single-cell RNA-seq Data

This page guides you through the process of creating signature matrices (`X` and `stdX`) from your own single-cell RNA-seq data. Additionally, instructions for using a **Snakemake pipeline** and optionally scheduling it with **SLURM** on the HPC are provided.

---

## Accepted Input Formats

- **Anndata**
  - Add some information about the file types

- **Have data in some other format ?**
  - Convert it using our script
    - .rds files 
    - counts data and metadata separately (.mtx, .csv....)

---

## Steps to Create Signatures

### **1. Preprocess Your scRNA-seq Data**

- **Quality Control**: Filter out low-quality cells and genes.
- 

### **2. Annotate Cell Types**

- Assign cell type labels to each cell in your dataset.
- Ensure that the metadata includes a column for cell type annotations (e.g., `cell_type_major`).
  - For adata objects should be a column in adata.obs
  - For .rds and metadata should have an appropriate column with the cell type annotations for the cells 

### **3. Calculate Average Expression Profiles**

- **Compute `X`**: Calculate the average expression of each gene for each cell type.
  - Use log-transformed data for consistency.

- **Compute `stdX`**: Calculate the standard deviation of gene expression for each gene within each cell type.

### **4. Use the Snakemake Pipeline**

To streamline the process, you can use the Snakemake pipeline provided in the example above. It handles data preprocessing, identifying highly variable genes, running AutoGeneS, and generating the signature matrices.

---

## Using the Snakemake Pipeline

### **Prerequisites**

1. **Install Snakemake**:
   - Use `conda`:
     ```bash
     conda install -c bioconda -c conda-forge snakemake
     ```

2. **Prepare Configuration**:
   - Edit the `config.yaml` file to match your dataset:
     - Set `use_existing_h5ad` to `True` or `False`.
     - Provide paths to raw or existing `.h5ad` data.
     - Adjust parameters like `Ngenes` and relevant column names.

3. **Directory Structure**:
   - Ensure your data is organized as follows:
     ```
     data/
       ├── raw/
       │   ├── RNA_rawcounts_matrix.rds
       │   ├── metadata.csv
       ├── processed/
     results/
     scripts/
     ```

4. **Activate Environment**:
   - Use the appropriate Conda environment for each rule (e.g., `env_r.yaml`, `env_preprocess.yaml`).

---

### **Running the Pipeline**

To run the pipeline locally:

```bash
snakemake --cores 4
