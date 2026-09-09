import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function Home() {
  return <>
    <div className="topbar">RESEARCH USE ONLY <span>•</span> NOT FOR HUMAN OR VETERINARY USE</div>
    <header className="site-header wrap"><a className="brand" href="/">VOIÉLA</a><nav className="links" aria-label="Primary navigation"><a href="/shop">Shop</a><a href="/faq">FAQ</a><a href="/policies">Policies</a><a href="/checkout">Cart</a></nav></header>

    <main>
      <section className="luxury-hero">
        <img src="/images/hero.png?v=3" alt="VOIÉLA research material editorial presentation" />
        <div className="luxury-hero-overlay"><div className="eyebrow">Research materials</div><h1>A Higher<br/><em>Standard.</em></h1><div className="luxury-hero-rule"/><p>Purposeful research.<br/>Thoughtful presentation.</p><a className="button button-light" href="/shop">Shop collection</a></div>
        <div className="luxury-hero-side">VOIÉLA<br/><span>RESEARCH<br/>PURPOSE<br/>PROGRESS</span></div>
      </section>

      <section className="standards wrap"><div><strong>01</strong><div><span>Research standard</span><small>Focused materials, clearly presented</small></div></div><div><strong>02</strong><div><span>Clear specifications</span><small>Product details kept easy to read</small></div></div><div><strong>03</strong><div><span>Thoughtful presentation</span><small>A considered, restrained collection</small></div></div></section>

      <section className="luxury-feature wrap"><div className="luxury-feature-image"><img src="/images/nad1.png" alt="VOIÉLA research material" /></div><div className="luxury-feature-copy"><div className="eyebrow">The details matter</div><h2>Precision<br/><em>in every detail.</em></h2><p>A focused catalog with clean specifications and a visual language designed around restraint, clarity, and consistency.</p><a className="text-link" href="/shop">Explore the collection <span>→</span></a></div></section>

      <section className="collection wrap"><div className="section-head"><div><div className="eyebrow">Research materials</div><h2>Our collection</h2></div><a className="text-link" href="/shop">View all <span>→</span></a></div><div className="product-grid">{products.map((p, i) => <ProductCard key={p.id} name={p.name} category={p.category} visualIndex={(i % 5) + 1} productId={p.id} contents={p.contents} price={p.price} />)}</div></section>

      <section className="luxury-closing"><img src="/images/gv1.png" alt="VOIÉLA research material editorial presentation" /><div className="luxury-closing-copy"><div className="eyebrow">A more considered approach</div><h2>Science.<br/><em>Presented beautifully.</em></h2><a className="button button-light" href="/shop">Shop all</a></div></section>

      <section className="final-notice wrap"><strong>RESEARCH-USE-ONLY NOTICE</strong><p>All products are sold strictly for laboratory research use only. Not for human or veterinary consumption or administration. No dosing, administration, or personal-use guidance is provided.</p></section>
    </main>

    <footer className="footer"><div className="wrap footer-grid"><div><div className="brand">VOIÉLA</div><p>Research materials, presented clearly.</p></div><div className="footer-links"><a href="/shop">Shop</a><a href="/faq">FAQ</a><a href="/policies">Policies</a><a href="/checkout">Cart</a></div><div className="footer-note">RESEARCH USE ONLY.<br/>NOT FOR HUMAN OR VETERINARY USE.<br/><br/>© 2026 VOIÉLA</div></div></footer>
  </>
}
