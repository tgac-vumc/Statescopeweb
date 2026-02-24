---
id: visualisation-functions-python
title: Visualisation Functions (Python)
---

# Visualisation Functions (Python)

This page lists the Statescope visualisation helpers and when to use them. Most plots expect that you have run the relevant module (Deconvolution, Refinement, or StateDiscovery) first.

---

## Quick start

```python
from Statescope import Initialize_Statescope
from Statescope import (
    Heatmap_Fractions,
    Boxplot_CelltypeAbundance,
    Heatmap_GEX,
    Heatmap_StateScores,
    Heatmap_StateLoadings,
    Plot_CopheneticCoefficients,
    BarPlot_StateLoadings,
    TSNE_AllStates,
    TSNE_CellTypes,
)

Statescope_model = Initialize_Statescope(Bulk, TumorType="PBMC", Ncelltypes=7, Ncores=10)
Statescope_model.Deconvolution()
Statescope_model.Refinement()
Statescope_model.StateDiscovery()
```

---

## Deconvolution outputs

### Heatmap_Fractions
Visualizes cell-type fractions across samples.

```python
Heatmap_Fractions(Statescope_model)
```
![Heatmap Fractions](/img/output.png)

### Boxplot_CelltypeAbundance
Boxplot of cell-type fractions across samples.

```python
Boxplot_CelltypeAbundance(Statescope_model)
```
![Heatmap Fractions](/img/output2.png)


## Refinement outputs

### Heatmap_GEX
Clustered heatmap of purified gene expression for a cell type.

```python
Heatmap_GEX(Statescope_model, "T_cells_CD4+")
```
![Heatmap Fractions](/img/output3.png)
---

## State discovery outputs

### Heatmap_StateScores
Heatmap of per-sample state scores.

```python
Heatmap_StateScores(Statescope_model)
```
![Heatmap Fractions](/img/output4.png)

### Heatmap_StateLoadings
Heatmap of state loadings; use `top_genes` to reduce clutter.

```python
Heatmap_StateLoadings(Statescope_model, top_genes=50)
```

![Heatmap Fractions](/img/output5.png)

### Plot_CopheneticCoefficients
Plots cophenetic coefficients across k values (used for model selection).

```python
Plot_CopheneticCoefficients(Statescope_model)
```
![Heatmap Fractions](/img/output6.png)

### BarPlot_StateLoadings
Bar plot of state loadings with top genes labeled.

```python
BarPlot_StateLoadings(Statescope_model, top_genes=3)
```
![Heatmap Fractions](/img/output7.png)
### TSNE_AllStates
t-SNE for all cell types and states (optionally show sample names).

```python
TSNE_AllStates(Statescope_model, show_samples=True)
```

### TSNE_CellTypes
t-SNE for one or more cell types.

```python
TSNE_CellTypes(Statescope_model, celltype="Epithelial", show_samples=True)
```

---

## Usage notes

- Run `Deconvolution()` before fraction plots.
- Run `Refinement()` before GEX heatmaps.
- Run `StateDiscovery()` before state score/loading plots and t-SNE views.
- It is recommended to save your model after each module so you can reload and continue analysis later.
