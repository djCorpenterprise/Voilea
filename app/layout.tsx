import './globals.css'
import './voiela-overrides.css'
import ReferralCapture from '@/components/ReferralCapture'

export const metadata = {
  title: 'VOIÉLA — Research Materials',
  description: 'VOIÉLA research-use-only materials and laboratory supplies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ReferralCapture />{children}</body></html>
}
