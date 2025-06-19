---
id: input
title: Input Arguments
sidebar_label: Input Arguments
---

# Input Arguments

This page outlines the required inputs and optional parameters for running **Statescope**.


## **Required Datasets**

### **Signature Matrices**
The **signature matrix** defines the gene expression profiles of different cell types.

#### **Available Options for Signature Matrices**
There are **two ways** to specify the signature matrix:

#### **Option 1: Using Pre-processed Signatures**
- Statescope provides pre-processed signatures for various tumor types.
- To use these signatures, specify the **TumorType** and the number of cell types (`Ncelltypes`).
- Available options for `TumorType` and `Ncelltypes` can be found in the **[Processed Signatures](processed-signatures.md)** page.

**Example using pre-processed signatures:**
```python
Statescope_model = Initialize_Statescope(Bulk, TumorType='PBMC', Ncelltypes=7, Ncores=40)
```
- `PBMC` is the **pre-processed signature** used.
- `Ncelltypes=7` specifies the number of cell types to use.
- `Ncores=40` defines the number of CPU cores allocated.

#### **Option 2: Using Your Own Single-Cell RNA Data**
- Users can also provide their own **custom single-cell data** in `.h5ad` format.
- The **cell type annotations** should be present in the key specified in `celltype_key`.

**Example using a custom signature matrix:**
```python
Statescope_model = Initialize_Statescope(
    Bulk, 
    Signature=Signature, 
    celltype_key='leiden', 
    Ncores=40
)
```
- `Bulk` is the bulk RNA-seq dataset (transposed).
- `Signature` is the **custom signature matrix** derived from single-cell data.
- `celltype_key='leiden'` specifies the annotation key in the `.h5ad` file.

**⚠️ Note:**  
- **Single-cell data should be preprocessed** (filtering, QC, normalization).  
- Statescope handles internal **normalization and preprocessing** automatically.  
- Ensure the cell type annotations exist under the key **`celltype_key`** in `.obs`.

---

### **Bulk Gene Expression Data**
- **Y**: An *Ngene* by *Nsample* matrix containing bulk gene expression data.
- Should be provided in **linear scale** (**without** log-transformation).
- **Format:** Ideally, a **pandas DataFrame**.

**Example format in Python:**
```python
import pandas as pd 
Bulk = pd.read_csv("bulk_expression.csv", index_col=0)
```

---

### **Expected Cell Fractions (Optional)**
- **Expectation**: An *Nsample* by *Ncelltype* matrix.
- Specifies prior expectations of cell type proportions (**used by OncoBLADE**).
- **Format:** Ideally, a **pandas DataFrame**.

**Example format in Python:**
```python
expected_fractions = pd.read_csv("expected_cell_fractions.csv", index_col=0)
```

---

## **Important Notes**
- Bulk RNA-seq data should be in linear scale (not log-transformed).
- Signature matrices should be in log-scale.
- Single-cell `.h5ad` files should contain filtered, QC’d, and annotated cell types.
- pandas DataFrames** are recommended for structured inputs.

---

## **🔗 Further Resources**
- **[Processed Signatures](processed-signatures.md)**
- **[Python Tutorial](python.md)**
- **[GitHub Repository](https://github.com/tgac-vumc/Statescopeweb.git)**

