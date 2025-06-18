---
id: PBMC-deconvolution
title: Deconvolution of PBMC Data
---

## Introduction

This demo shows the Statescope workflow on PBMC bulk data. The process includes:
1. Importing libraries and loading a bulk dataset.
2. Initializing the Statescope model.
3. Running deconvolution, refinement, and state discovery.
4. Visualizing the results with:
   - A heatmap of cell type fractions,
   - A plot of cophenetic coefficients,
   - A bar plot of state loadings.

## Step 1: Import Libraries

```python
import Statescope.Statescope as scope
import pandas as pd
```

## Step 2: Load the Bulk Dataset

```python
# Read bulk dataset GSE263756
Bulk = pd.read_csv(
    'https://github.com/tgac-vumc/StatescopeData/raw/refs/heads/main/Bulk/PBMC/GSE263756.txt', 
    sep='\t', 
    index_col='Geneid'
)
Bulk.head(3)
```



## Step 3: Initialize the Statescope Model

```python
Statescope_model = scope.Initialize_Statescope(Bulk, TumorType='PBMC', Ncelltypes=7)
```

## Step 4: Run Deconvolution

```python
Statescope_model.Deconvolution()
```

*Console output shows that deconvolution completed successfully.*

## Step 5: Run Refinement

```python
Statescope_model.Refinement()
```

*Console output shows that refinement completed successfully.*

## Step 6: Run StateDiscovery

```python
Statescope_model.StateDiscovery()
```

*Console output shows that state discovery completed successfully.*

## Step 7: Visualize Results

### 7.1: Heatmap of Cell Type Fractions

```python
from Statescope.Statescope import Heatmap_Fractions
Heatmap_Fractions(Statescope_model)
```

![Heatmap Fractions](/img/Demo_7_0.png)

### 7.2: Cophenetic Coefficients Plot

```python
from Statescope.Statescope import Plot_CopheneticCoefficients
Plot_CopheneticCoefficients(Statescope_model)
```

![Cophenetic Coefficients](/img/Demo_8_0.png)

### 7.3: Bar Plot of State Loadings

```python
from Statescope.Statescope import BarPlot_StateLoadings
BarPlot_StateLoadings(Statescope_model)
```

*Console output: "StateLoadings matrix extracted successfully. Shape: (18638, 27)"*

![Bar Plot State Loadings](/img/Demo_9_1.png)

---
