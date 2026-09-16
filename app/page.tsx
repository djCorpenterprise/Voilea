import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function Home() {
  return <>
    <header className="site-header wrap">
      <a className="brand" href="/">VOIÉLA</a>
      <nav className="links" aria-label="Primary navigation">
        <a href="/shop">Shop</a><a href="/faq">FAQ</a><a href="/policies">Policies</a><a href="/checkout">Cart</a>
      </nav>
    </header>

    <main>
      <section className="luxury-hero">
        <img src="/images/heronew1.png?v=2" alt="VOIÉLA editorial product presentation" />
        <div className="luxury-hero-overlay">
          <div className="eyebrow">A considered approach</div>
          <h1>Research,<br/><em>beautifully</em><br/>considered.</h1>
          <p>A refined collection of laboratory research materials, presented with clarity and intention.</p>
          <a className="button button-light" href="/shop">Shop the collection <span>→</span></a>
        </div>
        <div className="luxury-hero-side">VOIÉLA<span>CLARITY<br/>QUALITY<br/>PURPOSE</span></div>
      </section>

      <section className="standards wrap">
        <div><strong>01</strong><div><span>Clear specifications</span><small>Product details kept simple and easy to read</small></div></div>
        <div><strong>02</strong><div><span>Focused inventory</span><small>A considered collection without unnecessary noise</small></div></div>
        <div><strong>03</strong><div><span>Thoughtful presentation</span><small>Laboratory materials with a beauty-editorial point of view</small></div></div>
      </section>

      <section className="luxury-feature wrap">
        <div className="luxury-feature-image"><img src="/images/nad1.png" alt="VOIÉLA editorial product setting" /></div>
        <div className="luxury-feature-copy">
          <div className="eyebrow">The VOIÉLA approach</div>
          <h2>Precision<br/><em>in every detail.</em></h2>
          <p>A focused inventory with clean specifications and a visual language inspired by modern beauty, elevated spaces, and the precision of the laboratory.</p>
          <a className="text-link" href="/shop">Explore the inventory <span>→</span></a>
        </div>
      </section>

      <section className="collection wrap">
        <div className="section-head">
          <div><div className="eyebrow">Inventory</div><h2>The collection.</h2></div>
          <a className="text-link" href="/shop">View all <span>→</span></a>
        </div>
        <div className="product-grid">
          {products.map((p, i) => <ProductCard key={p.id} name={p.name} category={p.category} visualIndex={(i % 5) + 1} productId={p.id} contents={p.contents} price={p.price} variants={p.variants} />)}
        </div>
      </section>

      <section className="atmosphere-banner">
        <img src="/images/hero.png" alt="VOIÉLA stone and glass editorial setting" />
        <div className="atmosphere-copy"><div className="eyebrow">Science × aesthetics</div><h2>Where science<br/><em>meets beauty.</em></h2></div>
      </section>

      <section className="luxury-feature luxury-feature-reverse wrap">
        <div className="luxury-feature-image"><img src="/images/ghk1.png" alt="VOIÉLA editorial product setting" /></div>
        <div className="luxury-feature-copy">
          <div className="eyebrow">VOIÉLA</div>
          <h2>Considered<br/><em>from every angle.</em></h2>
          <p>Soft textures, sculptural forms, and a restrained visual language bring the inventory together.</p>
          <a className="text-link" href="/shop">Explore the inventory <span>↗</span></a>
        </div>
      </section>

      <section className="luxury-closing">
        <img src="/images/gv1.png" alt="VOIÉLA editorial setting" />
        <div className="luxury-closing-copy"><div className="eyebrow">VOIÉLA</div><h2>Science.<br/><em>Presented beautifully.</em></h2><a className="button button-light" href="/shop">Shop the collection <span>→</span></a></div>
      </section>
    </main>

    <footer className="footer"><div className="wrap footer-grid"><div><div className="brand">VOIÉLA</div><p>Research materials, presented clearly.</p></div><div className="footer-links"><a href="/shop">Shop</a><a href="/faq">FAQ</a><a href="/policies">Policies</a><a href="/checkout">Cart</a></div><div className="footer-note">© 2026 VOIÉLA</div></div></footer>
  </>
}
