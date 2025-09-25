import { getHeroData } from '@/sanity/lib/data'
import ContactForm from './components/ContactForm'
import Hero from './components/hero'

export default async function Home() {
  const heroData = await getHeroData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <Hero data={heroData} />
        <ContactForm />
      </div>
    </main>
  )
}
