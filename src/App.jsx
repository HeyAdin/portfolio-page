import './App.css'
import { Navbar } from './components/Navbar'
import { Dashboard } from './pages/Dashboard';


const cn = (...classes) => classes.join(" ");

function App() {

  return (
    <div className={cn('text-white bg-[#151312] pt-3 md:h-screen 2xl:h-screen md:overflow-hidden relative',
      'bg-[radial-gradient(var(--color-neutral-700)_0.5px,transparent_1px)]',
      '[background-size:10px_10px]'
    )}>
      <Navbar />
      <Dashboard />
    </div>

  )
}

export default App
