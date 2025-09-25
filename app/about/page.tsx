import { getAboutData } from '@/sanity/lib/data'
import AboutSection from '@/app/components/AboutSection'

export default async function AboutPage() {
  const aboutData = await getAboutData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <AboutSection data={aboutData} />
      </div>
    </main>
  )
}
