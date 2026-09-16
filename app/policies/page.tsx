import { SiteFooter, SiteHeader } from '@/components/SiteChrome'

export default function Policies() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page policies-page">
        <div className="eyebrow">Store policies</div>
        <h1 className="page-title">Policies &<br /><em>standards.</em></h1>
        <p className="page-intro">The important details behind the VOIÉLA store experience and the permitted context for the inventory.</p>
        <div className="policy-grid">
          <section><h2>Product standards</h2><p>All VOIÉLA products are provided as laboratory research materials. They are not offered for human or veterinary use, consumption, administration, diagnosis, treatment, prevention, or mitigation of disease.</p></section>
          <section><h2>Purchaser responsibility</h2><p>Customers are responsible for understanding applicable laws, regulations, institutional requirements, and the permitted use of any material they purchase.</p></section>
          <section><h2>Product information</h2><p>Product information is provided for research identification and documentation. VOIÉLA does not provide personal-use protocols or dosing guidance.</p></section>
          <section><h2>Checkout & payment</h2><p>Payment processing will be activated only after the selected provider's rules and requirements have been reviewed for this business and product category.</p></section>
          <section><h2>Shipping</h2><p>Shipping terms, processing times, service areas, and return exclusions will be published here before checkout is activated.</p></section>
          <section><h2>Updates</h2><p>Store policies may be updated as the VOIÉLA storefront and fulfillment operations are finalized. The current version shown on this page applies to the live site.</p></section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
