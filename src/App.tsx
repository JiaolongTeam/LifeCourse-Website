import LandingPage from './pages/LandingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import './styles/landing.css'
import './styles/privacy.css'

export default function App() {
  if (window.location.pathname === '/terms') {
    return <TermsPage />
  }

  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicyPage />
  }

  return <LandingPage />
}
