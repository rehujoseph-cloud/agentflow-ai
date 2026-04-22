# AgentFlow AI Website

Built with Vite + React + Tailwind CSS.

## 🚀 Deploy to GitHub Pages (Step by Step)

### 1. Install Git (if you don't have it)
Download from https://git-scm.com/downloads and install it.

### 2. Create a GitHub account
Go to https://github.com and sign up (free).

### 3. Create a new repository
- Click the **+** button top right → **New repository**
- Name it: `agentflow-ai` (or whatever you want)
- Set to **Public**
- Do NOT tick "Add README"
- Click **Create repository**

### 4. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**
- Save

### 5. Push the code (run these commands in your terminal/command prompt)

Open a terminal in the project folder and run:

```bash
npm install
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/agentflow-ai.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 6. Wait ~2 minutes
GitHub Actions will automatically build and deploy your site.
Your site will be live at: `https://YOUR_USERNAME.github.io/agentflow-ai`

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🏗️ Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.
