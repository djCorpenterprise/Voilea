'use client'

import { useMemo, useState } from 'react'

type Variant = { id: string; contents: string; price: number }
type ProductCardProps = { name: string; category: string; visualIndex: number; productId: string; contents: string; price: number; variants?: Variant[] }

const productImages: Record<string, string> = {
  'RT-3-10': '/images/rt3-10.png',
  'TRZ-2-10': '/images/trz2-10.png',
  'NAD-1-500': '/images/nad1.png',
  'GHK-1-50': '/images/ghk1.png',
  'GV-1': '/images/gv1.png',
}

export default function ProductCard({ name, category, productId, contents, price, variants }: ProductCardProps) {
  const [selectedId, setSelectedId] = useState(productId)
  const hasVariants = Boolean(variants && variants.length > 1)
  const selected = useMemo(() => variants?.find((variant) => variant.id === selectedId) ?? { id: productId, contents, price }, [variants, selectedId, productId, contents, price])
  const image = productImages[selected.id] ?? productImages[productId]

  return (
    <article className="product-card">
      <a href={`/products/${selected.id}`} className="product-visual editorial-visual" aria-label={`View ${name}`}>
        <img src={image} alt={`${name} research material`} className="product-editorial-image" />
        <small className="visual-ruo">RUO</small>
      </a>
      <div className="product-meta">
        <div className="product-copy">
          <h3>{name}</h3>
          <p>{category}</p>
          {hasVariants ? (
            <label className="size-select-label">
              <span className="sr-only">Select vial size for {name}</span>
              <select value={selected.id} onChange={(event) => setSelectedId(event.target.value)} onClick={(event) => event.stopPropagation()} aria-label={`Select vial size for ${name}`}>
                {variants!.map((variant) => <option value={variant.id} key={variant.id}>{variant.contents}</option>)}
              </select>
            </label>
          ) : <p className="product-contents">{selected.contents}</p>}
        </div>
        <strong>${selected.price}</strong>
      </div>
      {hasVariants && <a className="product-card-link" href={`/products/${selected.id}`}>View {selected.contents} <span>↗</span></a>}
    </article>
  )
}
