# Setting Up Your Public VLSI Blog — Windows + VS Code + GitHub Pages

This builds: a public GitHub repo holding your blog posts as plain Markdown files → MkDocs (Material theme) turning them into a real browsable site → GitHub Pages hosting it for free → GitHub Actions auto-rebuilding the site every time you push, so you can update it from *any* device later, not just this Windows machine.

Keep this repo for general learnings/explainers only — nothing tied to confidential client work goes in here.

---

## Part 1 — One-time installs on Windows

Open PowerShell and run:

```powershell
winget install --id Git.Git -e --source winget
winget install --id Python.Python.3.12 -e --source winget
winget install --id Microsoft.VisualStudioCode -e --source winget
```

Close and reopen PowerShell so the PATH updates, then verify:

```powershell
git --version
python --version
code --version
```

## Part 2 — Git identity

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

Git for Windows includes Git Credential Manager, so the first time you push, a browser window pops up to log into GitHub — after that it's remembered. No manual SSH key setup needed.

## Part 3 — Create the GitHub repo

1. github.com → **New repository**
2. Name it (e.g. `vlsi-notes`), set visibility to **Public**, check **Add a README** → Create

## Part 4 — Clone it into VS Code

1. Open VS Code
2. `Ctrl+Shift+P` → type **Git: Clone** → paste the repo URL (from GitHub's green **Code** button) → pick a local folder, e.g. `C:\Users\Rukmi\Documents\vlsi-notes`
3. When VS Code asks to open the cloned folder, say yes

## Part 5 — Scaffold MkDocs

In VS Code's integrated terminal (`` Ctrl+` ``), inside the repo folder:

```powershell
pip install mkdocs mkdocs-material
mkdocs new .
```

This creates `mkdocs.yml` and a `docs/index.md`. Open `mkdocs.yml` and set:

```yaml
site_name: Rukmi's VLSI Notes
theme:
  name: material
```

Preview locally:

```powershell
mkdocs serve
```

Open `http://127.0.0.1:8000` — that's your site, live-reloading as you edit.

## Part 6 — Write your first post

Add files under `docs/`, e.g. `docs/rc-extraction-corners.md`, written in plain Markdown. List each new page in `mkdocs.yml` under `nav:` so it shows up in the sidebar:

```yaml
nav:
  - Home: index.md
  - RC Extraction Corners: rc-extraction-corners.md
```

## Part 7 — Push the source to GitHub

```powershell
git add .
git commit -m "Initial blog setup"
git push origin main
```

## Part 8 — Publish the site

Two options here — pick based on how you want to work.

### Option A — Manual deploy (simplest; fine if you'll always publish from this Windows machine)

Whenever you want the live site to reflect your latest changes, run:

```powershell
mkdocs gh-deploy --force
```

This builds the site and pushes it to a `gh-pages` branch in one command. The first time, go to **Settings → Pages → Source → Deploy from a branch → `gh-pages` / (root)** on GitHub to point Pages at it. After that, just rerun the command above whenever you've added new posts.

One catch with this option: editing content via browser alone (e.g. `github.dev`) won't update the live site by itself — you'd still need to pull those changes down to this machine and run `mkdocs gh-deploy` to actually publish them.

### Option B — Auto-deploy with GitHub Actions (skip this if Option A is enough for you)

This is the step that lets you update the *live* site later without MkDocs or Python installed on whatever device you're using. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy MkDocs site
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.x"
      - run: pip install mkdocs mkdocs-material
      - name: Configure git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
      - run: mkdocs gh-deploy --force
```

Commit and push this file too. Then on GitHub: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / (root)**. Check the **Actions** tab to watch the first run complete — after that your site is live at:

```
https://<your-username>.github.io/<repo-name>/
```

## Part 9 — Updating from anywhere, without your laptop

From here on, the build/deploy happens on GitHub's servers, so you only need a browser:

1. Open the repo on github.com, click into a file under `docs/`, and either hit the pencil icon to edit inline, or press **`.`** on the repo page to launch `github.dev` — a full lightweight VS Code in-browser.
2. Edit or add Markdown files, commit straight from there.
3. The Action picks it up and republishes the site within a minute or two — no Python, no MkDocs, no laptop required.

---

### Quick reference for new posts going forward
1. Add a `.md` file to `docs/`
2. Add it to `nav:` in `mkdocs.yml`
3. `git add . && git commit -m "new post" && git push` (or do the same via github.dev/browser)
4. Site updates automatically
