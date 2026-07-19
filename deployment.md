# How to Deploy Your Portfolio Website

Since this portfolio is built using lightweight, static **HTML, CSS, and JavaScript**, you can host it for **free** on premium global CDN networks. Below are the three easiest methods to get your website online in minutes.

---

## Method 1: Netlify (Easiest - Drag and Drop)

Netlify is incredibly fast and offers continuous integration directly from your git repository, or a simple manual upload.

### Option A: Drag & Drop (No Git needed)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Compress your portfolio folder into a `.zip` file, or simply drag the entire folder containing `index.html`, `styles.css`, `projects.js`, `main.js`, and the `assets` folder directly into the web interface.
3. Your site will be live instantly! Netlify will provide a random URL (e.g., `https://creative-student-123.netlify.app`), which you can rename in **Site settings**.

### Option B: Connect to GitHub (Recommended for automatic updates)
1. Create a repository on GitHub and push your files.
2. Log in to [Netlify](https://app.netlify.com) and click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize Netlify.
4. Choose your portfolio repository.
5. Leave the **Build settings** empty (since it's a static site, no build command is needed) and set the **Publish directory** to `./` (or blank).
6. Click **Deploy Site**. Every time you push changes to GitHub, Netlify will rebuild and update the live site automatically.

---

## Method 2: GitHub Pages (Best for Developers)

GitHub Pages hosts static websites directly from your GitHub repository for free.

1. Create a repository on GitHub (e.g., named `portfolio` or `jeanpaul`).
2. Initialize Git in your local folder and push your code:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
3. On GitHub, navigate to your repository's **Settings** tab.
4. Scroll down on the left sidebar and click **Pages**.
5. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
6. Under **Branch**, select `main` and click **Save**.
7. Wait 1-2 minutes. Your site will be published at `https://your-username.github.io/your-repo-name/`.

---

## Method 3: Vercel (Fastest Global Loading)

Vercel provides automatic deployments on a global edge network, ideal for high performance.

### Option A: Using the Vercel Dashboard
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New** > **Project**.
3. Import your portfolio repository from GitHub.
4. In the Project configuration screen:
   - Framework Preset: Choose **Other** (Vercel automatically detects static HTML).
   - Build and Output Settings: Leave default/empty.
5. Click **Deploy**. Vercel will create a live URL (e.g., `https://portfolio-three-gray.vercel.app`).

### Option B: Using the Vercel CLI (Terminal)
1. Install Vercel globally:
   ```bash
   npm install -g vercel
   ```
2. Open your terminal in the portfolio folder and run:
   ```bash
   vercel
   ```
3. Follow the terminal prompts to log in and set up the project. Once configured, run `vercel --prod` to deploy updates.
