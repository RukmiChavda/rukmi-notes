# Git — Complete Guide

## Introduction

#### Introducation

"Git is like a time machine for your code."

 -- Anonymous

### What is Version Control?

- Version Control is a system that records and manages changes to files over time.
- Enables team collaboration on the same project without overwriting each other's work.
- Maintains a history of every change made — who made it and why.
- Allows rollback to previous stable versions in case of errors.
- Facilitates code reviews, bug tracking, and feature development.
- Supports parallel development using branches and merges.
- Essential for continuous integration and deployment workflows.
- Applicable not only to code but also to documents, configurations, and data files.

### Why Use Version Control?

- **History:** Track all changes with time and authorship.
- **Collaboration:** Work on the same project without conflict.
- **Recovery:** Roll back to earlier stable versions easily.
- **Experimentation:** Create branches for new features or ideas.

**Popular Tools:** Git, SVN, Mercurial

**Suggested Image:** Version Control Workflow Diagram
https://www.git-tower.com/blog/media/pages/content/posts/what-is-version-control/45b33f8b9b-1675368534/git-workflow.png

### Real-World Use-Cases

- **Software Development:** Track code changes, fix bugs, manage releases.
- **Open Source Projects:** Collaborate via platforms like GitHub/GitLab.
- **Team Collaboration:** Manage parallel workstreams with pull requests.
- **Documentation Projects:** Maintain manuals, books, or wikis.
- **Academic Research:** Track revisions of research papers or code.

### Git vs Other VCS (SVN, Mercurial)

| **Feature** | **Git** | **SVN** | **Mercurial** |
|---|---|---|---|
| System Type | Distributed | Centralized | Distributed |
| Branching | Lightweight, fast | Heavy, slow | Lightweight |
| Merging | Powerful, automatic | Manual/conflict-prone | Simple |
| Speed | Very fast | Slower | Fast |
| Offline Work | Full functionality | Limited | Full functionality |
| Popularity | Very high (GitHub, GitLab) | Declining | Niche |
| Learning Curve | Steeper | Easier | Easier than Git |

**Note:** Git is now the industry standard due to its flexibility and strong community support.

### Installing Git on Windows / Linux / Mac

**Windows:**
- Download installer from: https://git-scm.com/download/win
- Run the setup and follow the installation wizard.
- Use Git Bash or integrate with your preferred terminal/editor.

**Linux (Debian/Ubuntu):**
- `sudo apt update`
- `sudo apt install git`

**Linux (RedHat/Fedora/CentOS):**
- `sudo dnf install git`    or    `sudo yum install git`

**MacOS:**
- Via Homebrew: `brew install git`
- Or install Xcode Command Line Tools: `xcode-select --install`

### Git Configuration (`git config`)

**Set Your Identity (Required):**
- `git config --global user.name "Your Name"`
- `git config --global user.email "you@example.com"`

**Common Global Settings:**
- Set default editor:
  - `git config --global core.editor "code --wait"` (for VSCode)
- Show colored output:
  - `git config --global color.ui auto`
- Set default branch name:
  - `git config --global init.defaultBranch main`

**View All Configurations:**
- `git config --list`

### Git Terminology Overview

- **Repository (Repo):** The database storing the files and their version history.
- **Working Directory:** The local copy of the repository files that you edit.
- **Commit:** A snapshot of changes recorded in the repository with a message.
- **Branch:** An independent line of development used to work on features or fixes.
- **Merge:** Combining changes from different branches into one.
- **Clone:** Creating a copy of an existing repository.
- **Push:** Sending your committed changes to a remote repository.
- **Pull:** Fetching and integrating changes from a remote repository.
- **Remote:** The hosted version of your repository (e.g., GitHub, GitLab).
- **Conflict:** Occurs when two commits change the same part of a file differently.
- **Staging Area (Index):** A place to prepare changes before committing them.
- **Tag:** A marker used to label specific commits, typically for releases.


