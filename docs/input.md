---
id: input
title: Input Arguments
sidebar_label: Input Arguments
---

# Input Arguments

This page outlines the required inputs and optional parameters for running **OncoBLADE**.

## Required Datasets

### 1. Signature Matrices

- **X**: An *Ngene* by *Ncell* matrix containing average gene expression profiles per cell type (a signature matrix) in **log-scale**.

- **stdX**: An *Ngene* by *Ncell* matrix containing standard deviation per gene per cell type (a signature matrix of gene expression variability).

### 2. Bulk Gene Expression Data

- **Y**: An *Ngene* by *Nsample* matrix containing bulk gene expression data. This should be in **linear-scale** data without log-transformation.

### 3. Expected Cell Fractions (Optional)

- **Expectation**: An *Nsample* by *Ncell* matrix containing the expected cell fractions used to inform **OncoBLADE** (optional).

## Options for Reference RNA-seq Data

Users have two options for obtaining signature matrices:

1. **Use Pre-processed Signatures**

   - Proceed to the [Processed Dataset](processed-signatures.md) page to download and use pre-processed signature matrices.

2. **Create Signatures from scRNA Data**

   - Follow the instructions on the [Create Signatures](create-signatures.md) page to generate signatures from single-cell RNA-seq data.

## Accepted Input Formats

### **Bulk Data**

- **Formats Accepted**:
  - **CSV**: Comma-separated values file.
  - **TSV**: Tab-separated values file.
  - **Excel**: `.xlsx` or `.xls` files.
  - **R Data Files**: `.RData` or `.rds` files containing expression matrices.

- **Requirements**:
  - Rows should represent genes, and columns should represent samples.
  - Gene identifiers should be consistent across all datasets.

### **Single-cell Data for Signature Creation**

- **Formats Accepted**:
  - **Seurat Object**: RDS files containing Seurat objects with counts and metadata.
  - **SingleCellExperiment**: RDS files containing SingleCellExperiment objects.
  - **Matrix Formats**: Sparse or dense matrices with accompanying metadata.
  - **Text Files**: Counts matrices exported as CSV or TSV files with separate metadata files.

- **Requirements**:
  - Cell type annotations must be included in the metadata.
  - Data should be preprocessed (e.g., quality control, normalization) before signature creation.

## Model Hyperparameters

Additional parameters for fine-tuning the **OncoBLADE** model:

- **Ind_Marker**: Index for marker genes.

  - **Default**: A logical vector `[True] * Ngene` (all genes used without filtering).
  - **Usage**: Genes with `False` are excluded in the first phase (Empirical Bayes) for finding the best hyperparameters.

- **Ind_sample**: Index for the samples used in the first phase (Empirical Bayes).

  - **Default**: A logical vector `[True] * Nsample` (all samples used).

- **Alpha**, **Alpha0**, **Kappa0**, **sY**: Hyperparameters used in the model.

  - **Alpha**: Optimized during the model run.
  - **Defaults**:
    - `Alpha = 1`
    - `Alpha0 = 0.1`
    - `Kappa0 = 1`
    - `sY = 1`

- **IterMax**: Maximum number of iterations between variational parameter optimization by L-BFGS and updating hyperparameter Alpha.

  - **Default**: `IterMax = 100`

- **Nrep**: Number of random initial guesses used to run **OncoBLADE**.

  - **Usage**: The best result in terms of the ELBO function will be chosen among the local optima.
  - **Default**: `Nrep = 3`

- **Njob**: Number of jobs executed in parallel.

  - **Default**: `Njob = 10`

---

**Next Steps:**

- If you have pre-processed signatures, proceed to the [Processed Signatures](processed-signatures) page.
- To create signatures from your own scRNA-seq data, visit the [Create Signatures](create-signatures) page.

---

**Placeholder Notes:**
