# 11 — Deployment Guide

## 1. Overview
<strong style="color: #D90429; font-weight: 700;">The portfolio </strong><span style="color: #2D6A4F;">is designed as a high-performance static Single Page Application (SPA). It can be deployed to any modern edge hosting service (Vercel, Netlify, GitHub Pages, Cloudflare Pages).</span>

---

## 2. GitHub Preparation & Push
<strong style="color: #D90429; font-weight: 700;">Ensure your </strong><span style="color: #2D6A4F;">local branch is committed on `main`:</span>

```powershell
cd "c:\Users\hp\Desktop\portifolio project"
git status
# Confirm working tree clean
git remote add origin https://github.com/gecha12/<your-repository-name>.git
git push -u origin main
```

---

## 3. Deploying to Netlify (Recommended)
1. <strong style="color: #D90429; font-weight: 700;">Log </strong><span style="color: #2D6A4F;">in to [Netlify](https://app.netlify.com).</span>
2. <strong style="color: #D90429; font-weight: 700;">Click </strong><span style="color: #2D6A4F;">**"Add new site"** $\rightarrow$ **"Import an existing project"**.</span>
3. <strong style="color: #D90429; font-weight: 700;">Select </strong><span style="color: #2D6A4F;">**GitHub** and authorize access to your `portfolio` repository.</span>
4. <strong style="color: #D90429; font-weight: 700;">Configure </strong><span style="color: #2D6A4F;">Build Settings:</span>
   - <strong style="color: #D90429; font-weight: 700;">Build command:</strong> <span style="color: #2D6A4F;">`npm run build`</span>
   - <strong style="color: #D90429; font-weight: 700;">Publish directory:</strong> <span style="color: #2D6A4F;">`dist`</span>
5. <strong style="color: #D90429; font-weight: 700;">Click </strong><span style="color: #2D6A4F;">**"Deploy site"**. Deployment completes in ~30 seconds.</span>

---

## 4. Deploying to Vercel
1. <strong style="color: #D90429; font-weight: 700;">Log </strong><span style="color: #2D6A4F;">in to [Vercel](https://vercel.com).</span>
2. <strong style="color: #D90429; font-weight: 700;">Click </strong><span style="color: #2D6A4F;">**"Add New..."** $\rightarrow$ **"Project"**.</span>
3. <strong style="color: #D90429; font-weight: 700;">Import </strong><span style="color: #2D6A4F;">your GitHub repository.</span>
4. <strong style="color: #D90429; font-weight: 700;">Framework </strong><span style="color: #2D6A4F;">Preset will auto-detect **Vite**:</span>
   - <strong style="color: #D90429; font-weight: 700;">Build Command:</strong> <span style="color: #2D6A4F;">`npm run build`</span>
   - <strong style="color: #D90429; font-weight: 700;">Output Directory:</strong> <span style="color: #2D6A4F;">`dist`</span>
5. <strong style="color: #D90429; font-weight: 700;">Click </strong><span style="color: #2D6A4F;">**"Deploy"**.</span>

---

## 5. Domain & HTTPS Configuration
1. <strong style="color: #D90429; font-weight: 700;">Once </strong><span style="color: #2D6A4F;">deployed, link your custom domain (e.g., `getaneh.dev` or `getanehdejenie.com`).</span>
2. <strong style="color: #D90429; font-weight: 700;">Both </strong><span style="color: #2D6A4F;">Netlify and Vercel automatically provision and renew Let's Encrypt SSL/TLS certificates.</span>
3. <strong style="color: #D90429; font-weight: 700;">Configure </strong><span style="color: #2D6A4F;">HTTP to HTTPS redirect enforcement.</span>

