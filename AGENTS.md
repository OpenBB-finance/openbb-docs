# Rules for AI Agents Working With OpenBB Docs

## Build/Lint/Test Commands

- Start dev server: `npm run dev`
- Build site: `npm run build`
- Lint markdown files in content folder: `npm run lint`
- Test: broken link testing is handled with the build site command
- Type check: `npm run typecheck`
- Never commit without reviewing link validity and command accuracy

### Documentation writing and review guidelines

- Keep tone neutral, instructive, and concise. Write as if guiding a competent developer or user who values clarity.
- Avoid inflated marketing terms (e.g., "seamless", "comprehensive", "intelligent", "cutting-edge", "robust", "innovative") unless strictly accurate. Prefer precise, concrete descriptions.
- Prefer specificity over vagueness. Show what the feature does and how to use it, not why it’s "important."
- Do not over-explain obvious concepts; assume a moderately technical reader.
- Avoid repetition and filler.
- Vary sentence length and structure.
- Prioritize accuracy and utility. Each sentence should teach or clarify something.
- Prefer prose over lists.

#### Quality check-list

When finalizing - confirm that the following things are avoided:

1. Buzzwords creep: does it lean on "seamless / comprehensive / intelligent / robust / innovative" instead of plain, functional terms?
2. Sales pitch tone: does it justify the product ("you’ll benefit from…") instead of explaining usage?
3. Uniform rhythm: are sentences medium-length, polite, and overly smooth?
4. Redundant phrasing: do sections repeat the same idea in slightly different words?
5. Lack of concrete detail: are there too few examples, commands, or step-by-step explanations compared to human-written technical docs?

### Markdown style rules

- Inline HTML is allowed
- When embedding images, use the following code pattern:

  ```html
  <div style={{display: 'flex', justifyContent: 'center'}}>
     <img
       className="pro-border-gradient"
       alt="Descriptive alt text"
       src="https://url.of.the.image.in.s3.amazonaws.com/docs/screenshots/table-controls.jpg"
       width="appropriate width either in px or %"
     />
  </div>
  ```

- If required to adjust linting configurations, refer to `.markdownlint.json`

### Custom Components Coding Style Guidelines

- **Formatting**: Follow existing file patterns; 2 spaces indentation
- **Imports**: Use absolute imports from root where possible
- **Types**: TypeScript used for type safety; define interfaces for MDX components
- **Naming**: Use kebab-case for files, PascalCase for components
- **Error Handling**: Not applicable - static site with minimal JS