## Git Basics – Local Repository

#### Git Basics – Local Repository

### Git File Lifecycle

- **Working Directory:** Where files are created or edited.
- **Staging Area:** Where changes are added before committing.
- **Repository:** Where commits are permanently recorded.

**Key Commands:**
- `git add file` – Moves file to staging area.
- `git commit -m "message"` – Saves staged changes to repository.
- `git status` – Shows file states.

### Initialize a Repo (`git init`)

**Purpose:**
- Converts an existing project directory into a Git repository.
- Creates a hidden `.git` folder to store version history and metadata.

**Command:**
- `git init`

**What Happens:**
- Initializes the staging area and repository.
- Doesn't start tracking files automatically — you must add files explicitly.

**Follow-up Steps:**
- `git add <file>` – Stage files.
- `git commit -m "Initial commit"` – Save the first snapshot.

### Checking Status (`git status`)

**Purpose:**
- Shows the current state of the working directory and staging area.
- Helps identify:
  - Untracked files
  - Modified but unstaged files
  - Staged files ready to be committed

**Command:**
- `git status`

**Sample Output:**
- Untracked files: new files not yet staged.
- Changes not staged: modified files not yet added.
- Changes to be committed: staged files ready for commit.

**Tip:** Use `git status` frequently to avoid mistakes.

### Adding Files (`git add`)

**Purpose:**
- Moves changes from the working directory to the staging area.
- Prepares files to be included in the next commit.

**Basic Usage:**
- `git add <filename>` – Adds a specific file.
- `git add .` – Adds all changes in the current directory (new, modified, deleted).
- `git add -A` – Adds all changes across the entire repo (equivalent to `add .` + `add deleted`).
- `git add -p` – Interactively stage portions of files.

**Tip:**
- Use `git status` before and after `git add` to verify what’s staged.

### Committing Changes (`git commit`)

**Purpose:**
- Records a snapshot of the staged changes into the repository.
- Each commit has a unique hash (ID), author, date, and message.

**Basic Usage:**
- `git commit -m "Your commit message"` – Commit with inline message.
- `git commit` – Opens default editor to write a detailed message.

**Best Practices:**
- Use clear, concise commit messages.
- Use the imperative mood (e.g., “Fix bug”, not “Fixed bug”).
- Make small, atomic commits for easier debugging and tracking.

**Tip:** Use `git log` to view the commit history.

### Viewing History (`git log`, `git show`)

**1. View Commit History**
- `git log` – Shows list of commits with hash, author, date, and message.
- `git log --oneline` – Compact summary of commits.
- `git log --graph --all --decorate` – Visual commit tree.

**2. View a Specific Commit**
- `git show <commit-hash>` – Shows details and changes of a commit.

**Tip:** Use `q` to quit log view in terminal.

### Ignoring Files (`.gitignore`)

**Purpose:**
- Prevent specific files/directories from being tracked by Git.
- Ideal for build files, logs, temporary files, etc.

**Examples in `.gitignore`:**
- `*.log` – Ignore all log files
- `build/` – Ignore all files in build directory
- `*.tmp` – Ignore all temporary files

**Note:** Changes take effect only for untracked files.

### Untracking Files (`git rm --cached`)

**Purpose:**
- Stop tracking a file while keeping it in your working directory.
- Often used when a file was added by mistake or should now be in `.gitignore`.

**Command:**
- `git rm --cached <file>` – Removes the file from staging and repo, but keeps it locally.

**Example:**
- `git rm --cached secrets.txt`

**Follow-up:**
- Add to `.gitignore` to prevent future tracking.

### Git Workflow – Practical Flow

**Summary:** A typical Git workflow cycles through editing, staging, committing, and pushing.

### Step-by-Step Git Demo – Part 1

