# Anand Kumar — CSE Portfolio

Professional React portfolio (CSE / coding style) with three main sections:

1. **Hero** — Photo, introduction, and skill set  
2. **Links** — LinkedIn, GitHub, HackerRank, HackerEarth, CodeChef  
3. **Projects** — Scrollable list; click any project to see details and open the GitHub (and live) link  

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Profile photo**: Edit `src/components/Hero.jsx` and replace the `avatars.githubusercontent.com` image `src` with your own image (e.g. in `public/`).
- **Social links**: Update HackerRank / HackerEarth / CodeChef URLs in `src/components/SocialLinks.jsx` with your profile links.
- **Projects**: Edit `src/data/projects.js` to add or change projects and details.
