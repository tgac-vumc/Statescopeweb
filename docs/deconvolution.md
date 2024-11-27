---
id: deconvolution
title: Deconvolution
---

# Deconvolution

This page provides an overview of the deconvolution process in **BLADE** and instructions on how to apply it to your data using the provided Snakemake pipeline.

---

## Steps for Deconvolution Using Snakemake

### 1. **Prepare Your Environment**

1. Ensure that all dependencies are installed, including Snakemake and the required Conda environments.
   - Install Snakemake:
     ```bash
     conda install -c bioconda -c conda-forge snakemake
     ```
   - Verify Conda environments:
     - Ensure you have an environment file (`oncoBLADE.yaml`) for running **BLADE**.
     - Create the environment if it doesn't already exist:
       ```bash
       conda env create -f envs/oncoBLADE.yaml
       ```

2. Prepare the directory structure:
   - Ensure the `Bulk_data` directory contains your bulk RNA-seq data in the file `Transcriptome_matrix.txt`.
   - Ensure the `SignaturePipeline/output` directory contains the signature matrix file `Corrected_Signature_matrix.pickle`.

3. Update the `config.yaml` file:
   - Edit the `config.yaml` file to specify the data directory and other parameters:
     ```yaml
     all:
       data_dir: '/net/beegfs/scratch/abose/BLADE'

     BLADE:
       Parameters:
         Alpha: 1
         Alpha0: 1000
         Kappa0: 1
         SY: 1
         Nrep: 1  
         Nrepfinal: 1
         Njob: 10        
         std_const: 0.001
     ```

---

### 2. **Run the Workflow**

Use Snakemake to execute the workflow:

```bash
snakemake -s Snakefile \
    --cores 10 \
    --use-conda
