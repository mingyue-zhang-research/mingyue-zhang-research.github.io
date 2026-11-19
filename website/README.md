# Mingyue Zhang, personal website

Plain HTML/CSS/JS. No build step. GitHub Pages serves it as is.

## Files

| What | Where |
|---|---|
| Pages | `index.html`, `news.html`, `research.html`, `publications.html`, `travel.html`, `beyond.html` |
| Colors, fonts, layout | `assets/css/style.css` (colors are the variables at the top) |
| News list (Home shows the first 5) | `assets/js/news-data.js` |
| Travel cards | `assets/js/travel-data.js` |
| Photos and figures | `assets/img/` |

## Common edits

- **Add news.** Copy one `{ ... }` block at the top of `assets/js/news-data.js` and change it. Add `home: true` to also show it on the Home page.
- **Add a trip.** Copy one line in `assets/js/travel-data.js`. Set `type: "personal"` for a personal trip and add `photo: "assets/img/travel/name.jpg"` to show a photo.
- **Add a paper.** Copy one `<li class="pub">...</li>` block in `publications.html`. Update the count on the filter button.
- **Add a photo or figure.** Save it in `assets/img/`, then replace the striped placeholder `<div class="ph">...</div>` with `<img src="assets/img/your-file.jpg" alt="short description">`.
- **Ski and Momoko photos.** Save them as `assets/img/ski.jpg` and `assets/img/momoko.jpg`. They appear automatically on the Beyond Research page. Until then, placeholder drawings show.
- **Home page project pictures.** Save a figure as `assets/img/projects/ldr.jpg`, `inverse.jpg`, `gl.jpg`, `composites.jpg`, `hdc.jpg` or `rail.jpg` (wide images work best, about 8:5). It replaces the drawn cover automatically.
- **Header or footer links** appear on every page, so change them in all six HTML files.

Preview by double-clicking `index.html`.

## Publish on GitHub Pages

1. Sign in at github.com and create a new **public** repository named exactly `USERNAME.github.io` (your GitHub username).
2. On the empty repository page, click **uploading an existing file**, drag in everything inside this folder (the `assets` folder, all `.html` files, `.nojekyll`, `README.md`), and click **Commit changes**.
3. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at `https://USERNAME.github.io`.

To update later, upload the changed files the same way (same path overwrites), or edit a file directly on github.com with the pencil icon.
