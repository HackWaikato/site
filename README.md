# hackwaikato.org

This is the code for the Hamilton City Hack Club website, which is built using [Astro](https://astro.dev) and available at [hackwaikato.org](https://hackwaikato.org).

## Project Structure

```text
/
├── public/
│   ├──
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── Fonts, Images, Icons, etc
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [the guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Dev Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
