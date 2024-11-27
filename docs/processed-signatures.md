---
id: processed-signatures
title: Processed Signatures
---

# Processed Signatures

This page hosts our in-house single-cell RNA (scRNA) signatures for various applications. Below, you will find details about the processed signatures, including their source, cell type information, gene count, and download links.

---

## Available Signatures

| Dataset                | Level                 | Number of Cell Types | Key Cell Types                            | Total Genes   | Source                                  | Download                                                                                 |
|------------------------|-----------------------|----------------------|-------------------------------------------|---------------|-----------------------------------------|-----------------------------------------------------------------------------------------|
| **Lung Cancer Signature** | **Level 1 (Major)**  | **Placeholder**      | Epithelial, Immune, Stromal               | **Placeholder** | [Figshare](https://figshare.com/placeholder) | <a href="https://figshare.com/placeholder" download class="download-button">Download</a> |
|                        | **Level 2 (Subtypes)** | **Placeholder**      | Basal, Luminal, T Cells, Fibroblasts      | **Placeholder** | [Figshare](https://figshare.com/placeholder) |                                                                                         |
|                        | **Level 3 (Detailed)** | **Placeholder**      | CD4+ T cells, CD8+ T cells, CAFs          | **Placeholder** | [Figshare](https://figshare.com/placeholder) |                                                                                         |

---

## Signature File Contents

Each signature file is provided in a **pickle format** (`.pickle`) and contains the following data:

1. **Gene-Level Statistics:**
   - **Mean Expression:** Average gene expression values across all cells for each cell type.
   - **Variance:** Variability in expression for each gene across cells.
   - **Standard Deviation:** Standard deviation of gene expression for each gene within each cell type.

2. **Gene Lists:**
   - **Total Genes:** The total number of genes included in the dataset.
   - **Highly Variable Genes (HVGs):** Genes identified as highly variable, which contribute significantly to the analysis.
   - **Differentially Expressed Genes (DEGs):** Genes selected by **AutoGenes**, including the number of DEGs identified.

3. **Cell Types:**
   - A complete list of cell types present in the dataset, organized by hierarchical levels (e.g., major, subtype, detailed).

---

### How to Use

1. Select the desired signature from the table above.
2. Click the **Download** button to access the file.
3. Use the appropriate level based on your analysis requirements:
   - **Level 1 (Major):** Broad categories of cell types.
   - **Level 2 (Subtypes):** Subdivisions within major categories.
   - **Level 3 (Detailed):** Detailed classification of cell types.

4. Refer to the [Tutorial] for guidance on using these signatures in your workflows.

---

## Notes

- The **pickle file** is Python-compatible. Users of other programming environments (e.g., R) may need to convert the file using a Python script.
- Ensure that gene identifiers in the signature match those in your bulk RNA-seq data to avoid discrepancies during analysis.
- This page will be regularly updated as new signatures are added. If you have feedback or specific requests, please contact us.

---

> **Feedback:** For specific datasets or additional levels of detail, please reach out to our team through the contact form on the main site.

