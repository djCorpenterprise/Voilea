import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function Home() {
  return <>
    <div className="topbar">RESEARCH USE ONLY <span>•</span> NOT FOR HUMAN OR VETERINARY USE</div>
    <header className="site-header wrap"><a className="brand" href="/">VOIÉLA</a><nav className="links"><a href="/shop">Shop</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/checkout">Cart</a></nav></header>
    <main>
      <section className="hero-image-section">
        <img className="hero-image" src="/images/hero.webp" alt="VOIÉLA research materials collection" />
      </section>

      <section className="compliance wrap"><div><strong>01</strong><span>Research use only</span></div><div><strong>02</strong><span>Clear specifications</span></div><div><strong>03</strong><span>No personal-use guidance</span></div></section>

      <section className="collection wrap">
        <div className="section-head"><div><div className="eyebrow">The collection</div><h2>Research materials</h2></div><a className="text-link" href="/shop">View all <span>→</span></a></div>
        <div className="product-grid">
          {products.map((p, i) => <ProductCard key={p.id} name={p.name} category={p.category} visualIndex={(i % 5) + 1} productId={p.id} contents={p.contents} price={p.price} />)}
        </div>
      </section>

      <section className="statement wrap"><div className="eyebrow">The VOIÉLA standard</div><h2>Nothing hidden.<br/><em>Nothing implied.</em></h2><p>Our storefront is intentionally simple: products are presented strictly as research materials, without dosing instructions, treatment claims, or personal-use recommendations.</p><a className="button button-light" href="/about">Learn about VOIÉLA</a></section>
      <section className="final-notice wrap"><strong>IMPORTANT RESEARCH-USE NOTICE</strong><p>All products are sold strictly for laboratory research use only. Not for human or veterinary consumption or administration. Not intended to diagnose, treat, cure, prevent, or mitigate disease. Buyers are responsible for ensuring intended use complies with applicable laws and regulations.</p></section>
    </main>
    <footer className="footer"><div className="wrap footer-grid"><div><div className="brand">VOIÉLA</div><p>Research materials, presented clearly.</p></div><div className="footer-links"><a href="/shop">Shop</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/policies">Policies</a></div><div className="footer-note">RESEARCH USE ONLY.<br/>NOT FOR HUMAN OR VETERINARY USE.<br/><br/>© 2026 VOIÉLA</div></div></footer>
  </>
}
