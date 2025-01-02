# Create Ts Library

A modern, opinionated TypeScript library starter template with best practices and comprehensive tooling setup. This template provides everything you need to build, test, and publish high-quality TypeScript libraries with minimal configuration.

## Features

- [TSUP](https://github.com/egoist/tsup) for zero-config TypeScript bundling
- Comprehensive linting with ESLint and Prettier
- Bundle size monitoring with [size-limit](https://github.com/ai/size-limit)
- Automated versioning and publishing with [Changesets](https://github.com/changesets/changesets)
- Quality checks with [publint](https://github.com/bluwy/publint) and [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io)
- GitHub Actions for CI/CD
- Continuous package testing with [pkg.pr.new](https://pkg.pr.new)
- Pre-commit hooks with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged)

## Quick Start

1. Click the green `Use this template` button at the top of this repository
2. Clone your new repository
3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Update package details:
   - Replace all `[*]` placeholders in `package.json` with your library details
   - Customize the ESLint and TypeScript configurations as needed

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

- `pnpm build` - Build all packages
- `pnpm lint:*` - Run various linting checks:
  - `lint:eslint` - ESLint checks
  - `lint:format` - Prettier formatting
  - `lint:check-types` - TypeScript type checking
  - `lint:size` - Bundle size analysis
  - `lint:publint` - Package publishing validation
  - `lint:attw` - Type resolution validation

### Publishing Updates

1. Create a changeset:

   ```bash
   pnpm changeset
   ```

2. Follow the prompts to describe your changes
3. Commit and push to GitHub
4. A PR will be created by the Changeset bot
5. Merging the PR will:
   - Bump versions
   - Create a GitHub release
   - Publish to NPM

## Continuous Integration

The template includes GitHub Actions for:

- Automated code formatting via [autofix.ci](https://autofix.ci)
- Linting and type checking
- Automated publishing via Changesets
- Issue management (labeling and assignment)
- Package testing with pkg.pr.new

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
