import './App.css'
import { HeroText } from './components/HeroText'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'

const cn = (...classes) => classes.join(" ");

function App() {

  return (
    <div className={cn('text-white bg-[#151312] pt-3 md:h-screen 2xl:h-screen md:overflow-hidden relative',
      'bg-[radial-gradient(var(--color-neutral-700)_0.5px,transparent_1px)]',
      '[background-size:10px_10px]'
    )}>
      <Navbar />
      <div className={cn('flex flex-col items-center justify-center md:items-start md:flex md:flex-row md:justify-center lg:pt-10 md:gap-15 lg:gap-20 2xl:gap-40 2xl:pt-15 pt-10 bg-gradient-to-t from-[#333130] to-[#151312] md:mask-b-from-50%  mask-b-from-90%',
      'bg-[radial-gradient(1px,transparent_1px)]',
      '[background-size:10px_10px]')}>
        <Profile />
        <HeroText />
      </div>
    </div>

  )
}

export default App
