import { getHeroData } from '@/sanity/lib/data'
import { FixedNavbar } from './components/FixedNavbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ContactForm from './components/ContactForm'

export default async function Home() {
  const heroData = await getHeroData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <FixedNavbar />
        <HeroSection data={heroData} />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
