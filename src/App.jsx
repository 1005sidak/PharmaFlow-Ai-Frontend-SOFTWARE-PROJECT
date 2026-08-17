import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="inventory" element={<PlaceholderPage title="Inventory" />} />
        <Route path="medicines" element={<PlaceholderPage title="Medicines" />} />
        <Route path="prescriptions" element={<PlaceholderPage title="Prescriptions" />} />
        <Route path="ai-assistant" element={<PlaceholderPage title="AI Assistant" />} />
        <Route path="alerts" element={<PlaceholderPage title="Alerts" />} />
        <Route path="reports" element={<PlaceholderPage title="Reports" />} />
        <Route path="history" element={<PlaceholderPage title="History" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
      </Route>
    </Routes>
  )
}
