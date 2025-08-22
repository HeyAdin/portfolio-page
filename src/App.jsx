import './App.css'
import { HeroText } from './components/HeroText'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'

function App() {

  return (
    <div className='text-white bg-[#151312] pt-3 h-screen 2xl:h-screen overflow-hidden relative'>
      <Navbar />
      <div className='lg:flex xl:justify-center xl:gap-20 lg:mt-10 2xl:gap-40 2xl:pt-15 bg-gradient-to-t from-[#333130] to-[#151312] mask-b-from-50%'>
        <Profile />
        <HeroText />
      </div>
    </div>
  )
}

export default App
