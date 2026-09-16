import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page not-found-page">
        <div className="eyebrow">404</div>
        <h1 className="page-title">This page<br /><em>doesn't exist.</em></h1>
        <p className="page-intro">The page you were looking for may have moved. The VOIÉLA inventory is still right where it should be.</p>
        <Link className="button" href="/shop">Explore inventory</Link>
      </main>
      <SiteFooter />
    </>
  )
}
