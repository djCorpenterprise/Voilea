'use client'

import { useMemo, useState } from 'react'
import type { Variant } from '@/lib/products'

type Props = {
  productId: string
  displayCode: string
  variants?: Variant[]
  contents: string
  price: number
}

export default function ProductPurchaseOptions({ productId, displayCode, variants, contents, price }: Props) {
  const [selectedId, setSelectedId] = useState(productId)
  const [quantity, setQuantity] = useState(1)
  const selected = useMemo(
    () => variants?.find((variant) => variant.id === selectedId) ?? { id: productId, contents, price },
    [variants, selectedId, productId, contents, price]
  )

  return (
    <div className="purchase-options">
      {variants && variants.length > 1 && (
        <label className="purchase-field">
          <span>Vial size</span>
          <select value={selected.id} onChange={(event) => setSelectedId(event.target.value)} aria-label={`Select vial size for ${displayCode}`}>
            {variants.map((variant) => <option value={variant.id} key={variant.id}>{variant.contents} — ${variant.price}</option>)}
          </select>
        </label>
      )}
      <label className="purchase-field">
        <span>Quantity</span>
        <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} aria-label={`Select quantity for ${displayCode}`}>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => <option value={value} key={value}>{value}</option>)}
        </select>
      </label>
      <div className="purchase-total">
        <span>Total</span>
        <strong>${selected.price * quantity}</strong>
      </div>
      <button className="button" type="button" disabled aria-disabled="true">Add to cart — Coming soon</button>
    </div>
  )
}
