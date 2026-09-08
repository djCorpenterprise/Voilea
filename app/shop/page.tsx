import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

const retatrutide = products.filter((p) => p.id.startsWith('RT-3'))
const displayProducts = products.filter((p) => !p.id.startsWith('RT-3'))

export default function Shop() {
  return <>
    <div className="topbar">RESEARCH USE ONLY <span>•</span> NOT FOR HUMAN OR VETERINARY USE</div>
    <header className="site-header wrap"><a className="brand" href="/">VOIÉLA</a><nav className="links"><a href="/shop">Shop</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/checkout">Cart</a></nav></header>
    <main className="wrap page">
      <div className="eyebrow">The collection</div>
      <h1 className="page-title">Research materials</h1>
      <p className="page-intro">A focused collection of laboratory research materials. Each listing is presented with neutral specifications and is intended strictly for research use only.</p>
      <div className="product-grid shop-grid">
        <ProductCard name="Retatrutide" category="Research Material" visualIndex={1} productId={retatrutide[0].id} contents={retatrutide[0].contents} price={retatrutide[0].price} variants={retatrutide.map(({ id, contents, price }) => ({ id, contents, price }))} />
        {displayProducts.map((p, i) => <ProductCard key={p.id} name={p.name} category={p.category} visualIndex={(i % 5) + 2} productId={p.id} contents={p.contents} price={p.price} />)}
      </div>
      <div className="final-notice"><strong>RESEARCH-USE-ONLY NOTICE</strong><p>Products are not for human or veterinary use and are not sold as food, drugs, supplements, treatments, or medical devices. No dosing, administration, or personal-use guidance is provided.</p></div>
    </main>
    <footer className="footer"><div className="wrap"><div className="brand">VOIÉLA</div><p>RESEARCH USE ONLY. NOT FOR HUMAN OR VETERINARY USE.</p></div></footer>
  </>
}
