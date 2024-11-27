---
id: intro
title: Tutorial Intro
sidebar_position: 1
---

# How to Use the Snakemake Pipeline

## Introduction

Snakemake is a workflow management system that helps to create and manage complex workflows using Python. It’s widely used in bioinformatics to automate the execution of tasks and can handle dependency resolution, workflow management, and more.

---

## Installation

To install Snakemake, you need Python installed on your system. Snakemake can be installed via pip:

```bash
pip install snakemake
```

To see the planned workflow without executing it, use the `--dry-run` option:

```bash
snakemake -s your_workflow.smk --dry-run
```

---

## Using Snakemake Pipelines

Snakemake is a workflow management system that allows you to run complex pipelines. Here’s how to set up and use Snakemake with BLADE.

### Step 1: Running a Snakemake Workflow

1. **Set up your workflow:** Ensure that you have the necessary files and configurations in place in the repository.

2. **Run the Snakemake pipeline:**

    ```bash
    snakemake -s your_workflow.smk
    ```

    Replace `your_workflow.smk` with the specific Snakemake file you are using. This command will execute the pipeline defined in the Snakemake workflow file.

---

## Running Snakemake on SLURM

To run Snakemake on a SLURM-managed cluster, use the `--cluster` option. This allows you to submit jobs to SLURM with specific resource requirements.

### Step 1: Basic Command for SLURM

Here’s how to run the Snakemake pipeline with SLURM:

```bash
snakemake -s Snakefile4 \
    --cluster "sbatch --job-name={rule} --cpus-per-task={threads} --mem={resources.mem_mb} --output=logs/%x-%j.out --error=logs/%x-%j.err --mail-type=BEGIN,END,FAIL --mail-user=a.bose1@amsterdamumc.nl" \
    --default-resources mem_mb=100000 threads=1 \
    --use-conda \
    --jobs 20 \
    -p \
    --keep-going
```

### Explanation:

- **`-s Snakefile4`**: Specifies the Snakemake workflow file to run.
- **`--cluster`**: Specifies the SLURM submission command.
  - **`--job-name={rule}`**: Names the SLURM job after the Snakemake rule.
  - **`--cpus-per-task={threads}`**: Allocates threads based on the rule definition.
  - **`--mem={resources.mem_mb}`**: Requests memory (in MB) for each job.
  - **`--output`** and **`--error`**: Specify log file paths for output and errors.
  - **`--mail-type=BEGIN,END,FAIL`**: Configures SLURM to send email notifications at the start, end, or if the job fails.
  - **`--mail-user=a.bose1@amsterdamumc.nl`**: Sets the email recipient for notifications.
- **`--default-resources mem_mb=100000 threads=1`**: Sets default resources for rules that don’t specify them.
- **`--use-conda`**: Ensures that Snakemake uses Conda environments defined in the workflow.
- **`--jobs 20`**: Allows a maximum of 20 jobs to be submitted in parallel.
- **`-p`**: Prints shell commands as they are executed.
- **`--keep-going`**: Continues running the workflow even if some jobs fail.

---

### Step 2: Configuring GPU Nodes

To run on GPU nodes, include GPU-specific resource requests in the `--cluster` command:

```bash
snakemake -s Snakefile4 \
    --cluster "sbatch --job-name={rule} --cpus-per-task={threads} --mem={resources.mem_mb} --gres=gpu:1 --output=logs/%x-%j.out --error=logs/%x-%j.err --mail-type=BEGIN,END,FAIL --mail-user=a.bose1@amsterdamumc.nl" \
    --default-resources mem_mb=100000 threads=1 \
    --use-conda \
    --jobs 10 \
    -p \
    --keep-going
```

### Additional GPU Options:

- **`--gres=gpu:1`**: Requests one GPU for each job.
- **`--partition=gpu`**: If your cluster has a specific GPU partition, include this flag.

---

## Testing the Installation

After completing the installation steps, it is recommended to run a test workflow to ensure that everything is set up correctly. Follow the instructions in the `tests` directory of the repository to execute sample pipelines and verify the installation.

---

## Additional Resources

- [BLADE Documentation](https://github.com/aryamaanbose/BLADE_tasks/wiki)
- [Conda Documentation](https://docs.conda.io/)
- [Snakemake Documentation](https://snakemake.readthedocs.io/)

---
```
