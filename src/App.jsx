import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Verification from './pages/Verification';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Certificate Verification Route */}
        <Route path="/verify/:verificationId" element={<Verification />} />
        
        {/* Verification Route without an ID parameter */}
        <Route path="/verify" element={<Verification />} />
        
        {/* All other routes render a standard 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
