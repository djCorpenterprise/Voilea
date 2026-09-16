'use client'

import { useState } from 'react'

export default function Checkout() {
  const [confirmed, setConfirmed] = useState(false)

  return <>
    <header className="site-header wrap"><a className="brand" href="/">VOIÉLA</a><nav className="links" aria-label="Primary navigation"><a href="/shop">Shop</a><a href="/faq">FAQ</a><a href="/policies">Policies</a><a href="/checkout">Cart</a></nav></header>
    <main className="wrap page">
      <div className="eyebrow">Checkout</div>
      <h1 className="page-title">Your research<br/><em>order.</em></h1>
      <div className="checkout-box">
        <h2>Checkout is being prepared.</h2>
        <p>VOIÉLA is completing its payment and order-processing setup. No payment is collected on this page.</p>
        <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', margin: '24px 0', fontSize: '12px', lineHeight: 1.6 }}>
          <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} style={{ marginTop: '3px' }} />
          <span>I confirm that I am purchasing these materials strictly for research use only and understand that they are not for human or veterinary use.</span>
        </label>
        <button className="button" type="button" disabled={!confirmed}>Continue to checkout</button>
        <a className="text-link" href="/shop" style={{ display: 'block', marginTop: '18px' }}>Return to shop <span>→</span></a>
      </div>
    </main>
    <footer className="footer"><div className="wrap"><div className="brand">VOIÉLA</div><p>Research materials, presented clearly.</p></div></footer>
  </>
}
