---
id: about
title: About
sidebar_position: 5
---

# About Statescope

Statescope is a comprehensive computational framework for dissecting bulk gene expression data by integrating high-resolution single-cell information. It employs a multi-step pipeline to estimate cellular compositions, refine cell type–specific expression profiles, and uncover latent cellular states. The framework leverages advanced algorithmic and mathematical concepts—such as iterative optimization, non-negative matrix factorization, and consensus clustering—to provide a robust and detailed analysis of cellular heterogeneity.

---

## Overview of the Pipeline

The Statescope workflow consists of three sequential stages:

1. **Deconvolution:**  
   Unmixes the bulk RNA-seq signal by estimating the relative proportions of different cell types using prior single-cell marker data.

2. **Refinement (Purification):**  
   Improves the initial estimates from deconvolution by integrating the full gene expression profile, reducing noise, and correcting biases through an iterative optimization process.

3. **State Discovery:**  
   Reveals latent subpopulations (or states) within each cell type via convex non-negative matrix factorization (cNMF) and consensus clustering methods.

Each stage builds on the previous one, ensuring that the final results capture both the overall cellular composition and the intra-cell type heterogeneity.

---

## Detailed Workflow and Mathematical Concepts

### 1. Deconvolution

**Purpose:**  
To estimate the fraction of each cell type in a bulk sample by “unmixing” the observed expression data.

**Key Inputs:**
- **Bulk Expression Data:**  
  Gene expression values measured across samples.
- **Marker Genes & Single-Cell Profiles:**  
  High-resolution single-cell expression data (including measures of variability) for a predefined set of marker genes.
 
Deconvolution in Statescope is implemented within a Bayesian framework. Here, the bulk expression is assumed to be generated as a weighted combination of cell type–specific expression profiles, where the weights (cell fractions) follow a probability distribution (typically a Dirichlet distribution). The method minimizes the difference between the observed bulk data and a reconstruction computed from the single-cell signatures using an iterative least-squares optimization approach, with additional regularization to prevent overfitting. Multiple random initializations are used to ensure robustness and avoid local minima.

**Output:**  
- A model object containing optimized parameters.
- A fraction matrix that provides the estimated cell type proportions for each sample.

---

### 2. Refinement (Purification)

**Purpose:**  
To enhance the initial cell type–specific expression estimates by incorporating the full gene expression profile, thereby producing more accurate and noise-reduced data.

**Key Inputs:**
- **Initial Deconvolution Output:**  
  The estimated cell type fractions and marker-based expression profiles.
- **Full Single-Cell Gene Expression Data:**  
  Comprehensive expression measurements across thousands of genes.
- **Aligned Bulk Data:**  
  Bulk expression data filtered to include all genes common to both datasets.

Refinement is formulated as a regularized least-squares minimization problem. The goal is to adjust the cell type-specific expression estimates so that the combined (weighted) expression profiles reconstruct the observed bulk data as accurately as possible. Simultaneously, a regularization term penalizes deviations from the original single-cell expression profiles. This balance between data fidelity and prior consistency is achieved through iterative updates—using alternating or gradient-based methods—until convergence is reached.

**Output:**  
- Refined gene expression matrices (one for each cell type) that provide improved estimates.

---

### 3. State Discovery

**Purpose:**  
To uncover latent cellular states within each cell type, capturing additional layers of functional or phenotypic heterogeneity.

**Key Inputs:**
- **Refined Gene Expression Data:**  
  The noise-reduced expression matrices for each cell type.
- **Variability Information:**  
  Data describing the variability in gene expression, used to weight the expression data appropriately.
- **Cell Type Fractions:**  
  The previously estimated cell type proportions, which help in scaling the data.

State discovery is performed using convex non-negative matrix factorization (cNMF). This technique decomposes the refined expression data into two non-negative matrices: one representing state loadings (the contribution of each gene to latent states) and the other representing state scores (the activity of each state across samples). The non-negativity constraints ensure that the factors are interpretable in a biological context. To determine the optimal number of latent states, the algorithm conducts multiple cNMF runs over a range of candidate state numbers and uses consensus clustering to assess the stability of the results. A metric such as the cophenetic correlation coefficient is used to select the most robust solution.

**Output:**  
- A state scores matrix that quantifies the contribution of each latent state across samples.
- A state loadings matrix that shows the association strength of each gene with each latent state.


## Conclusion

Statescope combines rigorous Bayesian inference, iterative optimization, and advanced matrix factorization techniques to deliver a high-resolution view of cellular composition and heterogeneity. By integrating bulk RNA-seq with single-cell data, it not only estimates cell type proportions but also refines expression profiles and identifies hidden cellular states—offering a powerful tool for studying complex biological systems.

---