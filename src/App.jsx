import './App.css'
import CompanyLogos from './components/CompanyLogos'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Home from './components/Home'
import Monitor from './components/Monitor'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import Pricing from './components/Pricing'
import Purpose from './components/Purpose'
import Scheduele from './components/Scheduele'
import Services from './components/Services'
import Testemonials from './components/Testemonials'

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
        <Navbar/>  
        <Home/>
        <CompanyLogos/>
        <Purpose/>
        <FeaturesSection/>
        <Scheduele/>
        <Monitor/>
        <Pricing/>
        <Services/>
        <Testemonials/>
        <NewsLetter/>
        <Footer/>
      </div>
    </main>
  )
}

export default App
