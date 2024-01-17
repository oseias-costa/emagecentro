import BeforeEAfter from './components/beforeeafter/BeforeEAfter'
import Benefits from './components/benefits/Benefits'
import Header from './components/header/Header'
import Headline from './components/headline/Headline'
import Testimonials from './components/testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Header />
      <Headline />
      <Testimonials />
      <BeforeEAfter />
      <Benefits />
    </main>
  )
}
