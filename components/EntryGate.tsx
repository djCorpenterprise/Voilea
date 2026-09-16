'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'voiela-entry-confirmed'

export default function EntryGate() {
  const [open, setOpen] = useState(false)
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const [researchConfirmed, setResearchConfirmed] = useState(false)

  useEffect(() => {
    setOpen(window.localStorage.getItem(STORAGE_KEY) !== 'true')
  }, [])

  if (!open) return null

  const canEnter = ageConfirmed && researchConfirmed

  const enterSite = () => {
    if (!canEnter) return
    window.localStorage.setItem(STORAGE_KEY, 'true')
    setOpen(false)
  }

  return (
    <div className="entry-gate" role="dialog" aria-modal="true" aria-labelledby="entry-gate-title">
      <div className="entry-gate-panel">
        <div className="entry-gate-brand">VOIÉLA</div>
        <div className="eyebrow">Before you enter</div>
        <h2 id="entry-gate-title">Research,<br/><em>presented beautifully.</em></h2>
        <p className="entry-gate-copy">This website is intended for adults and for laboratory research purposes only.</p>

        <label className="entry-check">
          <input type="checkbox" checked={ageConfirmed} onChange={(event) => setAgeConfirmed(event.target.checked)} />
          <span>I confirm that I am 21 years of age or older.</span>
        </label>
        <label className="entry-check">
          <input type="checkbox" checked={researchConfirmed} onChange={(event) => setResearchConfirmed(event.target.checked)} />
          <span>I confirm that I am accessing this website for research purposes only.</span>
        </label>

        <button className="button entry-gate-button" type="button" disabled={!canEnter} onClick={enterSite}>Enter VOIÉLA</button>
      </div>
    </div>
  )
}
