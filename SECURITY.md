# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| latest  | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not** open a
public GitHub issue.

Instead, report it responsibly by:

1. **Email**: Send details to the repository owner via GitHub's
   [private vulnerability reporting](https://github.com/hammadaliqasim0138/verifysignature/security/advisories/new).
2. **Include**:
   - A description of the vulnerability and its potential impact.
   - Steps to reproduce the issue.
   - Any relevant proof-of-concept code or screenshots.

We will acknowledge your report within **72 hours** and aim to release a fix within
**14 days** for critical issues.

## Security Best Practices Used in This Project

- HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  Permissions-Policy) are set via `next.config.js`.
- Content-Security-Policy is configured in report-only mode and tightened over time.
- Production source maps are disabled (`productionBrowserSourceMaps: false`).
- External links use `rel="noopener noreferrer"` to prevent tab-nabbing.
- Dependencies are scanned weekly via GitHub Dependabot and `npm audit` runs in CI.

## Scope

The following are **in scope** for security reports:

- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Sensitive data exposure
- Dependency vulnerabilities with direct exploitability

The following are **out of scope**:

- Denial-of-service attacks against the GitHub Pages hosting infrastructure.
- Issues already publicly disclosed in dependency advisories (tracked by Dependabot).
