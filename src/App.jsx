import { Route, Routes } from 'react-router-dom'
import backgroundImage from './assets/background.jpg'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import TrainingPage from './pages/TrainingPage'
import PathwayPage from './pages/PathwayPage'
import AboutPage from './pages/AboutPage'
import JoinPage from './pages/JoinPage'

function App() {
  return <div className="site-shell" style={{ backgroundImage: `linear-gradient(rgba(6, 6, 6, 0.72), rgba(16, 6, 6, 0.86)), url(${backgroundImage})` }}><Header /><main><Routes><Route path="/" element={<HomePage />} /><Route path="/training" element={<TrainingPage />} /><Route path="/pathway" element={<PathwayPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/join" element={<JoinPage />} /></Routes></main></div>
}

export default App
