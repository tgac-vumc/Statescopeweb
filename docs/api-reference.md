---
id: api-reference
title: Statescope API Reference
sidebar_label: API Reference
---

## 1 · Construction helpers
### `Initialize_Statescope`
Initialise a **Statescope** model — **always** your first call.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Bulk** | `pd.DataFrame` | **required** | Linear counts, library-size corrected to 10 k per sample. |
| **Signature** | `pd.DataFrame` \| `AnnData` \| `None` | **None** | Custom single-cell signature. When **None**, a pre-built signature is downloaded (see **TumorType**/**Ncelltypes**). |
| **TumorType** | `str` | **(empty)** | Folder key for a pre-built signature (e.g. **NSCLC**, **PDAC**). |
| **Ncelltypes** | `int` \| `(empty)` | **(empty)** | Choose one of the available cell-type resolutions. |
| **MarkerList** | `list[str]` \| `None` | **None** | Use **only** these genes as markers instead of running AutoGeneS. |
| **celltype_key** | `str` | **celltype** | Column holding cell-type labels inside an `AnnData` signature. |
| **n_highly_variable** | `int` \| `None` | **3000** | How many HVGs AutoGeneS should receive (*None* → let AutoGeneS decide). |
| **fixed_n_features** | `int` \| `None` | **None** | Hard cap on the number of marker genes selected by AutoGeneS. |
| **drop_sigdiff** | `bool` | **False** | If **True**, drop genes with large bulk vs scRNA-seq expression differences. |
| **Ncores** | `int` | **10** | Maximum parallel workers passed down to BLADE / cNMF. |

**Returns** → a fully initialised **Statescope** object.

---

## 2 · Core class — `Statescope`

### 2.1 Deconvolution <a id="statescope-Deconvolution"></a>

```python
Statescope.Deconvolution(
    Ind_Marker=None,
    Alpha=1, Alpha0=1000, Kappa0=1, sY=1,
    Nrep=10, Njob=10, fsel=0, Update_SigmaY=False,
    Init_Trust=10, Expectation=None,
    Temperature=None, IterMax=100,
)
````

| Parameter          | Type                               | Default   | Description                                                                           |
| ------------------ | ---------------------------------- | --------- | ------------------------------------------------------------------------------------- |
| **Ind\_Marker**    | `list[int]` \| `None`              | **None**  | Explicit marker-gene indices to **force** into the model.                             |
| **Alpha**          | `int`                              | **1**     | Dirichlet prior on cell-type fractions.                                               |
| **Alpha0**         | `int`                              | **1000**  | Prior on gene-level means.                                                            |
| **Kappa0**         | `int`                              | **1**     | Prior on gene-level variances.                                                        |
| **sY**             | `int`                              | **1**     | Prior scaling of bulk variance.                                                       |
| **Nrep**           | `int`                              | **10**    | Random BLADE restarts (best objective kept).                                          |
| **Njob**           | `int`                              | **10**    | Parallel jobs (capped at **Ncores**).                                                 |
| **fsel**           | `int`                              | **0**     | Marker-subset selection flag (experimental).                                          |
| **Update\_SigmaY** | `bool`                             | **False** | Re-estimate Σ<sub>Y</sub> every EM step.                                              |
| **Init\_Trust**    | `int`                              | **10**    | Weight of fraction *priors* when provided.                                            |
| **Expectation**    | `pd.DataFrame` \| `dict` \| `None` | **None**  | Prior fractions (cell-level DF) **or** grouped dict `{"Group": …, "Expectation": …}`. |
| **Temperature**    | `[float,float]` \| `None`          | **None**  | Start/stop temperatures for simulated annealing.                                      |
| **IterMax**        | `int`                              | **100**   | Upper limit on optimisation iterations.                                               |

**Side-effects** → adds **Fractions** and **BLADE** fields to the object.

---

### 2.2 Refinement <a id="statescope-Refinement"></a>

```python
Statescope.Refinement(weight=100, GeneList=None)
```

| Parameter    | Type                  | Default  | Description                                                    |
| ------------ | --------------------- | -------- | -------------------------------------------------------------- |
| **weight**   | `int`                 | **100**  | Down-weights the fraction objective when purifying expression. |
| **GeneList** | `list[str]` \| `None` | **None** | Restrict refinement to this gene subset.                       |

**Side-effects** → adds **GEX**, **Omega** and **BLADE\_final**.

---

### 2.3 State discovery <a id="statescope-StateDiscovery"></a>

```python
Statescope.StateDiscovery(
    celltype=None,
    K=None,
    weighing="Omega",
    n_iter=10,
    n_final_iter=100,
    min_cophenetic=0.9,
    max_clusters=10,
)
```

| Parameter           | Type                                              | Default   | Description                                                          |
| ------------------- | ------------------------------------------------- | --------- | -------------------------------------------------------------------- |
| **celltype**        | `str` \| `list[str]` \| `None`                    | **None**  | Which cell types to analyse (**None** → all).                        |
| **K**               | `int` \| `list[int]` \| `dict[str,int]` \| `None` | **None**  | Fixed *k* per cell type (**None** = auto).                           |
| **weighing**        | `str`                                             | **Omega** | `"Omega"` \| `"OmegaFractions"` \| `"centering"` \| `"no_weighing"`. |
| **n\_iter**         | `int`                                             | **10**    | Initial random restarts for cNMF.                                    |
| **n\_final\_iter**  | `int`                                             | **100**   | Additional restarts for the chosen *k*.                              |
| **min\_cophenetic** | `float`                                           | **0.9**   | Cut-off to accept a candidate *k*.                                   |
| **max\_clusters**   | `int`                                             | **10**    | Upper bound when searching for *k*.                                  |

**Side-effects** → adds **StateScores**, **StateLoadings**, **cNMF**, **CopheneticCoefficients**.

---

## 3 · Utility helpers

| Function                                                                     | Parameters                  | Description                                                              |
| ---------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------ |
| **Extract\_GEX(model, celltype)**                                            | **celltype** :`str`         | Return purified expression (samples × genes) for one cell type.          |
| **Extract\_StateScores(model, celltype=None)**                               | **celltype** :`str`\|`None` | Concatenate all state-score matrices or just one cell type.              |
| **Extract\_StateLoadings(model, celltype=None)**                             | **celltype** :`str`\|`None` | Return gene-loading matrix (all states or one ct).                       |
| **Create\_Cluster\_Matrix(GEX, Omega, Fractions, celltype, weighing=Omega)** | **weighing** options above  | Build the scaled matrix used by clustering / t-SNE.                      |
| **Check\_Bulk\_Format(Bulk)**                                                | —                           | Assert / repair bulk matrix (10 k normalisation, duplicates, negatives). |
| **Check\_Signature\_validity(Signature)**                                    | —                           | Ensure the `IsMarker` column exists when passing a DF.                   |
| **Check\_Expectation\_validity(Expectation, …)**                             | —                           | Validate prior fraction matrices or grouped priors.                      |

---

## 4 · Plotting helpers

All functions draw directly with **matplotlib** + **seaborn**; nothing is returned.

| Function                                                     | Key parameters                 | What you get                                            |
| ------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------- |
| **Heatmap\_Fractions(model)**                                | —                              | Clustered heat-map of sample × cell-type fractions.     |
| **Heatmap\_GEX(model, celltype)**                            | **celltype** :`str`            | Heat-map of purified expression for a single cell type. |
| **Heatmap\_StateScores(model, col\_width=0.35, …)**          | Autoscale & labelled           | State-score heat-map with state numbers colour-boxed.   |
| **Heatmap\_StateLoadings(model, top\_genes=None)**           | **top\_genes** :`int`\|`None`  | Gene × state loadings, grouped by cell type.            |
| **Plot\_CopheneticCoefficients(model)**                      | —                              | *k* vs cophenetic coefficient (red dot = chosen *k*).   |
| **BarPlot\_StateLoadings(model, top\_genes=1)**              | **top\_genes** :`int`          | Horizontal bars; annotate top genes per state.          |
| **TSNE\_AllStates(model, weighing=Omega, perplexity=5, …)**  | **show\_samples** :`bool` etc. | Global t-SNE with dominant state numbers inside dots.   |
| **TSNE\_CellTypes(model, celltype=None, weighing=Omega, …)** | **show\_samples** :`bool` etc. | Per-cell-type t-SNE; prints sample names optionally.    |

**Common t-SNE parameters**

| Name              | Default      | Description                            |
| ----------------- | ------------ | -------------------------------------- |
| **perplexity**    | **5**        | Auto-capped at *n samples – 1*.        |
| **n\_iter**       | **1000**     | Gradient-descent steps.                |
| **point\_size**   | **80 / 150** | Scatter-marker size (global / per-ct). |
| **random\_state** | **42**       | Re-producible layout.                  |

---

## 5 · Mini cheat-sheet

```python
model = Initialize_Statescope(Bulk_df, TumorType="NSCLC")
model.Deconvolution()
model.Refinement()
model.StateDiscovery(K=3)      # force k = 3 everywhere

Heatmap_Fractions(model)
Heatmap_StateScores(model)
TSNE_AllStates(model, show_samples=True)
```

