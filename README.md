# OpenBB Documentation Website

This repository contains the source code for the OpenBB Documentation Website.

The website was built using [Docusaurus](https://docusaurus.io/), a modern static website generator and [TailwindCSS](https://tailwindcss.com) as styling solution. It uses algolia search for the search bar.
The final website can be found at [https://docs.openbb.co](https://docs.openbb.co).

## Folder Structure

```bash
├── content # Markdown files
│   ├── cli
│   ├── excel
│   ├── platform
│   ├── pro
│   ├── sdk
│   └── workspace
...
├── scripts
│   ├── generate_excel_markdown.py
│   ├── generate_platform_markdown.py
│   └── generate_widgets_library.py
...
├── src # react stuff for website
├── static # static files
```

### Markdown files

The markdown files are used to generate the website. The markdown files are located in the `content` folder. These files are generated with python scripts that can be found in `scripts` and should not be edited manually.

### Syntax sugar

#### Code blocks

Code blocks are generated using the default markdown syntax:

```python
print("Hello World")
```

To generate a dynamic date for a certain code block (useful for options examples that need to have a valid date), you can use `2022-07-29` as a placeholder. The script will replace it with the third friday of the next month.

```txt
/op oichart ticker:AMD expiry:2022-07-29
```

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/en/) >= 16.13.0
  To check if you have Node.js installed, run this command in your terminal:

```bash
node --version # should be v16.13.0 or higher
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

This command starts a local development server and open up a browser window in `http://localhost:3000`. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. We use Github Pages to host our website. It's deployed in the `gh-pages` branch.

## Run tests

```bash
pytest tests/website --autodoc
```

> If tests are run locally, the `--autodoc` flag is required, otherwise tests will be skipped.
> To install necessary dependencies for tests, run `poetry install -E doc` in the root directory of the repository.

## Notes

### iFrame

We are detecting whether the website is loaded inside an iframe. If it is, we are hiding the header and footer. This is done to have a better integration with our [hub website](https://my.openbb.co).

## Contributing

We welcome contributions to the OpenBB Documentation Website.

---
