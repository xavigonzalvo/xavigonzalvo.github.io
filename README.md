# xavigonzalvo.github.io

Personal website built with Gatsby.

## Main Sections

- **Home** (`/`) - About section with intro and mini resume
- **Projects** (`/projects`) - Research projects and work experience
- **Publications** (`/publications`) - Academic papers and publications

## Data Structure

The site uses CSV files in `src/data/` to manage content:

- `papers.csv` - Publication list with authors, titles, conferences, and URLs
- `projects.csv` - Research projects with company, role, and descriptions
- `resume.csv` - Resume/CV information
- `work.csv` - Work experience details

Markdown content is stored in `src/content/`:
- `intro.md` - Introduction text for the home page
- `about.md` - About section content

## Development

```shell
npm install
npm run develop
```

The site will be available at http://localhost:8000
