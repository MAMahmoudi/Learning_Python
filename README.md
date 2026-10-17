# Learning Python

A static website of Python tutorials and exercises, from installing Python to idiomatic intermediate Python, building a Django web app, and advanced topics such as concurrency and testing.

## Content

| Chapter | Pages |
| --- | --- |
| **Basics** | Basics, Exercises, Solutions |
| **Intermediate** | Files, Exceptions, Files Exercises, Files Solutions, Lists and Dictionaries, Functions, Comprehensions and Generators, Classes and Interfaces, Metaclasses and Attributes, Testing and Debugging |
| **Django** | Getting Started with Django, User Accounts, Styling and Deploying an App |
| **Advanced** | Concurrency and Parallelism, Robustness and Performance, Testing and Debugging, Collaboration |

## Running locally

The navigation bar and tables of contents are built with JavaScript modules, which browsers refuse to load from `file://` URLs. Serve the folder over HTTP instead:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Project structure

```
index.html                Home page with the full table of contents
Basics/ Intermediate/     One HTML page per topic, plus a landing page
Django/ Advanced/         per chapter (Intermediate.html, Django.html, Advanced.html)
assets/
  CSS/                    Learning_Styles.css (pages), Nav_Bar.css, Table_Of_Content.css
  JS/Menu_Items.js        Single source of truth for the site's navigation
  JS/Nav_Bar.js           Builds the top navigation bar on every page
  JS/Side_Bar.js          Builds the per-page section list from .Section_Title headings
  JS/Content_Table.js     Builds the tables of contents on the home and landing pages
  images/
```

## Adding a page

1. Copy an existing topic page (for example `Intermediate/Functions.html`) and replace its sections. Each `<section>` has one `<h2 class="Section_Title">`; prose goes in `<div class="Definitions">` and code in `<pre class="prettyprint python Code">`. Optional callouts: `<div class="Note">` and `<div class="Warning">`.
2. Add the page to `assets/JS/Menu_Items.js`. Paths there are relative to the site root; the nav bar, home page and chapter landing pages all update automatically.

## Deploying

The site is plain HTML, CSS and JavaScript with no build step, so it can be deployed as-is to any static host (Vercel, GitHub Pages, Netlify).
