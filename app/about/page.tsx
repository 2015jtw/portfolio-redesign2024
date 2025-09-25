import { getAboutData } from '@/sanity/lib/data'
import { GridBackgroundDemo } from '@/app/components/ui/gridBackground'
import AboutSection from '@/app/components/AboutSection'

export default async function AboutPage() {
  const aboutData = await getAboutData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <GridBackgroundDemo className="absolute top-0 left-0" />
      <div className="max-w-7xl w-full font-alegreya relative z-10">
        <AboutSection data={aboutData} />
      </div>
    </main>
  )
}
