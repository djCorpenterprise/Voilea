'use client'

import { useMemo, useState } from 'react'

type Variant = {
  id: string
  contents: string
  price: number
}

type ProductCardProps = {
  name: string
  category: string
  visualIndex: number
  productId: string
  contents: string
  price: number
  variants?: Variant[]
}

export default function ProductCard({
  name,
  category,
  visualIndex,
  productId,
  contents,
  price,
  variants,
}: ProductCardProps) {
  const [selectedId, setSelectedId] = useState(productId)
  const selected = useMemo(
    () => variants?.find((variant) => variant.id === selectedId) ?? { id: productId, contents, price },
    [variants, selectedId, productId, contents, price],
  )

  return (
    <div className="product-card">
      <a href={`/products/${selected.id}`} className={`product-visual visual-${visualIndex}`} aria-label={`View ${name}`}>
        <div className="vial-art" aria-hidden="true">
          <div className="vial-cap" />
          <div className="vial-body">
            <div className="vial-label">
              <span>VOIÉLA</span>
              <strong>{productId.startsWith('RT-3') ? 'RT-3' : name}</strong>
              <small>RESEARCH USE ONLY</small>
            </div>
          </div>
        </div>
        <small className="visual-ruo">RUO</small>
      </a>
      <div className="product-meta">
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
          {variants ? (
            <label className="size-select-label">
              <span className="sr-only">Select vial size for {name}</span>
              <select
                value={selected.id}
                onChange={(event) => setSelectedId(event.target.value)}
                onClick={(event) => event.stopPropagation()}
                aria-label={`Select vial size for ${name}`}
              >
                {variants.map((variant) => (
                  <option value={variant.id} key={variant.id}>{variant.contents}</option>
                ))}
              </select>
            </label>
          ) : (
            <p className="product-contents">{selected.contents}</p>
          )}
        </div>
        <strong>${selected.price}</strong>
      </div>
      {variants && (
        <a className="product-card-link" href={`/products/${selected.id}`}>
          View {selected.contents} <span>↗</span>
        </a>
      )}
    </div>
  )
}