style=GitStyle
```
# Step 1: Initialize Git repository
git init

# Step 2: Check the status of files
git status

# Step 3: Add files to the staging area
git add main.py

# Step 4: Commit the staged changes
git commit -m "Add initial version of main.py"

# Step 5: Create a new branch (optional)
git branch feature-login

# Step 6: Switch to the new branch
git checkout feature-login
```

### Step-by-Step Git Demo – Part 2

style=GitStyle
```
# Step 7: Make some changes, then stage and commit again
git add login.py
git commit -m "Add login functionality"

# Step 8: Merge feature branch into main
git checkout main
git merge feature-login

# Step 9: Push to remote repository (if already added)
git remote add origin https://github.com/user/repo.git
git push -u origin main
```


## Exploring Changes

#### Exploring Changes

### Viewing File Differences – `git diff`

style=GitStyle
- `git diff` shows differences between your working directory and the staging area.
- Useful before staging changes to review what has been modified.

**Example:**
```
git diff              # See unstaged changes
git diff main.py      # Diff a specific file
```

### Staged vs Unstaged Diffs

style=GitStyle
- `git diff` → shows changes in working directory (unstaged).
- `git diff --staged` → shows changes staged for the next commit.

**Example:**
```
git diff             # Working directory vs Staging area
git diff --staged    # Staging area vs Last commit
```

### Checking Commit Differences

style=GitStyle
- Use `git show` and `git diff` between commits to compare history.

**Examples:**
```
git show HEAD           # Show last commit diff
git show abc1234        # Show diff of a specific commit
git diff HEAD~1 HEAD    # Diff between last two commits
git diff <commit1> <commit2>  # Custom commit comparison
```

### Git Aliases for Productivity

style=GitStyle
- Create shortcuts for frequently used commands.
- Aliases improve speed and reduce typing errors.

**Examples:**
```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.last "log -1 HEAD"
```


## Branching and Merging

#### Branching and Merging

### What is Branching?

- A branch is a lightweight movable pointer to a commit.
- Allows independent development without affecting main codebase.
- Useful for feature development, bug fixes, experiments.

**Default branch:** `main` or `master`

### Creating and Switching Branches

**Create a new branch:**
```
git branch feature-x
```

**Switch to a branch:**
```
git switch feature-x
# or older:
git checkout feature-x
```

**Create and switch (shorthand):**
```
git switch -c feature-x
```

### Fast-Forward vs 3-Way Merge

**Fast-Forward Merge:**
- Happens when no new commits exist on target branch.
- Branch pointer just moves forward.

**3-Way Merge:**
- Used when both branches have diverged.
- Git creates a new merge commit.

**Merge:**
```
git merge feature-x
```

### Merge Conflicts: How and Why

**What causes conflicts?**
- Two branches edit the same lines in a file.
- Git cannot auto-resolve which change to keep.

**Conflict markers:**

style=gitstyle
```
<<<<<<< HEAD
your change
=======
incoming change
>>>>>>> feature-x
```

### Resolving Conflicts

**Steps to resolve:**
- Open conflicted file.
- Manually choose or combine changes.
- Mark conflict as resolved:

```
git add conflicted_file
git commit     # complete the merge
```

**Tip:** Use tools like `git mergetool`, VSCode, Meld for visual resolution.

### Deleting Branches (Local and Remote)

**Delete local branch:**
```
git branch -d feature-x     # safe delete
git branch -D feature-x     # force delete
```

**Delete remote branch:**
```
git push origin --delete feature-x
```

### Visualization: Branch Tree Diagram

**Illustration:** feature-x diverged from main after commit C

### Practical Workflow Example

**Feature Development Workflow**
- `git switch -c feature-x`
- Do your changes and commit
- `git switch main`
- `git merge feature-x`
- `git branch -d feature-x`

**Optional:** Push changes to remote
```
git push origin main
```

### Summary

- Branching enables isolated development
- Fast-forward merges are simple pointer moves
- 3-way merges involve new commits
- Conflicts arise when overlapping edits exist
- Clean up old branches regularly (both local and remote)


