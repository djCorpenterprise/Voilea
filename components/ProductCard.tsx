'use client'

import { useMemo, useState } from 'react'
import type { Variant } from '@/lib/products'

type ProductCardProps = { name: string; category: string; visualIndex: number; productId: string; contents: string; price: number; variants?: Variant[] }

const productImages: Record<string, string> = {
  'RT-3-10': '/images/glp369.png',
  'RT-3-20': '/images/glp369.png',
  'TRZ-2-10': '/images/tz269.png',
  'TRZ-2-20': '/images/tz269.png',
  'NAD-1-500': '/images/nad169.png',
  'GHK-1-50': '/images/ghk169.png',
  'GV-1': '/images/gv169.png',
}

const displayCodeByProduct: Record<string, string> = {
  'RT-3-10': 'GLP-3',
  'RT-3-20': 'GLP-3',
  'TRZ-2-10': 'TZ-2',
  'TRZ-2-20': 'TZ-2',
  'NAD-1-500': 'NAD-1',
  'GHK-1-50': 'GHK-1',
  'GV-1': 'GV-1',
}

export default function ProductCard({ name, category, productId, contents, price, variants }: ProductCardProps) {
  const [selectedId, setSelectedId] = useState(productId)
  const hasVariants = Boolean(variants && variants.length > 1)
  const selected = useMemo(() => variants?.find((variant) => variant.id === selectedId) ?? { id: productId, contents, price }, [variants, selectedId, productId, contents, price])
  const image = productImages[selected.id] ?? productImages[productId]
  const displayCode = displayCodeByProduct[selected.id] ?? displayCodeByProduct[productId] ?? selected.id
  const hideChemicalName = displayCode === 'GLP-3' || displayCode === 'TZ-2'

  return (
    <article className="product-card">
      <a href={`/products/${selected.id}`} className="product-visual editorial-visual" aria-label={`View ${displayCode} inventory item`}>
        <img src={image} alt={`${displayCode} product presentation`} className="product-editorial-image" />
      </a>
      <div className="product-meta">
        <div className="product-copy">
          <h3>{displayCode}</h3>
          {!hideChemicalName && <p className="product-name-card">{name}</p>}
          {hasVariants ? (
            <label className="size-select-label">
              <span className="sr-only">Select vial size for {displayCode}</span>
              <select value={selected.id} onChange={(event) => setSelectedId(event.target.value)} onClick={(event) => event.stopPropagation()} aria-label={`Select vial size for ${displayCode}`}>
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
