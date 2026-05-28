/* ==============================
   Git DevLab Case Study — JS
   ============================== */

/* ---- Command terminal data ---- */
const cmdData = {
  branch: {
    title: 'bash — git branch operations',
    lines: [
      { type: 'muted',   text: '# Create a new branch' },
      { type: 'prompt',  text: 'git branch feature/login' },
      { type: 'prompt',  text: 'git branch' },
      { type: 'success', text: '  feature/login' },
      { type: 'info',    text: '* main' },
      { type: 'muted',   text: '# List all branches (local + remote)' },
      { type: 'prompt',  text: 'git branch -a' },
      { type: 'success', text: '  feature/login' },
      { type: 'info',    text: '* main' },
      { type: 'muted',   text: '  remotes/origin/HEAD → origin/main' },
      { type: 'muted',   text: '  remotes/origin/main' },
    ]
  },
  checkout: {
    title: 'bash — git checkout & switch',
    lines: [
      { type: 'muted',   text: '# Create and switch in one command' },
      { type: 'prompt',  text: 'git checkout -b feature/login' },
      { type: 'success', text: "Switched to a new branch 'feature/login'" },
      { type: 'muted',   text: "# Go back to main" },
      { type: 'prompt',  text: 'git checkout main' },
      { type: 'info',    text: "Switched to branch 'main'" },
      { type: 'info',    text: "Your branch is up to date with 'origin/main'." },
    ]
  },
  commit: {
    title: 'bash — git add & commit',
    lines: [
      { type: 'muted',   text: '# Stage specific files' },
      { type: 'prompt',  text: 'git add src/auth.js src/routes.js' },
      { type: 'muted',   text: "# Check what's staged" },
      { type: 'prompt',  text: 'git status' },
      { type: 'success', text: 'On branch feature/login' },
      { type: 'success', text: 'Changes to be committed:' },
      { type: 'info',    text: '  modified:   src/auth.js' },
      { type: 'info',    text: '  modified:   src/routes.js' },
      { type: 'muted',   text: '# Commit with a message' },
      { type: 'prompt',  text: 'git commit -m "feat(auth): implement JWT login flow"' },
      { type: 'success', text: '[feature/login c3d4e5f] feat(auth): implement JWT login flow' },
      { type: 'info',    text: ' 2 files changed, 84 insertions(+), 3 deletions(-)' },
    ]
  },
  revert: {
    title: 'bash — git revert a commit',
    lines: [
      { type: 'muted',   text: '# Find the bad commit hash' },
      { type: 'prompt',  text: 'git log --oneline -4' },
      { type: 'purple',  text: 'g7h8i9j feat(nav): add navigation — breaks mobile' },
      { type: 'info',    text: 'e5f6g7h Merge PR #1 feature/login into main' },
      { type: 'info',    text: 'd4e5f6g fix(auth): correct token expiry bug' },
      { type: 'info',    text: 'c3d4e5f feat(auth): implement JWT login flow' },
      { type: 'muted',   text: '# Revert the bad commit' },
      { type: 'prompt',  text: 'git revert g7h8i9j' },
      { type: 'success', text: '[main h8i9j0k] Revert "feat(nav): add navigation"' },
      { type: 'success', text: ' 1 file changed, 12 deletions(-)' },
      { type: 'warn',    text: '# History is preserved — safe for shared branches!' },
    ]
  },
  fetch: {
    title: 'bash — git fetch origin',
    lines: [
      { type: 'muted',   text: '# Fetch all changes from remote (no auto-merge)' },
      { type: 'prompt',  text: 'git fetch origin' },
      { type: 'info',    text: 'remote: Enumerating objects: 5, done.' },
      { type: 'success', text: 'remote: Counting objects: 100% (5/5), done.' },
      { type: 'success', text: 'remote: Compressing objects: 100% (3/3), done.' },
      { type: 'success', text: 'Receiving objects: 100% (3/3) 1.4 KiB, done.' },
      { type: 'success', text: 'From https://github.com/devstudent/git-devlab-project' },
      { type: 'info',    text: '   e5f6g7h..h8i9j0k  main → origin/main' },
      { type: 'muted',   text: "# Now see what's different" },
      { type: 'prompt',  text: 'git diff main origin/main' },
    ]
  },
  merge: {
    title: 'bash — git merge branches',
    lines: [
      { type: 'muted',   text: '# Merge feature branch into main' },
      { type: 'prompt',  text: 'git checkout main' },
      { type: 'info',    text: "Switched to branch 'main'" },
      { type: 'prompt',  text: 'git merge feature/login' },
      { type: 'success', text: 'Updating e5f6g7h..d4e5f6g' },
      { type: 'success', text: 'Fast-forward' },
      { type: 'info',    text: ' src/auth.js    | 84 ++++++++++++++++++++++++++' },
      { type: 'info',    text: ' src/routes.js  | 12 ++++++' },
      { type: 'success', text: '2 files changed, 96 insertions(+)' },
    ]
  },
  pull: {
    title: 'bash — git pull (fetch + merge)',
    lines: [
      { type: 'muted',   text: '# Pull latest from remote main into local' },
      { type: 'prompt',  text: 'git pull origin main' },
      { type: 'info',    text: 'remote: Enumerating objects: 3, done.' },
      { type: 'success', text: 'From https://github.com/devstudent/git-devlab-project' },
      { type: 'success', text: ' * branch            main → FETCH_HEAD' },
      { type: 'success', text: 'Updating h8i9j0k..i9j0k1l' },
      { type: 'success', text: 'Fast-forward' },
      { type: 'info',    text: ' README.md | 5 +++++' },
      { type: 'success', text: ' 1 file changed, 5 insertions(+)' },
    ]
  },
  push: {
    title: 'bash — git push upstream',
    lines: [
      { type: 'muted',   text: '# Push feature branch to remote for PR' },
      { type: 'prompt',  text: 'git push -u origin feature/login' },
      { type: 'info',    text: 'Enumerating objects: 9, done.' },
      { type: 'info',    text: 'Counting objects: 100% (9/9), done.' },
      { type: 'success', text: 'Writing objects: 100% (5/5), 1.23 KiB, done.' },
      { type: 'success', text: 'To https://github.com/devstudent/git-devlab-project.git' },
      { type: 'success', text: ' * [new branch]      feature/login → origin/feature/login' },
      { type: 'info',    text: "Branch 'feature/login' tracks 'origin/feature/login'." },
    ]
  },
  rename: {
    title: 'bash — rename branch (local + remote)',
    lines: [
      { type: 'muted',   text: '# Rename local branch' },
      { type: 'prompt',  text: 'git branch -m feature/old-name feature/dashboard' },
      { type: 'muted',   text: '# Delete old remote branch' },
      { type: 'prompt',  text: 'git push origin --delete feature/old-name' },
      { type: 'success', text: '- [deleted]         feature/old-name' },
      { type: 'muted',   text: '# Push renamed branch and set upstream' },
      { type: 'prompt',  text: 'git push origin -u feature/dashboard' },
      { type: 'success', text: "Branch 'feature/dashboard' set up to track 'origin/feature/dashboard'." },
      { type: 'success', text: 'To https://github.com/devstudent/git-devlab-project.git' },
      { type: 'success', text: ' * [new branch]      feature/dashboard → origin/feature/dashboard' },
    ]
  }
};

