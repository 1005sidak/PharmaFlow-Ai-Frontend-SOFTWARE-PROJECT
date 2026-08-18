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
        <Route path="medicines" element={<PlaceholderPage title="Medicines" />} />
        <Route path="inventory" element={<PlaceholderPage title="Inventory" />} />
        <Route path="sales" element={<PlaceholderPage title="Sales & Billing" />} />
        <Route path="purchases" element={<PlaceholderPage title="Purchasing" />} />
        <Route path="alerts" element={<PlaceholderPage title="Alerts" />} />
        <Route path="analytics" element={<PlaceholderPage title="Analytics" />} />
        <Route path="expiry-risk" element={<PlaceholderPage title="Expiry Risk" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
      </Route>
    </Routes>
  )
}
