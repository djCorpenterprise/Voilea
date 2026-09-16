import './globals.css'
import './voiela-overrides.css'
import ReferralCapture from '@/components/ReferralCapture'
import AccessGate from '@/components/AccessGate'

export const metadata = {
  title: 'VOIÉLA — Inventory',
  description: 'VOIÉLA — a considered inventory with clear specifications and documentation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ReferralCapture /><AccessGate />{children}</body></html>
}
