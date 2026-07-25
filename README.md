# Kinnect Legal Site

React (Vite) site for Kinnect **Privacy Policy**, **Terms & Conditions**, and **Account Deletion** — ready for Vercel.

## Local development

```bash
cd /Users/venkatesh/Desktop/Manjunath/kinnect
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to GitHub (or import the directory in Vercel).
2. In Vercel: **Add New Project** → select the repo / `kinnect` folder.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

`vercel.json` already rewrites all routes to `index.html` for client-side routing.

## Public URLs (after deploy)

Replace `YOUR_DOMAIN` with your Vercel domain (e.g. `kinnect.vercel.app`):

| Page | Path |
|---|---|
| Home | `https://YOUR_DOMAIN/` |
| Privacy Policy | `https://YOUR_DOMAIN/privacy-policy` |
| Terms & Conditions | `https://YOUR_DOMAIN/terms` |
| Account Deletion | `https://YOUR_DOMAIN/account-deletion` |

`/user-agreement` redirects to `/terms` for compatibility with the old EverQpid URL shape.

## Point the Flutter app at these URLs

Update:

- `EverQpid_USER/lib/Features/settings/view/privacy_policy_screen.dart`
- `EverQpid_USER/lib/Features/settings/view/terms_conditions_screen.dart`
- `EverQpid_USER/lib/env.dart`

Example:

```dart
static const url = 'https://YOUR_DOMAIN/privacy-policy';
// terms
static const url = 'https://YOUR_DOMAIN/terms';
```

Also paste the Account Deletion URL into App Store Connect.

## Before App Store submit

- Replace `support@kinnect.app` with your real support email if different.
- Have counsel review Privacy / Terms.
- Confirm company legal name and jurisdiction if required.
# kinnect
