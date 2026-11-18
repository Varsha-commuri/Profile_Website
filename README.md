# Personal Portfolio Website

**Author:** Varsha Commuri  
**Tagline:** AI & Software Development Enthusiast

## 1. Project Overview

This project is a responsive, single-page personal portfolio website developed using HTML5, CSS3 and Vanilla JavaScript.

The website presents my professional journey, personal interests, family, hobbies and artwork through a modern and elegant design.

The project also demonstrates version control and continuous integration/continuous deployment (CI/CD) using Git, GitHub and GitHub Actions.

## 2. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts and responsive design |
| Vanilla JavaScript | Interactive functionality |
| Git | Version control |
| GitHub | Repository hosting and collaboration |
| GitHub Actions | CI/CD automation |
| GitHub Pages | Website hosting |
| HTMLHint | HTML validation |
| Stylelint | CSS validation |
| Lighthouse CI | Website performance auditing |

No frontend frameworks or JavaScript libraries are used.

## 3. Website Sections

The portfolio contains six main sections:

### 3.1 Hero Section
- Personal introduction.
- Profile photograph.
- Professional tagline.
- Call-to-action navigation.

### 3.2 Professional Journey
- Educational background.
- Professional experience.
- Leadership roles.
- Achievements.
- Expandable timeline content.
- Scroll-based animations.

### 3.3 Personal Likings
- Music preferences.
- Favourite authors and books.
- Travel interests.
- Editorial-style presentation.

### 3.4 Family
- Dedicated sections for family members.
- Consistent card dimensions.
- Alternating visual styling.

### 3.5 Hobbies
- Mandala and artwork gallery.
- Yoga and swimming interests.
- Image presentation with consistent sizing.
- Interactive gallery functionality.

### 3.6 Footer
- LinkedIn, Instagram and GitHub links.
- Email contact.
- Dynamic copyright year.
- Back-to-top navigation.

## 4. Project Structure

```text
Profile_Website/
│
├── index.html
│
├── css/
│   ├── theme.css
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── hero/
│   ├── journey/
│   ├── interests/
│   ├── family/
│   └── hobbies/
│
├── .github/
│   └── workflows/
│       ├── validate.yml
│       ├── deploy.yml
│       ├── pr-checks.yml
│       ├── lighthouse.yml
│       └── notify.yml
│
├── .htmlhintrc
├── .gitignore
└── README.md
```

## 5. Design and Theming

The website uses CSS variables to centralise its design properties.

All theme variables are maintained in:

`css/theme.css`

The main stylesheet, `css/style.css`, uses these variables to control the appearance of website components.

### Themes developed

1. **Original Theme:** Sage green, ivory and antique gold.
2. **Dark Theme:** Charcoal, forest green, muted sage and antique gold.
3. **Warm Theme:** Terracotta, cream, peach and antique bronze.

The themes were developed on separate Git branches. Changing the values in `theme.css` allows the website's appearance to be modified without rewriting the HTML structure or component styles.

## 6. JavaScript Functionality

Vanilla JavaScript is used for interactive features, including:

- Mobile navigation menu.
- Professional journey show-more functionality.
- Scroll-based animations using IntersectionObserver.
- Image gallery lightbox.
- Dynamic copyright year.
- Back-to-top navigation.

## 7. Git and GitHub Workflow

Git is used to maintain project history and manage development.

### Main branches

| Branch | Purpose |
|---|---|
| `main` | Production-ready website |
| `develop` | Integration branch for completed features |

### Feature branches

Examples:

- `feature/hero-section`
- `feature/journey-timeline`
- `feature/interests-section`
- `feature/family-section`
- `feature/mobile-navigation`
- `feature/final-website-polish`

### Theme branches

- `theme/dark-mode`
- `theme/warm-terracotta`

### CI/CD branches

- `ci/setup-validation`
- `ci/setup-deploy`
- `ci/setup-pr-checks`
- `ci/setup-lighthouse`
- `ci/setup-notifications`

