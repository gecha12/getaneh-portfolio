# 11 — Deployment Guide

## 1. Overview
The portfolio is designed as a high-performance static Single Page Application (SPA). It can be deployed to any modern edge hosting service (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

---

## 2. GitHub Preparation & Push
Ensure your local branch is committed on `main`:

```powershell
cd "c:\Users\hp\Desktop\portifolio project"
git status
# Confirm working tree clean
git remote add origin https://github.com/gecha12/<your-repository-name>.git
git push -u origin main
```

---

## 3. Deploying to Netlify (Recommended)
1. Log in to [Netlify](https://app.netlify.com).
2. Click **"Add new site"** $\rightarrow$ **"Import an existing project"**.
3. Select **GitHub** and authorize access to your `portfolio` repository.
4. Configure Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**. Deployment completes in ~30 seconds.

---

## 4. Deploying to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** $\rightarrow$ **"Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

---

## 5. Domain & HTTPS Configuration
1. Once deployed, link your custom domain (e.g., `getaneh.dev` or `getanehdejenie.com`).
2. Both Netlify and Vercel automatically provision and renew Let's Encrypt SSL/TLS certificates.
3. Configure HTTP to HTTPS redirect enforcement.
