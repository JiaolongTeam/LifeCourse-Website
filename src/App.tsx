import LandingPage from './pages/LandingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import ActivitiesPage from './pages/ActivitiesPage'
import ActivityXiaohongshuMembershipPage from './pages/ActivityXiaohongshuMembershipPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import './styles/landing.css'
import './styles/privacy.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/activities/xiaohongshu-membership" element={<ActivityXiaohongshuMembershipPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