### Development workflow

1. Create a feature branch from `develop`.
2. Implement the required changes.
3. Test the website locally.
4. Commit changes with meaningful messages.
5. Push the branch to GitHub.
6. Create a pull request targeting `develop`.
7. Review automated checks.
8. Merge after successful validation.

The `develop` branch is merged into `main` when the project is ready for production deployment.

## 8. CI/CD Pipeline

GitHub Actions automates validation, deployment checks and website auditing.

Five workflows have been implemented.

### 8.1 Website Validation — `validate.yml`

Purpose: Automatically validate HTML and CSS.

Triggers:
- Push to `main` or `develop`.
- Pull requests targeting `main`.

Steps:
1. Checkout repository.
2. Set up Node.js.
3. Install HTMLHint and Stylelint.
4. Validate HTML.
5. Validate CSS.

### 8.2 GitHub Pages Deployment — `deploy.yml`

Purpose: Automatically deploy the portfolio website.

Trigger:
- Push to `main`.

Steps:
1. Checkout repository.
2. Configure GitHub Pages.
3. Upload website files as a deployment artifact.
4. Deploy the artifact to GitHub Pages.

The workflow uses GitHub Pages deployment permissions and concurrency controls.

### 8.3 Pull Request Quality Checks — `pr-checks.yml`

Purpose: Perform additional quality checks before merging pull requests into `main`.

Checks include:
- Verify that the HTML document contains a title.
- Verify image alt attributes.
- Check JavaScript for unwanted console.log statements.
- Run a final quality gate after the individual checks pass.

### 8.4 Lighthouse Website Audit — `lighthouse.yml`

Purpose: Audit website performance and quality.

Triggers:
- Successful completion of the GitHub Pages deployment workflow.
- Weekly scheduled execution.

The workflow runs Lighthouse CI and uploads the generated audit report as an artifact.

### 8.5 Deployment Notifications — `notify.yml`

Purpose: Report deployment results.

Trigger:
- Completion of the GitHub Pages deployment workflow.

Features:
- Reports successful deployments.
- Reports failed deployments.
- Supports optional Slack notifications through the `SLACK_WEBHOOK_URL` GitHub Actions secret.

If the Slack secret is not configured, the workflow skips the Slack notification.

## 9. Running the Website Locally

The project does not require a build process or package installation.

### Option 1: Open directly

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser.

### Option 2: Using Visual Studio Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Preview the website in your browser.

## 10. Repository Setup

Clone the repository:

```bash
git clone https://github.com/Varsha-commuri/Profile_Website.git
```

Navigate into the project:

```bash
cd Profile_Website
```

Check the current branch:

```bash
git branch
```

Check repository status:

```bash
git status
```

## 11. Deployment

The website is configured for GitHub Pages deployment through GitHub Actions.

To enable deployment:

1. Open the GitHub repository.
2. Navigate to Settings → Pages.
3. Select GitHub Actions as the deployment source.
4. Ensure the deployment workflow is available on `main`.
5. Push changes to `main`.
6. Monitor the deployment under the Actions tab.

## 12. Learning Outcomes

Through this project, I gained practical experience in:

- Building responsive websites using HTML, CSS and JavaScript.
- Organising code using a structured folder hierarchy.
- Managing themes through CSS custom properties.
- Implementing interactive website functionality.
- Using Git for version control.
- Creating and managing feature branches.
- Working with GitHub pull requests and merges.
- Automating validation using GitHub Actions.
- Configuring continuous deployment with GitHub Pages.
- Performing website audits using Lighthouse CI.

## 13. Author

**Varsha Commuri**

AI & Software Development Enthusiast

- GitHub: https://github.com/Varsha-commuri
- LinkedIn: https://www.linkedin.com/in/varsha-commuri-60283b277/
- Instagram: https://www.instagram.com/varsha_commuri/

---

*Developed as part of a practical web development and CI/CD assignment.*