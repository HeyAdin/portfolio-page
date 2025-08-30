import './App.css'
import { HeroText } from './components/HeroText'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'

const cn = (...classes) => classes.join(" ");

function App() {

  return (
    <div className={cn('text-white bg-[#151312] pt-3 h-screen 2xl:h-screen overflow-hidden relative',
      'bg-[radial-gradient(var(--color-neutral-800)_0.5px,transparent_1px)]',
      '[background-size:10px_10px]'
    )}>
      <Navbar />
      <div className={cn('lg:flex xl:justify-center xl:gap-20 lg:mt-10 2xl:gap-40 2xl:pt-15 bg-gradient-to-t from-[#333130] to-[#151312] mask-b-from-50%',
      'bg-[radial-gradient(1px,transparent_1px)]',
      '[background-size:10px_10px]')}>
        <Profile />
        <HeroText />
      </div>
    </div>

  )
}

export default App
