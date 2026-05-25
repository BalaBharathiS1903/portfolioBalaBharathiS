# Bala Bharathi S — Portfolio

This repository contains the static portfolio website for Bala Bharathi S. The site showcases projects, certifications, skills, and contact information, and is built using plain HTML/CSS/JS with a lightweight Bootstrap theme.

## Live preview
- The site can be served from any static host (GitHub Pages, Netlify, Vercel) or previewed locally as described below.

## What's included
- `index.html` — main site markup and content
- `assets/css/` — theme and vendor styles (`bootstrap.min.css`, `font-awesome.min.css`, `style.css`)
- `assets/js/` — vendor scripts and `script.js` (navigation, counters, progress bars, portfolio filtering, modals)
- `assets/img/` — site images (hero, projects, certificates)
- `assets/pdf/` — resume PDF

## Project structure
Here's the repository layout (top-level and important subfolders):

```text
.
├─ index.html
├─ A                          (misc. text file)
├─ README.md
├─ catalyst.json
├─ package-lock.json
├─ portfolio_qr_with_logo.png
├─ client/
│  ├─ index.html
│  ├─ client-package.json
│  ├─ main.css
	└─ main.js
├─ assets/
│  ├─ css/
│  │  ├─ bootstrap.min.css
│  │  ├─ font-awesome.min.css
│  │  └─ style.css
│  ├─ js/
│  │  ├─ jquery.min.js
│  │  ├─ bootstrap.min.js
│  │  ├─ bootstrap-progressbar.min.js
│  │  ├─ jquery.countTo.min.js
│  │  ├─ jquery.easing.min.js
│  │  ├─ jquery.shuffle.min.js
│  │  ├─ slick.min.js
│  │  ├─ touchswipe.min.js
│  │  └─ script.js
│  ├─ img/
│  │  ├─ bala.jpg
│  │  ├─ hero.jpg
│  │  ├─ portfolio-1.jpg
│  │  ├─ portfolio-5.jpg
│  │  ├─ portfolio-6.jpg
│  │  ├─ portfolio-7.jpg
│  │  ├─ CERTIFICATEJAVA.jpg
│  │  ├─ CERTIFICATEWEB.jpg
│  │  └─ (other image assets)
│  └─ pdf/
│     ├─ BALABHARATHI S_RESUME.pdf
│     └─ Bala_Bharathi_Resume.pdf
└─ .git/

```

This tree lists the important files and folders used by the site. If you want, I can expand it to include every image filename or create a generated `tree.txt` file in the repo.

## Tech stack
- HTML5, CSS3
- JavaScript (ES5/ES6)
- jQuery, Bootstrap 3, Font Awesome

## Features
- Intro / hero section
- Skills with animated progress bars
- Experience timeline
- Project portfolio with modal details
- Certificate preview modal with image lightbox
- Smooth scrolling and responsive layout

## Quick local preview
Recommended: use a simple static server to avoid issues with local file paths and modal assets.

Option A — Node (recommended):

```powershell
npx serve .
```

Option B — Python 3 (works cross-platform):

```powershell
# from the project root
python -m http.server 8000
# then open http://localhost:8000
```

Open `http://localhost:5000` (for `serve`) or `http://localhost:8000` (for Python) in your browser.

## Resume
- The resume PDF is in `assets/pdf/` (file: `BALABHARATHI S_RESUME.pdf`). Use the site link in the Me/Resume section or open the PDF directly from the `assets/pdf/` folder when the project is served by a local server.

## Troubleshooting
- If modals or animations do not work, verify that `assets/js/jquery.min.js` is loaded before `assets/js/bootstrap.min.js` and `assets/js/script.js`.
- If images do not display, confirm the files exist in `assets/img/` and that you're serving the site via a static server (some browsers restrict file:// access to scripts/resources).

## Recommendations / Next steps
- Consider migrating to a modern build (Vite/Parcel) for easier development and asset hashing.
- Rename resume to remove spaces (e.g., `BALABHARATHI-S_RESUME.pdf`) to avoid URL encoding issues when deploying to some static hosts.
- Optionally add a `CNAME` or GitHub Pages configuration if you plan to host at a custom domain.

## Contributing
- This is a personal portfolio. For any updates, edit the relevant HTML/CSS/JS file and preview locally before pushing.

---
If you want, I can:
- run a quick accessibility and SEO scan, or
- rename the resume file to remove spaces and update the link for safer deployment.