## Working with Remote Repositories

#### Working with Remote Repositories

### What is a Remote in Git?

- A remote is a version of your project hosted on a server.
- Used for collaboration, backup, and team workflows.
- Most common remotes:
  - GitHub (Open source, community)
  - GitLab (CI/CD, self-hosted option)
  - Bitbucket (Integration with Jira)
- The default remote is usually named `origin`.

### Cloning a Repository (Visual)

**Command:**
```
git clone https://github.com/user/project.git
```

### Linking Local Repo to a Remote

**If you initialized locally:**
```
git remote add origin https://github.com/user/repo.git
```

**Check linked remotes:**
```
git remote -v
```

**Replace or update:**
```
git remote set-url origin <new-url>
```

### Push & Pull (with Diagram)

**Push:** Upload local commits to remote.
**Pull:** Fetch + merge new changes from remote.

### git pull vs git fetch

**git fetch:**
- Downloads changes from remote.
- Doesn’t change working directory.
- Lets you inspect before merging.

**git pull:**
- Downloads + merges into current branch.

```
git fetch origin
git merge origin/main

# Shortcut:
git pull origin main
```

### Forking & Pull Requests (Concept)

**Fork:**
- Your own copy of a public repository.
- Used to propose changes without write access.

**Pull Request (PR):**
- Submit your changes for review/merge.
- Reviewers can comment, request changes, or approve.

*“Fork → Clone → Commit → Push → Pull Request”*

### Keeping Fork in Sync with Upstream

**1. Add the upstream remote:**
```
git remote add upstream https://github.com/original/repo.git
```

**2. Fetch and merge:**
```
git fetch upstream
git checkout main
git merge upstream/main
```

**3. Push to your fork:**
```
git push origin main
```

### GitHub SSH Setup (Advanced)

**Benefits:**
- Secure login
- No repeated username/password

**Generate SSH Key:**
```
ssh-keygen -t ed25519 -C "your@email.com"
```

**Add to GitHub:**
- Copy contents of `~/.ssh/id_ed25519.pub`
- Add in GitHub → Settings → SSH Keys

**Test:**
```
ssh -T git@github.com
```

### Full GitHub Team Workflow Example

**Use Case: Team of 3 developers using GitHub**

- Each member clones repo from GitHub
- Create feature branches:
```
git switch -c feature/login-form
```

- Push to GitHub:
```
git push -u origin feature/login-form
```

- Open pull request → reviewed → merged
- Sync latest main:
```
git switch main
git pull origin main
```

### Summary

- Remotes connect local work to shared repos
- Use `git push`, `git pull`, `git fetch` wisely
- Forking is crucial for open source contributions
- Keep forks synced via `upstream`
- SSH simplifies secure communication

*Use Git remotes to collaborate with confidence!*


## Advanced Git Commands

#### Advanced Git Commands

### Stashing Work (git stash)

**Use case:** Save uncommitted changes temporarily.

```
git stash          # stash current changes
git stash list     # view stashed entries
git stash apply    # re-apply latest stash
git stash pop      # re-apply and delete stash
git stash drop     # delete a specific stash
```

**Tip:** Use before switching branches to avoid losing changes.

### Reset (soft, mixed, hard)

**git reset** changes HEAD and working directory.

- **--soft:** Move HEAD only (keep index and working dir)
- **--mixed:** Reset index (unstage), keep working directory
- **--hard:** Discard all changes

```
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

### Revert vs Reset

**Reset:** Rewrites history (use with care)
**Revert:** Adds new commit that undoes changes

```
# Revert safely (preferred for public branches)
git revert <commit>

