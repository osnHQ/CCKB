# Contributing to CCKB

Thank you for showing an interest in contributing to CCKB! All kinds of contributions are valuable to us. In this guide, we will cover how you can quickly onboard and make your first contribution.

## Submitting an Issue

Before submitting a new issue, please look for existing [issues](https://github.com/osnHQ/CCKB/issues). Maybe an issue already exists and might inform you of workarounds. Otherwise, you can give new information.

While we work to fix all the [issues](https://github.com/osnHQ/CCKB/issues), before fixing the bug we need to be able to reproduce and confirm it. Please try to provide us with a minimal reproduction scenario using a repository or [Gist](https://gist.github.com/). Having a live, reproducible scenario gives us the information without asking questions back & forth with additional questions like:

- 3rd-party libraries being used and their versions.
- a use-case that fails.

Without said minimal reproduction, we won't be able to investigate all [issues](https://github.com/osnHQ/CCKB/issues), and the issue might not be resolved.
You can open a new issue with this [issue form](https://github.com/osnHQ/CCKB/issues/new/choose).

## Projects setup and Architecture

### Requirements

- Node.js v20.8.1 (LTS)

  - To install Node.js v20.8.1 (LTS) through NVM (Node Version Manager), follow these steps:

    1. Open your terminal.

    2. Install NVM if you haven't already. You can install NVM by following the instructions at [NVM GitHub](https://github.com/nvm-sh/nvm).

    3. Once NVM is installed, run the following command to install and use Node.js v20.8.1:

       ```bash
       nvm install 20.8.1

       nvm use 20.8.1

       node -v # output: v20.8.1
       ```

    4. You can set Node.js v20.8.1 as your default version with the following command:

       ```bash
       nvm alias default 20.8.1
       ```

## Branch Naming Convention

This project follows a specific branch naming convention to keep things organized. Branch names should adhere to the following pattern:
Here's a breakdown of the format:

- `<type>`: This refers to the purpose of the branch. Use one of the following options:
  - `feature`: New features for the project.
  - `bugfix`: Fixes for existing bugs.
  - `hotfix`: Urgent fixes that need to be deployed quickly.
  - `refactor`: Code improvements that don't introduce new features.
  - `docs`: Changes to documentation files.
- `<descriptive-message>`: Briefly describe the changes introduced in the branch.

Example branch names:

- `feature/improved-search`
- `bugfix/login-error`
- `docs/api-reference-update`

## Commit Messages

Clear and concise commit messages are essential for understanding the changes made. We enforce a commit message format to improve readability and maintainability of the project history. Commit messages should follow this pattern:
- `<type>`: Use the same options mentioned in the branch naming convention.
- `<descriptive message>`: Briefly describe the specific change introduced in the commit.

Example commit messages:

- `feat: implemented search functionality`
- `fix: resolved login error for invalid credentials`
- `docs: updated API reference documentation`

### Enforcing Commit Message Format

This repository uses a pre-commit hook to ensure your commit messages adhere to the required format. The hook will prevent you from pushing commits with invalid messages.

## Pull Request Workflow

- Steps to follow:

    1. **Fork the Repository:**
    - Head over to the project on GitHub and click the "Fork" button. This creates your own copy of the repository.

    2. **Clone Your Fork:**
    - Use Git to clone your forked repository to your local machine. You'll find instructions for cloning a repository on the [Git SCM website](https://git-scm.com/).

    3. **Create a Branch:**
    - Navigate to your local repository and create a new branch for your contribution. Use a descriptive branch name following the convention mentioned earlier.

    4. **Make Changes and Commit:**
    - Make your changes to the codebase and commit them with clear and concise messages that adhere to the format.

    5. **Push Your Branch:**
    - Push your branch to your forked repository on GitHub.

    6. **Create a Pull Request:**
    - On GitHub, navigate to your forked repository and go to the "Pull requests" tab. Click on "New pull request" and select the branch containing your changes.

    7. **Review and Merge:**
    - Briefly describe the changes you made in the pull request description. Once submitted, the maintainers of the project will review your contribution and provide feedback or suggestions.

   - Note: The pre-commit hook might prevent your pull request from being merged if the branch name or commit messages don't follow the guidelines.

We appreciate your contributions to the project! Feel free to reach out if you have any questions.

## Need help? Questions and suggestions

Questions, suggestions, and thoughts are most welcome. Feel free to open a [GitHub Issue](https://github.com/osnHQ/CCKB/issues/new/choose).

## Ways to contribute

- Try the CCKB API and platform and give feedback
- Help with open [issues](https://github.com/osnHQ/CCKB/issues) or [create your own](https://github.com/osnHQ/CCKB/issues/new/choose)
- Share your thoughts and suggestions with us
- Help create tutorials and blog posts
- Request a feature by submitting a proposal
- Report a bug
