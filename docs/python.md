---
id: python
title: Python tutorial for Statescope
---



# Statescope Tutorial

In this tutorial, we will walk through setting up and running the **Statescope** package in Python for bulk data analysis. We will cover installation, environment setup, data import, deconvolution, refinement, and cell state discovery.

---

## 1. Installation

Please follow the [Installation Steps](installation.md) and create or activate your conda environment:

```bash
conda create -n statescope_env python=3.8
conda activate statescope_env
```

Make sure you have the necessary dependencies installed before proceeding.



## 2. Importing Dependencies

Below is an example of how you might structure your imports within a Python script or Jupyter notebook. Adjust paths and filenames as needed.

```python
import Statescope
from Statescope import Initialize_Statescope
import pandas as pd
import pickle
```

---

## 3. Loading Your Bulk Data

For this tutorial, we’ll demonstrate using test data from a GitHub repository. 
Replace the URL below with your own bulk data source as needed.

```python
# Example test dataset (subset of transcriptome data)
Bulk = pd.read_csv(
    'https://github.com/tgac-vumc/OncoBLADE/raw/refs/heads/main/data/Transcriptome_matrix_subset.txt',
    sep='\t',
    index_col='symbol'
)
```

For loading your own Bulk RNA-seq data check the input requirements for the dataset on the [Input Requirements](input.md)

---

## 4. Initializing Statescope

Choose an appropriate tumor or tissue type. Currently supported options include:
- `NSCLC`  
- `PDAC`  
- `PBMC`  

More details about the pre-processed scRNA references present in [Processed Signature Datasets](processed-signatures.md)

```python
Statescope_model = Initialize_Statescope(Bulk, TumorType='NSCLC')
```
For providing your own scRNA-seq dataset check [Input Requirements](input.md) for the correct format. 

```python
import scanpy as sc 
file_path = 'scRNA.h5ad' ###scRNA data should be in h5ad format
Signature = sc.read_h5ad(file_path)
Statescope_model = Initialize_Statescope(Bulk, Signature = Signature, celltype_key= 'celltype_key', Ncores = 40) ####Specify celltype_key in the adata.obs
```
---

## 5. Deconvolution

Deconvolution is used to estimate cell-type-specific expression from bulk data.

```python
Statescope_model.Deconvolution()
```

After deconvolution, you can extract the fractions of each gene across different cell types using:

```python
Fractions = Statescope_model.Fractions  # shape: [N_genes x N_cell_types]
print(Fractions.head())
```

---

## 6. Refinement

Refinement is performed to improve the estimation of cell-type-specific gene expression profiles.

```python
Statescope_model.Refinement()

# You can run the refinement multiple times if desired
Statescope_model.Refinement()
```

The refined gene expression profiles for each cell type can be accessed:

```python
from Statescope import Extract_GEX
##Gene expression of the cell type you want to extract 
Extract_GEX(Statescope_model, 'Celltype')
```

---

## 7. Cell State Discovery

To discover potential sub-states or subpopulations within each cell type, run:

```python
Statescope_model.StateDiscovery()
```

After running state discovery, you can extract information about the discovered sub-states (loadings, etc.) from the model. The specific attributes and methods will depend on how **Statescope** organizes its results. For example:

```python
from Statescope import Extract_StateLoadings
Extract_StateLoadings(Statescope_model)
```

*(Make sure to check the Statescope documentation for more details on these attributes.)*

---

## 8. Visualization

### 8.1 Visualizing Fractions

To quickly visualize the fraction matrix, you can use a heatmap function provided by Statescope:

```python
from Statescope import Heatmap_Fractions

Heatmap_Fractions(Statescope_model)
```

This generates a heatmap of the cell-type fractions or scores across genes (or samples, depending on how your data is organized).

### 8.2 Visualizing Purified Gene Expression Profiles

```python
from Statescope import Heatmap_GEX

Heatmap_GEX(Statescope_model, 'Cell Type')
```
### 8.3 Visualizing Top Genes Per Cell State

You can choose how many genes per state to be visualised in the Bar plot using the top_genes argument

```python
from Statescope import BarPlot_StateLoadings
# Example Usage
BarPlot_StateLoadings(Statescope_model, top_genes=1)
```

---






## 9. Summary

By following these steps, you will:

1. **Install** and **set up** your environment.  
2. **Load** your bulk data (or use the provided test dataset).  
3. **Initialize** Statescope with the appropriate `TumorType`.  
4. **Perform Deconvolution** to estimate cell-type fractions.  
5. **Refine** those estimates for improved accuracy.  
6. **Discover** sub-states (cell state discovery).  
7. **Visualize** your results through heatmaps and other methods.

Feel free to adjust the code to fit your data structure, directory organization, or specific analysis needs. For more advanced usage, please consult the official Statescope documentation or check additional examples in the repository.

