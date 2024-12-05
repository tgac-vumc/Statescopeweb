---
id: create-signatures
title: Create Signatures from scRNA Data
sidebar_label: Create Signatures
---
# Create Signatures from Single-cell RNA-seq Data

This page guides you through the process of creating signature matrices (`X` and `stdX`) from your own single-cell RNA-seq data. Additionally, instructions for using a **Snakemake pipeline** are provided.

## Directory Structure

To generate the signature matrices, we use the `SignaturePipeline` subdirectory, which contains the necessary scripts and environments. The directory structure is as follows:

```
SignaturePipeline/
├── Data
├── envs
├── scripts
├── Snakemake
└── ...
```

- **Data**: Place your input data files here.
- **envs**: Contains conda environment files for reproducibility.
- **scripts**: Contains the scripts used in the pipeline.
- **Snakemake**: Contains the Snakemake workflow files.

## Configuring the Pipeline

To specify the file paths to your data and adjust other settings, edit the `config.yaml` file located under `SignaturePipeline/config.yaml`.

```yaml
data:
  use_existing_h5ad: True
  existing_h5ad_path: "/path/to/your/full_atlas_merged.h5ad"
  counts_matrix: "data/raw/RNA_rawcounts_matrix.rds"
  metadata: "data/raw/metadata.csv"
  cell_type_column: "cell_type_major"    # Ensure this matches the actual column name
  condition_column: "condition"
  origin_column: "origin"
  subtypes: ["NSCLC"]  # Optional, for future use
  cell_types_to_include: []  # Optional

all:
  Ngenes: ['400', '600', 'All']
```
### Parameter Descriptions

- **`use_existing_h5ad`**: Set to `True` if you have an existing `.h5ad` file; otherwise, set to `False` to generate it from counts and metadata.
- **`existing_h5ad_path`**: Path to your existing `.h5ad` file containing AnnData objects.
- **`counts_matrix`**: Path to your counts matrix file (if not using an existing `.h5ad` file).
- **`metadata`**: Path to your metadata file containing cell annotations.
- **`cell_type_column`**: The column name in your metadata that contains cell type information. **Ensure this matches exactly**.
- **`condition_column`**: Column name for condition labels (e.g., treatment vs. control).
- **`origin_column`**: Column indicating the origin of cells (e.g., patient ID).
- **`subtypes`**: Optional list for specifying subtypes (e.g., `["NSCLC"]`).
- **`cell_types_to_include`**: Optional list of specific cell types to include.
- **`Ngenes`**: List of gene counts to select for creating the signature matrices. Options include `'400'`, `'600'`, or `'All'`.

---

## Accepted Input Formats
- **h5ad Objects** (Highly Recommended)
  - Format: `.h5ad` files containing AnnData objects.
  - How to Get: You can generate `.h5ad` files using [Scanpy](https://scanpy.readthedocs.io/) or convert existing Seurat or SingleCellExperiment objects using tools like [SeuratDisk](https://mojaveazure.github.io/seurat-disk/).
- **Seurat Objects**
  - Format: `.rds` files containing Seurat objects.
  - Version: Compatible with Seurat v3 and above.

- **SingleCellExperiment Objects**
  - Format: `.rds` files containing SingleCellExperiment objects.

- **Counts Matrices with Metadata**
  - Counts matrix in CSV or TSV format.
  - Metadata file containing cell annotations.

---

## Steps to Create Signatures

### **1. Preprocess Your scRNA-seq Data**

- **Quality Control**: Filter out low-quality cells and genes.
- **Normalization**: Normalize the data to account for sequencing depth.
- **Feature Selection**: Identify highly variable genes if necessary.

### **2. Annotate Cell Types**

- Assign cell type labels to each cell in your dataset.
- Ensure that the metadata includes a column for cell type annotations (e.g., `cell_type_major`).

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
