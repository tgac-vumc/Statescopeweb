---
id: r
title: R tutorial for Statescope
---

# StatescopeR Tutorial (Quickstart)

StatescopeR is an R wrapper around **Statescope**, a framework for:

--------

## Official R package page 

(StatescopeR Bioconductor)(https://doi.org/doi:10.18129/B9.bioc.StatescopeR)

---

# 1) Installation

## Option A — Install from Bioconductor (recommended)

```r
if (!requireNamespace("BiocManager", quietly = TRUE)) {
  install.packages("BiocManager")
}

# If you need Bioconductor devel (as shown on the package page):
BiocManager::install(version = "devel")

BiocManager::install("StatescopeR")
```

## Option B — Install from r-universe (fast / convenient)

```r
install.packages(
  "StatescopeR",
  repos = c("https://bioc.r-universe.dev", "https://cloud.r-project.org")
)
```

## Verify

```r
library(StatescopeR)
packageVersion("StatescopeR")
```
