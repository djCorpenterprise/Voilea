import { SiteFooter, SiteHeader } from '@/components/SiteChrome'

const faqs = [
  ['What are VOIÉLA products?', 'VOIÉLA offers a focused inventory with clearly identified product codes, contents, pricing, and available documentation.'],
  ['Do you provide dosing instructions?', 'No. Product listings are limited to product specifications and research-oriented documentation.'],
  ['Can I use these products on myself or an animal?', 'No. These materials are not offered for human or veterinary use.'],
  ['Where can I find product information?', 'Each product page provides the available identifiers, contents, specifications, and product documentation.'],
  ['Do you offer returns?', 'Return eligibility and any exclusions will be stated in the final store policy before checkout is activated.'],
  ['How is checkout handled?', 'Checkout is currently being prepared. Payment processing will be connected after the selected provider requirements have been reviewed for this business and product category.'],
]

export default function FAQ() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page faq-page">
        <div className="eyebrow">Information</div>
        <h1 className="page-title">Frequently asked<br /><em>questions.</em></h1>
        <p className="page-intro">Straightforward answers about the VOIÉLA inventory, product information, and store experience.</p>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
