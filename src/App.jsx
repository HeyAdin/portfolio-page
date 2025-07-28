import './App.css'
import { HeroText } from './components/HeroText'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'

function App() {

  return (
    <div className='text-white  bg-[#151312] pt-3 h-dvh overflow-hidden'>
      <Navbar />
      <div className='flex justify-center gap-28 my-20'>
        <Profile />
        <HeroText />
      </div>
    </div>
  )
}

export default App
