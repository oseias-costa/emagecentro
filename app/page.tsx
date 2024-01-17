import About from './components/about/About'
import BeforeEAfter from './components/beforeeafter/BeforeEAfter'
import Benefits from './components/benefits/Benefits'
import Goal from './components/goal/Goal'
import Header from './components/header/Header'
import Headline from './components/headline/Headline'
import Location from './components/location/Location'
import Testimonials from './components/testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Header />
      <Headline />
      <Testimonials />
      <BeforeEAfter />
      <Benefits />
      <About />
      <Goal />
      <Location />
    </main>
  )
}
