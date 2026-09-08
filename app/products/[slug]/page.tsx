import { products } from '@/lib/products'

const imageByProduct: Record<string, string> = {
  'RT-3-10': '/images/rt3-10.png',
  'TRZ-2-10': '/images/trz2-10.png',
  'NAD-1-500': '/images/nad1.png',
  'GHK-1-50': '/images/ghk1.png',
  'GV-1': '/images/gv1.png',
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = products.find((product) => product.id === slug)
  const product = p ?? { id: slug, name: 'Research Material', category: 'Research Material' as const, contents: 'Specifications unavailable', price: 0, description: 'Product information unavailable.' }
  const image = imageByProduct[product.id]

  return <>
    <div className="topbar">RESEARCH USE ONLY <span>•</span> NOT FOR HUMAN OR VETERINARY USE</div>
    <header className="site-header wrap"><a className="brand" href="/">VOIÉLA</a><nav className="links"><a href="/shop">Shop</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/checkout">Cart</a></nav></header>
    <main className="wrap product-page">
      <div className="product-detail">
        <div className="product-visual product-photo detail-visual">
          {image ? <img src={image} alt={`${product.name} ${product.contents} research material`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div className="vial-art" aria-hidden="true"><div className="vial-cap"/><div className="vial-body"><div className="vial-label"><span>VOIÉLA</span><strong>{product.id}</strong><small>RESEARCH USE ONLY</small></div></div></div>}
          <small className="visual-ruo">RUO</small>
        </div>
        <div className="product-info">
          <div className="eyebrow">{product.category}</div>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <div className="spec-list"><div><span>Identifier</span><strong>{product.id}</strong></div><div><span>Contents</span><strong>{product.contents}</strong></div><div><span>Price</span><strong>${product.price}</strong></div></div>
          <div className="product-rule"/>
          <p className="ruo"><strong>RESEARCH USE ONLY</strong><br/>Not for human or veterinary use. No dosing, administration, consumption, or personal-use guidance is provided.</p>
          <button className="button" disabled>Purchase — Coming soon</button>
        </div>
      </div>
      <div className="final-notice"><strong>IMPORTANT</strong><p>This listing is for laboratory research purposes only. It is not food, a supplement, a treatment, or a medical product, and it is not intended for human or veterinary use.</p></div>
    </main>
  </>
}
