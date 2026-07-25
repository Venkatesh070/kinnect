import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="hero">
      <h1>Kinnect legal center</h1>
      <p>
        Policies that govern how Kinnect connects people nearby — including
        privacy, terms of use, and how to delete your account.
      </p>
      <div className="card-grid">
        <Link className="card" to="/privacy-policy">
          <h2>Privacy Policy</h2>
          <p>How we collect, use, and protect your information.</p>
        </Link>
        <Link className="card" to="/terms">
          <h2>Terms & Conditions</h2>
          <p>Rules for using Kinnect and community expectations.</p>
        </Link>
        <Link className="card" to="/account-deletion">
          <h2>Delete your account</h2>
          <p>Step-by-step instructions to permanently remove your account.</p>
        </Link>
      </div>
    </section>
  )
}
