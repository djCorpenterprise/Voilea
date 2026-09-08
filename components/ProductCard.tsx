'use client'

import { useState } from 'react'

type ProductCardProps = {
  name: string
  category: string
  visualIndex: number
  productId: string
  contents: string
  price: number
}

const imageByProduct: Record<string, string> = {
  'RT-3-10': '/images/rt3-10.webp',
  'TRZ-2-10': '/images/trz2-10.webp',
  'NAD-1-500': '/images/nad1.webp',
  'GHK-1-50': '/images/ghk1.webp',
  'GV-1': '/images/gv1.webp',
}

export default function ProductCard({ name, category, productId, contents, price }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const image = imageByProduct[productId]

  return (
    <div className="product-card">
      <a href={`/products/${productId}`} className="product-visual product-photo" aria-label={`View ${name}`}>
        {image && !imageError ? (
          <img src={image} alt={`${name} ${contents} research material`} onError={() => setImageError(true)} />
        ) : (
          <div className="vial-art" aria-hidden="true">
            <div className="vial-cap" />
            <div className="vial-body"><div className="vial-label"><span>VOIÉLA</span><strong>{productId.split('-').slice(0, 2).join('-')}</strong><small>RESEARCH USE ONLY</small></div></div>
          </div>
        )}
        <small className="visual-ruo">RUO</small>
      </a>
      <div className="product-meta">
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
          <p className="product-contents">{contents}</p>
        </div>
        <strong>${price}</strong>
      </div>
    </div>
  )
}
