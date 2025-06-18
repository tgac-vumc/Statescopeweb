---
id: api-reference
title: Statescope API Reference
sidebar_label: API Reference
---


## Class: `Statescope`

### Initialize Statescope

```python
Statescope_model = Initialize_Statescope(Bulk, TumorType='NSCLC')
```

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `Bulk` | `pandas.DataFrame` | Bulk gene expression matrix (library-size-corrected counts). |
| `TumorType` | `str` | Tumor type to select predefined signature (e.g., `"NSCLC"`, `"PDAC"`). |
| `Ncelltypes` | `int` | Number of cell types in the signature. |
| `celltype_key` | `str` | Key to use for cell type in AnnData. |
| `Ncores` | `int` | Number of cores to use for parallel computing. |

---

## Deconvolution Functions

| Function | Description |
|----------|------------|
| `Deconvolution()` | Performs Bayesian Log Normal Deconvolution. |
| `Refinement()` | Refines gene expression after deconvolution. |
| `StateDiscovery()` | Discovers cellular states using **cNMF**. |

### `Deconvolution()`

```python
Statescope_model.Deconvolution()
```

Performs BLADE-based deconvolution on bulk RNA-seq data.

---

## Construction and Initialization

| Function | Description |
|----------|------------|
| `Initialize_Statescope()` | Initializes the **Statescope** model with bulk data and signatures. |
| `fetch_signature()` | Retrieves the precomputed signature matrix. |
| `list_available_signatures()` | Lists all available signatures. |

### `Initialize_Statescope()`

```python
Statescope_model = Initialize_Statescope(Bulk, TumorType="NSCLC")
```

Initializes the **Statescope** object.

---

## Visualization Functions

| Function | Description |
|----------|------------|
| `Heatmap_Fractions()` | Plots a heatmap of deconvolution cell type fractions. |
| `Heatmap_StateScores()` | Visualizes **state scores** in a heatmap. |
| `Heatmap_GEX()` | Displays the **gene expression matrix**. |
| `TSNE_AllStates()` | Performs **t-SNE clustering** for all states. |
| `TSNE_CellTypes()` | Runs **t-SNE per cell type**. |

### `Heatmap_Fractions()`

```python
Heatmap_Fractions(Statescope_model)
```

Plots a heatmap of **cell type proportions** per sample.

---

## Utility Functions

| Function | Description |
|----------|------------|
| `Extract_GEX()` | Extracts purified gene expression for a given cell type. |
| `Extract_StateScores()` | Extracts **state scores** per sample. |
| `Extract_StateLoadings()` | Extracts **state loadings** for gene expression clustering. |
| `Create_Cluster_Matrix()` | Generates scaled data matrices for clustering. |

### `Extract_GEX()`

```python
Extract_GEX(Statescope_model, celltype="T_cells_CD8+")
```

Retrieves refined gene expression data per cell type.

---
