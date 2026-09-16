'use client'

import { useState } from 'react'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'

export default function Checkout() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <>
      <SiteHeader />
      <main className="wrap page checkout-page">
        <div className="eyebrow">Cart & checkout</div>
        <h1 className="page-title">Your order,<br /><em>beautifully simple.</em></h1>
        <div className="checkout-layout">
          <section className="checkout-box">
            <div className="checkout-number">01</div>
            <h2>Checkout is being prepared.</h2>
            <p>The storefront is ready for the final cart, payment, shipping, and order-processing connection. No payment is collected on this page.</p>
            <label className="checkout-confirm">
              <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
              <span>I confirm that I am purchasing these materials strictly for research use and understand that they are not for human or veterinary use.</span>
            </label>
            <button className="button" type="button" disabled={!confirmed}>Continue to checkout</button>
            <a className="text-link checkout-return" href="/shop">Return to inventory <span>→</span></a>
          </section>
          <aside className="checkout-aside">
            <div className="eyebrow">Next steps</div>
            <div className="checkout-step"><strong>01</strong><span>Cart connection</span></div>
            <div className="checkout-step"><strong>02</strong><span>Approved payment provider</span></div>
            <div className="checkout-step"><strong>03</strong><span>Shipping & order confirmation</span></div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
