# Playwright Demo – HardRock CI/CD (Windows Runner)

This repository demonstrates how to run **Playwright automation tests** using **GitHub Actions CI/CD** on a **self‑hosted Windows runner**, executing **Chrome (Chromium) headless tests** and publishing results as **GitHub Artifacts**.

***

## 📌 What This Repository Does

*   Runs Playwright tests tagged with **`@hardrock`**
*   Uses **Chrome (Chromium) only**
*   Executes tests in **headless mode**
*   Runs on a **self‑hosted Windows GitHub runner**
*   Publishes **HTML and test results** as GitHub artifacts after execution

This setup is intended for **demo purposes** or as a **starter CI pipeline** for Playwright projects.

***

## 🗂 Repository Structure

```text
.
├── tests/                      # Playwright test files
│   └── *.spec.ts / *.spec.js
├── playwright.config.js        # Playwright configuration
├── package.json
├── .github/
│   └── workflows/
│       └── hardrock-playwright.yml   # GitHub Actions workflow
└── README.md
```

***

## ✅ Test Tagging

Only tests tagged with **`@hardrock`** will be executed in CI.

Example:

```js
test('@hardrock Sample test', async ({ page }) => {
  await page.goto('https://example.com');
});
```

***

## ⚙️ GitHub Actions Workflow Overview

The workflow file lives here:

    .github/workflows/hardrock-playwright.yml

### What the workflow does:

1.  Checks out the repository
2.  Sets up Node.js
3.  Installs project dependencies
4.  Downloads **Chromium only**
5.  Executes Playwright tests with `@hardrock` tag
6.  Uploads test reports to **GitHub Artifacts**

The workflow is configured to run on:

*   `push` to `main`
*   `pull_request` to `main`
*   Manual trigger (`workflow_dispatch`)

***

## 🚀 How to Trigger a Test Run

### Option 1: Automatic

A test run automatically starts when:

*   You push code to the `main` branch
*   You open or update a Pull Request targeting `main`

### Option 2: Manual Trigger

1.  Go to **GitHub → Repository → Actions**
2.  Select **HardRock Playwright CI**
3.  Click **Run workflow**
4.  Choose the branch and start the run

***

## 👀 How to Monitor the Test Run

1.  Navigate to **Actions** tab in GitHub
2.  Click the running workflow
3.  Watch logs in real‑time for each step:
    *   Dependency installation
    *   Browser install
    *   Playwright test execution

***

## 📦 Viewing Test Results & Reports

After the workflow completes:

1.  Open the completed workflow run
2.  Scroll to **Artifacts**
3.  Download:
    *   **`playwright-hardrock-chrome-report`** – HTML test report
    *   **`playwright-hardrock-chrome-results`** – Raw Playwright results

### Viewing the HTML Report Locally

After downloading and extracting:

```bash
npx playwright show-report playwright-report
```

***

## 🖥 Runner Details

*   **Runner type:** Self‑hosted
*   **Operating System:** Windows
*   **Execution mode:** Headless Chrome (Chromium)
*   **Parallelization:** Disabled on CI (single worker for stability)

***

## 🧪 Local Test Execution (Optional)

To run the same tests locally:

```bash
npm install
npx playwright install chromium
npx playwright test --grep @hardrock --project=chromium
```

***

## ✨ Notes

*   Headed mode, Firefox, and WebKit are intentionally disabled for CI stability
*   Allure results are generated locally and can be extended into CI if needed
*   Designed for clarity, demos, and easy onboarding

***


