import './App.css'
import { Navbar } from './components/Navbar'
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Project } from './pages/Project';
import { SkillsSection } from './pages/SkillsSection';
import { About } from './pages/About';
import { ContactMe } from './pages/ContactMe';
import { EmptyPage } from './pages/EmptyPage';

const cn = (...classes) => classes.join(" ");

function App() {

  return (
    <div className={cn('text-white bg-[#151312] pt-3 md:h-screen 2xl:h-screen md:overflow-hidden relative',
      'bg-[radial-gradient(var(--color-neutral-700)_0.5px,transparent_1px)]',
      '[background-size:10px_10px]'
    )}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Dashboard/>} path='/home'/>
        <Route element={<Project/>} path='/projects'/>
        <Route element={<SkillsSection/>} path='/skills'/>
        <Route element={<About/>} path='/about-me'/>
        <Route element={<ContactMe/>} path='/contact-me'/>
        <Route element={<EmptyPage />} path='*' />
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
