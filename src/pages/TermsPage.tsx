const UPDATED = 'July 25, 2026'

export function TermsPage() {
  return (
    <article className="doc">
      <header className="doc-header">
        <h1>Terms & Conditions</h1>
        <p className="meta">Last updated: {UPDATED}</p>
      </header>

      <p>
        Welcome to <strong>Kinnect</strong>. These Terms & Conditions (“Terms”)
        govern your access to and use of the Kinnect mobile application and
        related services (the “Service”). By creating an account or using
        Kinnect, you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <ul>
        <li>You must be at least <strong>18 years old</strong>.</li>
        <li>You must provide accurate registration information.</li>
        <li>
          You may not use Kinnect if you have been banned or if use is
          prohibited by applicable law.
        </li>
      </ul>

      <h2>2. Your account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your login
        credentials and for all activity under your account. Notify us promptly
        if you suspect unauthorized access.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Harass, threaten, scam, or exploit other users</li>
        <li>Post illegal, hateful, pornographic involving minors, or violent content</li>
        <li>Impersonate others or misrepresent your identity</li>
        <li>Upload spam, malware, or scrape the Service</li>
        <li>Use Kinnect for commercial solicitation without our permission</li>
        <li>Interfere with safety systems, reports, or blocks</li>
      </ul>

      <h2>4. User content</h2>
      <p>
        You retain ownership of content you upload (photos, messages, bio,
        etc.). You grant Kinnect a worldwide, non-exclusive license to host,
        display, and distribute that content as needed to operate the Service.
      </p>
      <p>
        You are solely responsible for your content. We may remove content or
        suspend accounts that violate these Terms or our safety standards.
      </p>

      <h2>5. Safety & community tools</h2>
      <p>
        Kinnect provides report and block tools. We encourage you to use them
        when you encounter abusive or suspicious behavior. We may investigate
        reports and take action we deem appropriate, including content removal
        or account termination. Kinnect does not guarantee that every report
        will result in a specific outcome.
      </p>
      <p>
        Always meet new people in public places, tell a friend your plans, and
        never send money or sensitive financial information to someone you met
        online.
      </p>

      <h2>6. Location & permissions</h2>
      <p>
        Nearby matching relies on location permissions. By enabling location,
        you agree that Kinnect may process your location to calculate proximity
        and discovery results. You can disable location in device settings, but
        core discovery features may become unavailable.
      </p>

      <h2>7. Subscriptions & purchases</h2>
      <p>
        Some premium features may be offered as paid plans. Availability of
        purchases can differ by platform. On Apple platforms, digital
        subscriptions (if offered) are subject to Apple’s payment rules and
        App Store terms. On other platforms, third-party payment processors may
        be used where permitted.
      </p>
      <p>
        Unless required by law or platform policy, fees are generally
        non-refundable once processed. Manage or cancel platform purchases
        through the store account that processed the payment.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        Kinnect branding, logos, software, and design are owned by us or our
        licensors. You may not copy, modify, or distribute our materials except
        as allowed by these Terms or with written permission.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        Kinnect is provided “as is” and “as available.” We do not guarantee
        uninterrupted service, perfect match quality, or that every user is who
        they claim to be. Use the Service at your own discretion and follow
        safety best practices.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Kinnect and its operators will
        not be liable for indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, data, or goodwill arising
        from your use of the Service.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using Kinnect and delete your account at any time. We may
        suspend or terminate access if you violate these Terms, create risk for
        other users, or for operational/legal reasons.
      </p>

      <h2>12. Account deletion</h2>
      <p>
        You can delete your account in the Kinnect app under Settings, or by
        following the steps on our{' '}
        <a href="/account-deletion">Account Deletion</a> page. Deletion is
        permanent and removes access to your profile and related in-app data,
        subject to limited legal retention.
      </p>

      <h2>13. Changes to the Terms</h2>
      <p>
        We may update these Terms. Continued use after changes become effective
        constitutes acceptance of the updated Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms:{' '}
        <a href="mailto:support@kinnect.app">support@kinnect.app</a>
      </p>

      <p className="note">
        Review this document with your counsel before App Store submission and
        update company legal name, jurisdiction, and support contacts as
        needed.
      </p>
    </article>
  )
}
