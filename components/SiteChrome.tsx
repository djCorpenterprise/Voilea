import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/">VOIÉLA</Link>
        <nav className="links" aria-label="Primary navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/checkout">Cart</Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand" href="/">VOIÉLA</Link>
          <p>Presented with clarity.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/checkout">Cart</Link>
        </nav>
        <div className="footer-note">© 2026 VOIÉLA</div>
      </div>
    </footer>
  )
}
