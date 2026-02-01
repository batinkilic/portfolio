# Portfolio Deployment Guide

This portfolio is built with standard HTML, CSS, and JavaScript. It requires no build step.

## How to Deploy to GitHub Pages

1. **Create a Repository**:
   - Go to GitHub and create a new repository (e.g., `portfolio`).

2. **Push Code**:
   - Open your terminal in this folder: `/Users/batin/Desktop/CV/portfolio`
   - Run the following commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub.
   - Calculate to "Pages" on the left sidebar.
   - Under "Source", select `main` branch.
   - Click "Save".

Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

## Customization
- **Resume**: Replace `assets/Muslum_Batin_Kilic_CV.pdf` with a new file (keep the name or update `index.html`).
- **Styles**: Edit `css/style.css` to change colors or fonts.
