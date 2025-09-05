# Changelog

# Changelog

## [0.6.2] - 2025-08-29

### Fixed

- Gender select dropdown width adjustment (additional fix case)
- Removed unused Apple storage references

## [0.6.1] - 2025-08-29

### Fixed

- Resend OTP issue
- Disabled password field behavior
- Select dropdown height and styling
- Select gender width adjustment
- Apple sign-up gender handling
- Route page validation for Verisoul check

## [0.6.0] - 2025-08-28

### Added

- Age Form in authentication flow

### Fixed

- Suspended account handling across redeem, detail, and home redirect
- Image banner display issues in sign-in/sign-up
- Mobile web landscape view fitment
- Third banner positioning in sign-in screen
- Sign-up scrolling behavior
- Account sign-in validation
- Query key handling for `points`
- OTP countdown, style fixes, and strong password validation
- Offerwall redirection issue
- Existing email validation during sign-up
- Multiple UI/UX text and style adjustments

## [0.5.0] - 2025-08-18

### ✨ Features

- **Verisoul**: Added ID check integration.
- **Verisoul**: Added `cl=react` support on ID verification.
- **Sentry**: Initialized Sentry for error monitoring.

### 🐛 Fixes

- **Apple Trial**: Fixed multiple trial errors (02, 32, 4–12).
- **Apple Sign-up**: Fixed first name handling.
- **General**: Removed unused comments.

### 🔧 Internal

- Multiple PR merges from `staging` branch.
- Iterative bugfixes and enhancements consolidated for production release.

# [0.4.0] - 2025-07-31

## ✨ Features

- **Web Engage**: Initial integration for user engagement tracking.
- **GBRAID**: Implement GBRAID tracking parameter.
- **Iframe SDK v3**: Added new iframe SDK integration.
- **Healthcheck**: Added health check endpoint for monitoring.
- **Verisoul**: Reinitialize on logout and added support for original user data.

## 🐛 Fixes

- **Web Engage**: Fixed status handling, UTM campaign capture, and null/date value bugs.
- **Iframe**: Fixed iframe token handling (two iterations of fixes).
- **General**: Multiple adjustments for tracking and engagement stability.

## 🔧 Internal

- Merged multiple feature branches from `staging` with iterative improvements.
- Refined authentication and engagement workflows.

---

## [0.3.0] - 2025-07-31

### ✨ Features

- **webengage**: Initial integration of WebEngage tracking.
- **webengage**: Add support for UTM campaign tracking.
- **webengage**: Implement gbraid attribution tracking.
- **iframe**: Upgrade to iframe SDK v3 for enhanced registration flow.
- **healthcheck**: Add healthcheck endpoints for readiness probes.
- **verisoul**: Reinitialize Verisoul instance on logout event.
- **verisoul**: Track original user data during session.

### 🐛 Bug Fixes

- **webengage**: Fix status initialization issue.
- **webengage**: Fix null value issue when tracking.
- **webengage**: Fix UTM and date parsing bugs.
- **iframe**: Fix token handling and race conditions.
- **iframe**: Update iframe token logic to address double token issues.

### 📦 Internal / Maintenance

- **release**: Bump version to `v0.3.0` using semantic-release.
- Merge multiple `feature/staging-wahyu-fatur-r` branches for cohesive integration.

## [0.2.0] - 2025-07-24

### ✨ Features

- **register**: Remove consent checkbox from registration flow.
- **register**: Add new logic to re-route to offerwall and add delay for Android.
- **register**: Implement fresh registration flow without redirecting to login.
- **register**: Handle wrong redirects after registration success.
- **iframe**: Improve gender page behavior for iframe + Android delay support.
- **new-user**: Fix gender selection behavior for new Google iframe users.
- **middleware**: Patch middleware logic to address screen flickering issues.
- **tracking**: Add new screen and error tracking events.

### 🐛 Bug Fixes

- **iframe**: Prevent multiple gender selection issues during registration.
- **register**: Fix redirect race conditions and timing bugs.
- **redirect**: Correct redirect behavior after login and registration.
- **offerwall**: Restore offerwall flow and patch sign-up logic.
- Fix amplitude reset logic and verisoul placement.
- Fix email tracking behavior during sign-up.

### 🔧 Chore / Refactor

- Clean up logs and UI around registration steps.
- Revert and refactor offerwall-related temporary logic.

---
