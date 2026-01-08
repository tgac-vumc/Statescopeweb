---
id: processed-signatures
title: Processed Signatures
---

# Processed Signatures

This page hosts our in-house single-cell RNA sequencing (scRNA-seq) signatures for various cancer types. Below, you will find details about the processed signatures.

The repository for these datasets can be found here: 

**📌 [Statescope Data GitHub Repository](https://github.com/tgac-vumc/StatescopeData.git).**

## **Available Cancer Signatures**

| Tumor Type       | Number of Cell Types Available | Cell Types                 | Source           |
|------------------|--------------------------------|----------------------------|------------------|
| **NSCLC**            | 15                             |['Alveolar_cell', 'Monocyte', 'CD4_T_cell', 'B_cell', 'Plasma_cell', 'Fibroblast', 'Macrophage', 'NK_cell', 'CD8_T_cell', 'Neutrophil', 'Dendritic_cell', 'Endothelial_cell', 'Tumor_cell', 'Mast_cell', 'Regulatory_T_cell'] | Placeholder Source |
| **PDAC**             | 7,8,24                            |['T_NK', 'Endothelial', 'B_Plasma', 'Mast', 'Epithelial', 'Myeloid', 'CAFs'], ['Basal', 'CAFs', 'Myeloid', 'Mast', 'Classical', 'T_NK', 'Endothelial', 'B_Plasma'], ['Classical', 'Intermediate', 'Basal', 'Tuft cells', 'Endothelial', 'myCAF', 'Pericyte', 'apCAF', 'iCAF', 'Schwann', 'Mono', 'Mac', 'Tcytotoxic', 'Thelper', 'B', 'ILC3 cells', 'Mono.Mac', 'pDC', 'DC', 'Treg', 'NK', 'MDSC', 'Tmemory', 'Normal epithelial'] | Placeholder Source |
| **PBMC**             | 17, 7                          |['T_cells_Treg', 'T_cells_CD8+_effector_memory', 'T_cells_CD4-CD8-', 'B_cells_memory', 'B_cells', 'Monocytes_non-classical', 'Dendritic_cells', 'Monocytes_classical', 'T_cells_CD4+_naive', 'T_cells_CD4+_effector', 'T_cells_CD4+_effector_memory', 'NK_cells', 'Early_NK_cells', 'T_cells_CD8+_naive', 'T_cells_CD8+_effector', 'ILC', 'T_cells_CD4+_central_memory'], ['T_cells_CD4+', 'Dendritic_cells', 'T_cells_CD8+', 'T_cells_CD4-CD8-', 'B_cells', 'NK_cells', 'Monocytes'] | Placeholder Source |

## **Using Statescope with Processed Signatures**
The `Statescope` package allows you to integrate pre-processed single-cell signatures into your deconvolution workflows.

**📌 [Statescope GitHub Repository](https://github.com/tgac-vumc/Statescope.git)**

### **Example Usage in Python**
To load a processed signature for analysis, use:

```python
from Statescope import Initialize_Statescope

# Initialize the Statescope model with the desired parameters
Statescope_model = Initialize_Statescope(
    subset_bulk, 
    TumorType='NSCLC', 
    Ncelltypes=15, 
    Ncores=40
)
```

