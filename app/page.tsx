import BeforeEAfter from './components/beforeeafter/BeforeEAfter'
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
    </main>
  )
}
