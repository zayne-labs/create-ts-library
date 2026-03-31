# Create Ts Library

A modern, opinionated TypeScript library starter template with best practices and comprehensive tooling. Clone this to bootstrap a production-ready TypeScript library with minimal configuration.

## Features

- [tsdown](https://github.com/rolldown/tsdown) for zero-config TypeScript bundling (ESM output)
- [Turbo](https://turbo.build) for monorepo build orchestration and caching
- Comprehensive linting with ESLint and Prettier
- Bundle size monitoring with [size-limit](https://github.com/ai/size-limit)
- Automated versioning and publishing with [Changesets](https://github.com/changesets/changesets)
- Package quality checks with [publint](https://github.com/bluwy/publint) and [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io)
- GitHub Actions for CI/CD
- Continuous package testing with [pkg.pr.new](https://pkg.pr.new)
- Pre-commit hooks with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged)
- Documentation site powered by Next.js (in `apps/docs`)
- Dev sandbox app with Vite for local testing (in `apps/dev`)

## Structure

```
.
├── packages/
│   └── [package-name]/   # Your library package
├── apps/
│   ├── dev/              # Vite dev sandbox for local testing
│   └── docs/             # Next.js documentation site
```

## Quick Start

1. Click the green `Use this template` button at the top of this repository
2. Clone your new repository
3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Update package details — replace all `[*]` placeholders in:
   - `packages/[package-name]/package.json` (name, description, homepage, repository, bugs, size-limit)
   - `apps/docs/content/docs/index.mdx` (package name, installation, quick start example)
   - Rename `packages/[package-name]` to your actual package name

5. Customize ESLint and TypeScript configurations as needed

## Setup GitHub Integration

1. Install required GitHub apps on your repository:
   - [Autofix.ci](https://github.com/marketplace/autofix-ci) for automated code fixes
   - [Changeset Bot](https://github.com/apps/changeset-bot) for PR changeset validation
   - [pkg.pr.new](https://github.com/apps/pkg-pr-new) for continuous package testing

2. Set up NPM publishing:
   - Create an [NPM access token](https://docs.npmjs.com/creating-and-viewing-access-tokens)
   - Add the token as a repository secret named `NPM_TOKEN`

## Development Workflow

### Available Scripts

- `pnpm build` — Build all packages
- `pnpm dev:packages` — Watch mode for all packages
- `pnpm lint:eslint` — ESLint checks across all packages
- `pnpm lint:format` — Prettier formatting
- `pnpm lint:type-check` — TypeScript type checking
- `pnpm lint:size` — Bundle size analysis
- `pnpm lint:publint` — Package publishing validation
- `pnpm lint:attw` — Type resolution validation
- `pnpm test` — Run tests across all packages

### Publishing Updates

1. Create a changeset:

   ```bash
   pnpm changeset
   ```

2. Follow the prompts to describe your changes
3. Commit and push to GitHub
4. A PR will be created by the Changeset bot
5. Merging the PR will bump versions, create a GitHub release, and publish to NPM

## Continuous Integration

GitHub Actions handles:

- Automated code formatting via [autofix.ci](https://autofix.ci)
- Linting and type checking
- Automated publishing via Changesets
- Issue management (labeling and assignment)
- Package testing with pkg.pr.new

## Requirements

- Node.js >= 18.x
- pnpm >= 10.x

## Contributing

Contributions are welcome. Feel free to open a PR.
