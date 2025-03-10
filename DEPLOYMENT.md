# Deployment Guide

This document provides instructions for deploying the Project Portfolio application to GitHub Pages.

## GitHub Pages Deployment

The application is configured to be deployed to GitHub Pages using the gh-pages package. Follow these steps to deploy:

1. Make sure you have committed all your changes to the repository.

2. Run the deployment script:
   ```bash
   npm run deploy
   ```

   This script will:
   - Build the application with the correct base path
   - Push the built files to the `gh-pages` branch of your repository

3. After the deployment is complete, go to your repository's Settings > Pages section and ensure that the source is set to "Deploy from a branch" with the branch set to "gh-pages" and the folder set to "/ (root)".

4. Your application should now be available at `https://auge2u.github.io/am-project-portfolio/`.

## Automated Deployment with GitHub Actions

You can also set up automated deployment with GitHub Actions:

1. Create a `.github/workflows` directory in your repository.

2. Create a file named `deploy.yml` in the `.github/workflows` directory with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

3. Push this file to your repository.

4. Go to your repository's Settings > Pages section and ensure that the source is set to "GitHub Actions".

5. Now, every time you push to the main branch, the application will be automatically deployed to GitHub Pages.

## Vercel Deployment (Alternative)

If you prefer to deploy to Vercel instead of GitHub Pages:

1. Create an account on [Vercel](https://vercel.com) if you don't have one.

2. Connect your GitHub account to Vercel.

3. Import your repository into Vercel.

4. Configure the project settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Deploy the application.

6. Your application will be deployed to a Vercel URL, and you can optionally configure a custom domain.

## Netlify Deployment (Alternative)

Another option is to deploy to Netlify:

1. Create an account on [Netlify](https://netlify.com) if you don't have one.

2. Connect your GitHub account to Netlify.

3. Import your repository into Netlify.

4. Configure the project settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

5. Deploy the application.

6. Your application will be deployed to a Netlify URL, and you can optionally configure a custom domain.
