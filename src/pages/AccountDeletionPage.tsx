export function AccountDeletionPage() {
  return (
    <article className="doc">
      <header className="doc-header">
        <h1>Delete your Kinnect account</h1>
        <p className="meta">
          Apple App Store requires a clear account-deletion path. Use the steps
          below.
        </p>
      </header>

      <h2>Delete from the Kinnect app (recommended)</h2>
      <ol>
        <li>Open the Kinnect app and sign in.</li>
        <li>Go to <strong>Profile</strong> → <strong>Settings</strong>.</li>
        <li>Tap <strong>Delete Account</strong>.</li>
        <li>
          Type <strong>CONFIRM</strong> and submit to permanently delete your
          account.
        </li>
      </ol>

      <h2>If you cannot access the app</h2>
      <p>
        Email{' '}
        <a href="mailto:support@kinnect.app">support@kinnect.app</a> from the
        phone number or email associated with your account. Include:
      </p>
      <ul>
        <li>Subject line: “Account deletion request”</li>
        <li>Your registered phone / email</li>
        <li>A short confirmation that you want permanent deletion</li>
      </ul>
      <p>
        We will verify ownership and process deletion requests as soon as
        reasonably possible.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile and photos</li>
        <li>Discovery preferences and matching history associated with your account</li>
        <li>Access to chats from that account</li>
      </ul>

      <h2>What may be retained briefly</h2>
      <p>
        Limited records may be kept for fraud prevention, legal compliance, or
        safety investigations, then removed or anonymized according to our{' '}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <p className="note">
        After deletion, you will need to create a new account to use Kinnect
        again.
      </p>
    </article>
  )
}
