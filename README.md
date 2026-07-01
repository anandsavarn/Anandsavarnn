<div align="center">

# 👨‍💻 Anand Kumar — CSE Portfolio

### A modern, developer-first portfolio built with React

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-00FF41?style=for-the-badge)](#license)
[![Deploy](https://img.shields.io/badge/Deployed-Live-success?style=for-the-badge)](#)

*A clean, code-focused personal site — no fluff, just who I am, where I code, and what I've built.*

</div>

---

## 📖 Overview

This is my personal developer portfolio, built to give recruiters, collaborators, and fellow developers a fast, no-nonsense look at my work. It's designed with a **CSE / coding-first aesthetic** — think terminal-inspired visuals, clean typography, and instant access to the platforms where I actually compete and ship code.

The site is organized into three focused sections:

| Section | What it shows |
|---|---|
| 🧑 **Hero** | Profile photo, short intro, and core skill set |
| 🔗 **Links** | Direct links to LinkedIn, GitHub, HackerRank, HackerEarth, and CodeChef |
| 🗂️ **Projects** | A scrollable, clickable project list — each opens details plus GitHub / live demo links |

---

## ✨ Features

- ⚡ **Fast & lightweight** — built on Vite for near-instant dev server startup and optimized production builds
- 🎯 **Single-page, section-based layout** — Hero, Links, and Projects, no unnecessary navigation
- 🖱️ **Interactive project cards** — click to expand details, jump to GitHub repo or live deployment
- 🔌 **Easy to customize** — swap photo, links, and project data through simple config files
- 📱 **Responsive design** — works cleanly across desktop and mobile

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Bundler / Dev server:** Vite
- **Styling:** CSS (component-scoped)
- **Deployment:** GitHub Pages / Render (customizable)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Installation & Local Development

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

The optimized, production-ready build will be output to the `dist/` folder.

---

## 🎨 Customization

| What to change | Where |
|---|---|
| **Profile photo** | `src/components/Hero.jsx` — replace the `avatars.githubusercontent.com` image `src` with your own (e.g., placed in `public/`) |
| **Social links** | `src/components/SocialLinks.jsx` — update your HackerRank, HackerEarth, and CodeChef profile URLs |
| **Projects** | `src/data/projects.js` — add, remove, or edit project entries (title, description, tech stack, GitHub link, live link) |

---

## 📂 Project Structure

```
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Profile photo, intro, skills
│   │   ├── SocialLinks.jsx # LinkedIn / GitHub / HackerRank / HackerEarth / CodeChef
│   │   └── Projects.jsx    # Scrollable clickable project list
│   ├── data/
│   │   └── projects.js     # Project data source
│   └── App.jsx
├── package.json
└── vite.config.js
```

---

## 🔗 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](#)
[![HackerRank](https://img.shields.io/badge/HackerRank-Profile-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white)](#)
[![HackerEarth](https://img.shields.io/badge/HackerEarth-Profile-2C3454?style=for-the-badge&logo=hackerearth&logoColor=white)](#)
[![CodeChef](https://img.shields.io/badge/CodeChef-Profile-5B4638?style=for-the-badge&logo=codechef&logoColor=white)](#)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built and maintained by Anand Kumar** — feel free to fork and adapt for your own portfolio.

</div>