/* ---- Render terminal output ---- */
function showCmd(key) {
  const data = cmdData[key];
  if (!data) return;

  // Update title
  document.getElementById('termTitle').textContent = data.title;

  // Clear and rebuild body
  const body = document.getElementById('termBody');
  body.innerHTML = '';

  data.lines.forEach(line => {
    const div = document.createElement('div');
    div.className = 'term-line';

    if (line.type === 'prompt') {
      div.innerHTML =
        '<span class="prompt">$ </span>' +
        '<span class="cmd-text">' + escapeHtml(line.text) + '</span>';
    } else {
      div.innerHTML =
        '<span class="out-' + line.type + '">' + escapeHtml(line.text) + '</span>';
    }

    body.appendChild(div);
  });

  // Cursor
  const cur = document.createElement('div');
  cur.className = 'term-line';
  cur.innerHTML = '<span class="cursor">█</span>';
  body.appendChild(cur);

  // Highlight active card
  document.querySelectorAll('.cmd-card').forEach(c => c.classList.remove('active'));
  const cards = document.querySelectorAll('.cmd-card');
  const keys  = Object.keys(cmdData);
  const idx   = keys.indexOf(key);
  if (cards[idx]) cards[idx].classList.add('active');

  // Scroll terminal into view on mobile
  if (window.innerWidth < 680) {
    document.getElementById('cmdTerminal').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ---- Switch tabs ---- */
function switchTab(btn, id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#161b22';
    navLinks.style.borderBottom = '1px solid #30363d';
    navLinks.style.padding = '1rem 2rem';
    navLinks.style.gap = '1rem';
    if (open) navLinks.style.display = 'none';
  });
}

/* ---- Utility: HTML escape ---- */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ---- Smooth active nav highlight on scroll ---- */
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 80;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
}, { passive: true });
