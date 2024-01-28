
import styles from './App.module.css'
import About from './component/About/About'
import About1 from './component/About/About1'
import { Contact } from './component/Contact/Contact'
import Education from './component/Education/Education'
import { Experience } from './component/Experience/Experience'
import { Hero } from './component/Hero/Hero'
import { Navbar } from './component/Navbar/Navbar'
import { Projects } from './component/Projects/Projects'
import { Skill } from './component/Skill/Skill'

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About1 />
        <Experience />
        <Education />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
