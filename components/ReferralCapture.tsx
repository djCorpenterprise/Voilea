'use client'

import { useEffect } from 'react'

const REFERRAL_KEY = 'voiela_ref'

export default function ReferralCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')?.trim()
    if (!ref || ref.length > 64) return
    window.localStorage.setItem(REFERRAL_KEY, ref)
  }, [])

  return null
}
