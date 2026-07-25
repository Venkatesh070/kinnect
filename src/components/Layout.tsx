import { NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <NavLink to="/" className="brand" end>
            <img src="/kinnect-logo.png" alt="" />
            <span className="brand-name">Kynct</span>
          </NavLink>
          <nav className="nav" aria-label="Legal">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms & Conditions</NavLink>
            <NavLink to="/account-deletion">Delete Account</NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Kynct. All rights reserved.
        <br />
        Contact by phone:{' '}
        <a href="tel:+919902481362">9902481362</a>
      </footer>
    </div>
  )
}
