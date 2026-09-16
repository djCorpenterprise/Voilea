import ProductCard from '@/components/ProductCard'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { products } from '@/lib/products'

const retatrutide = products.find((p) => p.id === 'RT-3-10')!
const tirzepatide = products.find((p) => p.id === 'TRZ-2-10')!
const displayProducts = products.filter((p) => p.id !== 'RT-3-10' && p.id !== 'TRZ-2-10')

export default function Shop() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page inventory-page">
        <div className="eyebrow">Inventory</div>
        <h1 className="page-title">The collection.</h1>
        <p className="page-intro">A focused selection with clear identifiers, straightforward specifications, and a restrained presentation.</p>
        <div className="inventory-rule" />
        <div className="product-grid shop-grid">
          <ProductCard name="GLP-3" category="Research Material" visualIndex={1} productId={retatrutide.id} contents={retatrutide.contents} price={retatrutide.price} variants={retatrutide.variants} />
          <ProductCard name="TZ-2" category="Research Material" visualIndex={2} productId={tirzepatide.id} contents={tirzepatide.contents} price={tirzepatide.price} variants={tirzepatide.variants} />
          {displayProducts.map((p, i) => <ProductCard key={p.id} name={p.name} category={p.category} visualIndex={(i % 5) + 3} productId={p.id} contents={p.contents} price={p.price} variants={p.variants} />)}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
