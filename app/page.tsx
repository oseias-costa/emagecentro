import About from './components/about/About'
import BeforeEAfter from './components/beforeeafter/BeforeEAfter'
import Benefits from './components/benefits/Benefits'
import Footer from './components/footer/Footer'
import Whatsapp from './components/global/Whatsapp'
import Goal from './components/goal/Goal'
import Header from './components/header/Header'
import Headline from './components/headline/Headline'
import Location from './components/location/Location'
import Method from './components/method/Method'
import Phases from './components/phases/Phases'
import Results from './components/results/Results'
import Testimonials from './components/testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Whatsapp />
      <Header />
      <Headline />
      <Testimonials />
      <BeforeEAfter />
      <Method />
      <Benefits />
      <About />
      <Phases />
      <Results />
      <Location />
      <Footer />
    </main>
  )
}
