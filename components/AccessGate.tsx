'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'voiela-access-confirmed'

export default function AccessGate() {
  const [checkedAge, setCheckedAge] = useState(false)
  const [checkedResearch, setCheckedResearch] = useState(false)
  const [allowed, setAllowed] = useState<boolean | null>(null)

  useEffect(() => {
    setAllowed(window.localStorage.getItem(STORAGE_KEY) === 'true')
  }, [])

  function enterSite() {
    if (!checkedAge || !checkedResearch) return
    window.localStorage.setItem(STORAGE_KEY, 'true')
    setAllowed(true)
  }

  if (allowed !== false) return null

  return (
    <div className="access-gate" role="dialog" aria-modal="true" aria-labelledby="access-gate-title">
      <div className="access-gate-card">
        <div className="eyebrow">VOIÉLA</div>
        <h1 id="access-gate-title">Before you enter.</h1>
        <p className="access-gate-intro">This site contains research materials. Please confirm both statements below to continue.</p>
        <label className="access-gate-check">
          <input type="checkbox" checked={checkedAge} onChange={(event) => setCheckedAge(event.target.checked)} />
          <span>I confirm that I am 21 years of age or older.</span>
        </label>
        <label className="access-gate-check">
          <input type="checkbox" checked={checkedResearch} onChange={(event) => setCheckedResearch(event.target.checked)} />
          <span>I confirm that I am accessing this site for research purposes only.</span>
        </label>
        <button className="button access-gate-button" type="button" disabled={!checkedAge || !checkedResearch} onClick={enterSite}>Enter site</button>
      </div>
    </div>
  )
}
