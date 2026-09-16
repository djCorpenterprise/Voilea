import './globals.css'
import './voiela-overrides.css'
import ReferralCapture from '@/components/ReferralCapture'
import AccessGate from '@/components/AccessGate'

export const metadata = {
  title: 'VOIÉLA — Research Materials',
  description: 'VOIÉLA research materials and laboratory supplies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ReferralCapture /><AccessGate />{children}</body></html>
}
