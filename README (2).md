# Git Mastery — From Zero to Push
### Version Control Case Study Website

A fully static, interactive case study website presenting the learning outcomes for a Git Version Control module. The site documents hands-on practice of repository setup and core Git workflows executed entirely via the command line.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Sections](#sections)
- [Customisation](#customisation)
- [Technologies Used](#technologies-used)
- [Learning Outcomes Covered](#learning-outcomes-covered)

---

## Overview

This project serves as the visual presentation deliverable for a Git Version Control learning module. It demonstrates proficiency in setting up a repository from scratch using only the command line and practising a range of Git commands — from basic commits to pull requests, reverts, and branch management.

The website also contains a formatted submission email (Section 05) with an embedded link to the live GitHub repository, fulfilling the assignment deliverable requirement.

> **Repository Link:** [https://github.com/devstudent/git-devlab-project](https://github.com/devstudent/git-devlab-project)  
> *(Replace this with your actual repository URL before submission)*

---

## Features

- **Interactive terminal simulator** — click any Git command card to see a realistic terminal execution with colour-coded output
- **Branch graph visualiser** — SVG-style visual showing `main`, `feature/login`, `feature/dashboard`, and `hotfix/nav-bug` branch relationships
- **Tabbed commit history** — view commit log, pull requests, and fetch/merge workflows in separate tabs
- **Step-by-step workflow guide** — five-step annotated Git workflow from branch creation to revert
- **Formatted email deliverable** — complete submission email with repository link, ready to copy and send
- **Fully responsive** — mobile-friendly layout with collapsible navigation
- **Zero dependencies** — no frameworks, no build tools; plain HTML, CSS, and JavaScript
- **Dark theme** — GitHub-inspired dark colour scheme using CSS custom properties

---

## Project Structure

```
git-case-study/
│
├── index.html      # Page structure and all five content sections
├── style.css       # Full stylesheet — theme, layout, components, responsive rules
├── script.js       # Interactive logic — terminal simulator, tabs, nav, scroll highlight
└── README.md       # This file
```

---

## Getting Started

No installation or build step is required. This is a plain static website.

### Run locally

```bash
# Clone or download the project folder, then simply open the file
open index.html

# Or serve it with any local static server, e.g.:
npx serve .
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

### Deploy

Upload all four files (`index.html`, `style.css`, `script.js`, `README.md`) to any static host:

| Platform | Command / Method |
|----------|-----------------|
| GitHub Pages | Push to a repo → Settings → Pages → Deploy from branch |
| Netlify | Drag-and-drop the folder onto [netlify.com/drop](https://netlify.com/drop) |
| Vercel | `npx vercel` in the project directory |

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Repository Setup** | `git init`, `git config`, first commit, `git remote add`, `git push`, and `git clone` — all shown in annotated terminal blocks |
| 02 | **Git Commands Practised** | Nine interactive command cards (branch, checkout, commit, revert, fetch, merge, pull, push, rename) each linked to a live terminal simulator |
| 03 | **Branching Workflow** | Visual branch graph and a five-step workflow guide covering the full feature branch lifecycle |
| 04 | **Commit History & PRs** | Tabbed view of the commit log, pull request panel (merged / open / reverted), and a fetch-merge-rename terminal session |
| 05 | **Email Deliverable** | Formatted submission email including repository link and a bulleted breakdown of all learning outcomes demonstrated |

---

## Customisation

Before submitting, update the following placeholders throughout `index.html` and `script.js`:

| Placeholder | Replace with |
|-------------|-------------|
| `https://github.com/devstudent/git-devlab-project` | Your actual GitHub repository URL |
| `Dev Student` | Your full name |
| `student@devlab.io` | Your email address |
| `tutor@institution.edu` | Your instructor's email address |
| `Thursday, 28 May 2026` | Your actual submission date |

### Colour theme

All colours are defined as CSS custom properties at the top of `style.css`:

```css
:root {
  --bg:      #0d1117;   /* page background   */
  --surface: #161b22;   /* card background   */
  --accent:  #58a6ff;   /* blue — primary    */
  --accent2: #3fb950;   /* green — success   */
  --accent3: #f78166;   /* red — error       */
  --accent4: #d2a8ff;   /* purple — hashes   */
  --text:    #e6edf3;   /* body text         */
  --muted:   #8b949e;   /* secondary text    */
}
```

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Custom properties, Grid, Flexbox, responsive layout, animations |
| Vanilla JavaScript | Terminal simulator, tab switching, scroll tracking, mobile nav |
| Google Fonts | `JetBrains Mono` (monospace) + `Syne` (display headings) |

No external JavaScript libraries or CSS frameworks are used.

---

## Learning Outcomes Covered

| Git Concept | Command(s) Demonstrated |
|-------------|------------------------|
| Creating a repository | `git init`, `git remote add`, `git push -u` |
| Cloning a repository | `git clone` |
| Creating branches | `git branch`, `git checkout -b` |
| Committing changes | `git add`, `git commit`, `git status` |
| Reverting commits | `git revert` |
| Pulling changes (downstream) | `git pull` |
| Pushing changes (upstream) | `git push` |
| Fetching remote changes | `git fetch` |
| Merging branches | `git merge` |
| Renaming branches | `git branch -m`, remote delete + re-push |
| Creating pull requests | `gh pr create` / GitHub UI |
| Reviewing pull requests | PR review workflow documented |
| Merging pull requests | Merge commit strategy shown |
| Reverting pull requests | `git revert` on merged PR commit |

---

## Author

**Dev Student**  
📧 student@devlab.io  
🔗 [github.com/devstudent](https://github.com/devstudent)

---

*Submitted as part of the Git Version Control learning module assessment.*
