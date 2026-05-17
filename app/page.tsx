import { getHeroData, getFeaturedClientWorkData, getFeaturedProjectsData, getAboutData } from '@/sanity/lib/data'
import ContactForm from './components/ContactForm'
import Hero from './components/hero'
import HomepageAbout from './components/HomepageAbout'
import HomepageFeaturedClientWork from './components/HomepageFeaturedClientWork'
import HomepageFeaturedProjects from './components/HomepageFeaturedProjects'

export default async function Home() {
  const [heroData, featuredClientWork, featuredProjects, aboutData] = await Promise.all([
    getHeroData(),
    getFeaturedClientWorkData(),
    getFeaturedProjectsData(),
    getAboutData(),
  ])

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <Hero data={heroData} />
        <HomepageAbout data={aboutData} />
        <HomepageFeaturedClientWork data={featuredClientWork} />
        <HomepageFeaturedProjects data={featuredProjects} />
        <ContactForm />
      </div>
    </main>
  )
}
