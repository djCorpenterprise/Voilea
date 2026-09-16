import ProductCard from '@/components/ProductCard'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { products } from '@/lib/products'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="luxury-hero">
          <img src="/images/hero69.png" alt="VOIÉLA editorial product presentation" />
          <div className="luxury-hero-overlay">
            <div className="eyebrow">A considered approach</div>
            <h1>Research,<br /><em>beautifully</em><br />considered.</h1>
            <p>A focused inventory presented with clarity, intention, and a refined point of view.</p>
            <a className="button button-light" href="/shop">Explore inventory <span>→</span></a>
          </div>
          <div className="luxury-hero-side" aria-hidden="true">VOIÉLA<span>CLARITY<br />QUALITY<br />PURPOSE</span></div>
        </section>

        <section className="standards wrap" aria-label="VOIÉLA standards">
          <div><strong>01</strong><div><span>Clear specifications</span><small>Product details kept simple and easy to read</small></div></div>
          <div><strong>02</strong><div><span>Focused inventory</span><small>A considered collection without unnecessary noise</small></div></div>
          <div><strong>03</strong><div><span>Batch documentation</span><small>Product information organized for straightforward review</small></div></div>
        </section>

        <section className="luxury-feature wrap">
          <div className="luxury-feature-image"><img src="/images/nad169.png" alt="VOIÉLA NAD-1 product presentation" /></div>
          <div className="luxury-feature-copy">
            <div className="eyebrow">The VOIÉLA approach</div>
            <h2>Precision<br /><em>in every detail.</em></h2>
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
          <img src="/images/hero69.png" alt="VOIÉLA sculptural stone editorial setting" />
          <div className="atmosphere-copy"><div className="eyebrow">Science × aesthetics</div><h2>Where science<br /><em>meets beauty.</em></h2></div>
        </section>

        <section className="luxury-feature luxury-feature-reverse wrap">
          <div className="luxury-feature-image"><img src="/images/ghk169.png" alt="VOIÉLA GHK-1 product presentation" /></div>
          <div className="luxury-feature-copy">
            <div className="eyebrow">VOIÉLA</div>
            <h2>Considered<br /><em>from every angle.</em></h2>
            <p>Soft textures, sculptural forms, and a restrained visual language bring the inventory together.</p>
            <a className="text-link" href="/shop">Explore the inventory <span>↗</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