# Reset history (for private/local branches)
git reset --hard <commit>
```

**Rule:** Use `revert` for shared branches.

### Cherry Pick

**Use case:** Apply specific commit(s) from another branch.

```
git checkout main
git cherry-pick <commit-hash>
```

**Tip:** Resolve conflicts if any and continue.

### Interactive Rebase

**Use case:** Reorder, edit, squash, or delete commits.

```
git rebase -i HEAD~3
# Choose options: pick, squash, reword, drop
```

**Caution:** Do not rebase public branches.

### Amend Last Commit

**Use case:** Modify last commit (message or content)

```
# Add new changes
 git add .
# Amend commit
 git commit --amend
```

**Note:** Creates new commit hash.

### Git Tags: Annotated vs Lightweight

- **Lightweight:** pointer to commit (no metadata)
- **Annotated:** stored as full object with message

```
# Annotated
 git tag -a v1.0 -m "Release 1.0"

# Lightweight
 git tag v1.0-light

# Push tag
 git push origin v1.0
```

### Clean Up History with Squash and Rebase

**Use squash to combine multiple commits into one**

```
git rebase -i HEAD~3
# Change "pick" to "squash" or "s"
```

**When to use:**
- Before merging feature branch
- To simplify commit history


## Git Workflows

#### Git Workflows

### Git Flow vs GitHub Flow vs Trunk-Based

- **Git Flow:** Structured, long-lived branches. Ideal for versioned releases.
- **GitHub Flow:** Lightweight, PR-based. Suited for web applications.
- **Trunk-Based:** Everyone commits to main. Ideal for CI/CD environments.

| **Criteria** | **Git Flow** | **GitHub Flow** | **Trunk-Based** |
|---|---|---|---|
| Complexity | High | Medium | Low |
| Release Model | Manual | Continuous | Continuous |
| Use Case | Products | Web Apps | CI/CD |

### Git Flow Diagram

### Git Flow: Command Map (Using git-flow)

```
# Start a feature
git flow feature start login-form

# Finish feature
git flow feature finish login-form

# Start a release
git flow release start 1.0.0

# Finish and merge release
git flow release finish 1.0.0

# Start hotfix
git flow hotfix start critical-fix
```

### Branch Naming Best Practices

- Use consistent, readable prefixes:
  - `feature/` → new functionality
  - `bugfix/` or `fix/` → bug resolutions
  - `hotfix/` → urgent production fixes
  - `release/` → stable prep for deployment
- Include ticket ID if using Jira or similar:
  - `feature/JIRA-1234-user-login`

### Commit Message Conventions (Conventional Commits)

**Standard Format:**
```
<type>(optional-scope): description

Examples:
feat(login): add user login form
fix(auth): resolve token expiration bug
docs(readme): update contributing guide
```

**Common Types:**
multicols2
- feat – new feature
- fix – bug fix
- docs – documentation
- style – formatting
- refactor – code change w/o feature
- test – test addition
- chore – maintenance
multicols

### Pull Request Best Practices

**Before Opening a PR:**
- Pull latest from base branch.
- Ensure feature is complete and builds pass.
- Write clear PR title and description.

**During Review:**
- Request reviewers early.
- Respond to comments with commits or replies.
- Squash commits if necessary.

**After Approval:**
- Merge cleanly.
- Delete feature branch.

### Using Git in Teams: Do’s and Don’ts

**Do’s:**
- Pull before pushing.
- Write meaningful commits.
- Review PRs thoroughly.
- Rebase carefully (if team agrees).

**Don'ts:**
- Don’t commit broken code.
- Don’t rebase public/shared branches.
- Don’t skip code review for production changes.

### Sample Team Workflow (Feature Branch)

**Scenario: Developer A adds login form**
```
git checkout main
git pull origin main

git checkout -b feature/login-form
# work, commit changes
git push -u origin feature/login-form

# open pull request → team review
# after merge:
git checkout main
git pull origin main
git branch -d feature/login-form
```

### Summary

- Choose the right branching model (Git Flow / GitHub / Trunk)
- Follow commit and branch naming conventions
- Open clean, reviewable PRs
- Communicate frequently and document decisions

*Version control is a team sport. Master the workflow!*
