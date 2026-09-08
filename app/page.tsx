const products = [
  { name: 'NAD+', kind: 'Research Material', slug: 'nad-plus', note: 'Laboratory research material.' },
  { name: 'GHK-Cu', kind: 'Research Material', slug: 'ghk-cu', note: 'Laboratory research material.' },
  { name: 'BPC-157', kind: 'Research Material', slug: 'bpc-157', note: 'Laboratory research material.' },
  { name: 'TB-500', kind: 'Research Material', slug: 'tb-500', note: 'Laboratory research material.' },
  { name: 'CJC / Ipamorelin', kind: 'Research Material', slug: 'cjc-ipamorelin', note: 'Laboratory research material.' },
  { name: 'BAC Water', kind: 'Laboratory Supply', slug: 'bac-water', note: 'Laboratory supply for research applications.' },
]

export default function Home() {
  return (
    <>
      <div className="topbar">RESEARCH USE ONLY <span>•</span> NOT FOR HUMAN OR VETERINARY USE</div>
      <header className="site-header wrap">
        <a className="brand" href="/">VOIÉLA</a>
        <nav className="links" aria-label="Main navigation">
          <a href="/shop">Shop</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/checkout">Cart</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">Research materials · Est. 2026</div>
            <h1>Research,<br /><em>refined.</em></h1>
            <p>VOIÉLA presents laboratory research materials with a focus on clear information, careful presentation, and a straightforward research-only standard.</p>
            <div className="hero-actions"><a className="button" href="/shop">Explore materials</a><a className="text-link" href="/about">Our standard <span>↗</span></a></div>
          </div>
          <div className="hero-art" aria-label="VOIÉLA research collection visual">
            <div className="art-circle">V</div><div className="art-label">VOIÉLA<br /><span>LABORATORY COLLECTION 01</span></div>
          </div>
        </section>

        <section className="compliance wrap">
          <div><strong>01</strong><span>Research use only</span></div><div><strong>02</strong><span>Clear product information</span></div><div><strong>03</strong><span>No human-use guidance</span></div>
        </section>

        <section className="collection wrap" id="shop">
          <div className="section-head"><div><div className="eyebrow">The collection</div><h2>Research materials</h2></div><a className="text-link" href="/shop">View all <span>→</span></a></div>
          <div className="product-grid">
            {products.map((p, i) => <a className="product-card" href={`/products/${p.slug}`} key={p.slug}><div className={`product-visual visual-${i + 1}`}><span>VOIÉLA</span><small>RUO</small></div><div className="product-meta"><div><h3>{p.name}</h3><p>{p.kind}</p></div><span className="arrow">↗</span></div></a>)}
          </div>
        </section>

        <section className="statement wrap">
          <div className="eyebrow">The VOIÉLA standard</div><h2>Nothing hidden.<br /><em>Nothing implied.</em></h2>
          <p>Our storefront is intentionally simple: products are presented as research materials, with no dosing instructions, treatment claims, or personal-use recommendations.</p>
          <a className="button button-light" href="/about">Learn about VOIÉLA</a>
        </section>

        <section className="final-notice wrap"><strong>IMPORTANT RESEARCH-USE NOTICE</strong><p>All products are sold strictly for laboratory research use only. Not for human consumption, administration, diagnosis, treatment, prevention, or mitigation of disease. Buyers are responsible for ensuring their intended use complies with all applicable laws and regulations.</p></section>
      </main>

      <footer className="footer"><div className="wrap footer-grid"><div><div className="brand">VOIÉLA</div><p>Research materials, presented clearly.</p></div><div className="footer-links"><a href="/shop">Shop</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/policies">Policies</a></div><div className="footer-note">RESEARCH USE ONLY.<br />NOT FOR HUMAN OR VETERINARY USE.<br /><br />© 2026 VOIÉLA</div></div></footer>
    </>
  )
}
