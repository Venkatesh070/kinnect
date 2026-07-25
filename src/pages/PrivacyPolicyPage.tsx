const UPDATED = 'July 25, 2026'

export function PrivacyPolicyPage() {
  return (
    <article className="doc">
      <header className="doc-header">
        <h1>Privacy Policy</h1>
        <p className="meta">Last updated: {UPDATED}</p>
      </header>

      <p>
        This Privacy Policy explains how <strong>Kynct</strong> (“we”, “us”,
        or “our”) collects, uses, shares, and protects information when you use
        the Kynct mobile application and related services (the “Service”).
      </p>
      <p>
        Kynct is a dating and social discovery app for adults{' '}
        <strong>18 years of age and older</strong>. By using Kynct, you agree
        to this Policy.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Account & profile data:</strong> name, date of birth / age,
          gender, bio, interests, photos, relationship preferences, and other
          profile details you provide.
        </li>
        <li>
          <strong>Contact details:</strong> phone number and/or email address
          used for authentication and account recovery.
        </li>
        <li>
          <strong>Location:</strong> precise location (when permitted) to show
          nearby matches and distance-based discovery.
        </li>
        <li>
          <strong>Contacts (optional):</strong> if you grant permission, we may
          access contacts so you can hide people you already know from
          discovery.
        </li>
        <li>
          <strong>Media & device permissions:</strong> camera and photo library
          for profile photos / verification; microphone for voice messages when
          you choose to send them.
        </li>
        <li>
          <strong>Messages & activity:</strong> chats, likes, passes, reports,
          blocks, and in-app interactions needed to operate matching and safety
          features.
        </li>
        <li>
          <strong>Device & technical data:</strong> device identifiers (such as
          push notification tokens), app version, crash/diagnostic data, and
          basic usage logs for reliability and security.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>Create and manage your account and profile</li>
        <li>Show nearby potential matches and power discovery features</li>
        <li>Enable messaging, notifications, and safety tools (report / block)</li>
        <li>Verify identity or authenticity where offered</li>
        <li>Provide customer support and respond to requests</li>
        <li>Improve reliability, prevent fraud/abuse, and secure the Service</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information. We do not use
        third-party advertising trackers for cross-app tracking in the current
        Kynct iOS release.
      </p>

      <h2>3. How we share information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          <strong>Other users:</strong> profile content you choose to publish
          (photos, bio, etc.) and limited discovery details such as approximate
          distance where shown in-app.
        </li>
        <li>
          <strong>Service providers:</strong> infrastructure, authentication,
          messaging, analytics limited to app functionality, and cloud hosting
          partners who process data on our instructions.
        </li>
        <li>
          <strong>Legal & safety:</strong> when required by law, or when we
          believe disclosure is necessary to protect users, investigate abuse,
          or enforce our Terms.
        </li>
      </ul>

      <h2>4. Permissions on your device</h2>
      <p>
        Kynct may request access to location, contacts, camera, photos,
        microphone, and notifications. You can deny or revoke these permissions
        in your device settings. Some features (especially nearby matching) may
        not work without location access.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We retain account and profile information while your account is active.
        After account deletion, we remove or anonymize personal data within a
        reasonable period, except where we must retain limited records for
        legal, security, or dispute-resolution purposes.
      </p>

      <h2>6. Children’s privacy</h2>
      <p>
        Kynct is strictly for users <strong>18+</strong>. We do not knowingly
        collect information from anyone under 18. If we learn that an underage
        account was created, we will delete it.
      </p>

      <h2>7. Your choices & rights</h2>
      <ul>
        <li>Update or delete profile content in the app</li>
        <li>Control device permissions in OS settings</li>
        <li>
          Request account deletion in Settings → Delete Account, or follow the
          instructions on our{' '}
          <a href="/account-deletion">Account Deletion</a> page
        </li>
        <li>
          Contact us by phone at{' '}
          <a href="tel:+919902481362">9902481362</a> for privacy requests
        </li>
      </ul>

      <h2>8. Security</h2>
      <p>
        We use industry-standard safeguards such as encrypted transit (HTTPS)
        and access controls. No method of transmission or storage is 100%
        secure; please use strong account practices and report suspicious
        activity.
      </p>

      <h2>9. International users</h2>
      <p>
        If you use Kynct from outside the country where our servers operate,
        your information may be processed in other jurisdictions with different
        data-protection laws.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        revised version here and update the “Last updated” date.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about privacy — by phone:{' '}
        <a href="tel:+919902481362">9902481362</a>
      </p>

      <p className="note">
        This page is intended for App Store / Play Store legal disclosure for
        the Kynct consumer app.
      </p>
    </article>
  )
}
