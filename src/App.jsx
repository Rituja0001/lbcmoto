import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#181818] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] relative overflow-x-hidden">
      {/* Global Transparent Sticky Navbar */}
      <Navbar />

      {/* Main Home Page */}
      <HomePage />
    </div>
  )
}
