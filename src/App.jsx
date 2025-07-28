import './App.css'
import { HeroText } from './components/HeroText'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'

function App() {

  return (
    <div className='text-white  bg-[#151312] pt-3 h-[740px] '>
      <Navbar />
      <div className='lg:flex lg:justify-center lg:gap-25 lg:mt-18 max-h-[740px] overflow-hidden bg-[#151312]'>
        <Profile />
        <HeroText />
      </div>
    </div>
  )
}

export default App
