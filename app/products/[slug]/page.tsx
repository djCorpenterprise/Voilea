import ProductPurchaseOptions from '@/components/ProductPurchaseOptions'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { products } from '@/lib/products'

const imageByProduct: Record<string, string> = {
  'RT-3-10': '/images/glp3-10.png',
  'RT-3-20': '/images/glp3-10.png',
  'TRZ-2-10': '/images/trz2-10.png',
  'TRZ-2-20': '/images/trz2-10.png',
  'NAD-1-500': '/images/nad1.png',
  'GHK-1-50': '/images/ghk1.png',
  'GV-1': '/images/gv1.png',
}

const displayCodeByProduct: Record<string, string> = {
  'RT-3-10': 'GLP-3', 'RT-3-20': 'GLP-3',
  'TRZ-2-10': 'TZ-2', 'TRZ-2-20': 'TZ-2',
  'NAD-1-500': 'NAD-1', 'GHK-1-50': 'GHK-1', 'GV-1': 'GV-1',
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const baseProduct = products.find((product) => product.id === slug || product.variants?.some((variant) => variant.id === slug))
  const product = baseProduct ?? { id: slug, name: 'Product', category: 'Research Material' as const, contents: 'Specifications unavailable', price: 0, description: 'Product information unavailable.' }
  const selectedVariant = product.variants?.find((variant) => variant.id === slug)
  const selectedId = selectedVariant?.id ?? product.id
  const selectedContents = selectedVariant?.contents ?? product.contents
  const selectedPrice = selectedVariant?.price ?? product.price
  const image = imageByProduct[selectedId]
  const displayCode = displayCodeByProduct[selectedId] ?? selectedId
  const showName = displayCode !== 'GLP-3' && displayCode !== 'TZ-2'

  return (
    <>
      <SiteHeader />
      <main className="wrap product-page">
        <div className="product-detail">
          <div className="product-visual product-photo detail-visual">
            {image ? <img src={image} alt={`${displayCode} product presentation`} /> : <div className="vial-art" aria-hidden="true"><div className="vial-cap" /><div className="vial-body"><div className="vial-label"><span>VOIÉLA</span><strong>{displayCode}</strong></div></div></div>}
          </div>
          <div className="product-info">
            <div className="eyebrow">Inventory</div>
            <h1>{displayCode}</h1>
            {showName && <p className="product-name">{product.name}</p>}
            <p className="lead">{product.description}</p>
            <div className="spec-list">
              <div><span>Identifier</span><strong>{selectedId}</strong></div>
              <div><span>Contents</span><strong>{selectedContents}</strong></div>
              <div><span>Price</span><strong>${selectedPrice}</strong></div>
            </div>
            <div className="product-rule" />
            <ProductPurchaseOptions productId={selectedId} displayCode={displayCode} variants={product.variants} contents={selectedContents} price={selectedPrice} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
