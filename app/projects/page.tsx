import { getProjectsData } from '@/sanity/lib/data'
import { FixedNavbar } from '@/app/components/FixedNavbar'
import Footer from '@/app/components/Footer'
import ProjectsSection from '@/app/components/ProjectsSection'

export default async function ProjectsPage() {
  const projectsData = await getProjectsData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <FixedNavbar />
        <ProjectsSection data={projectsData} />
        <Footer />
      </div>
    </main>
  )
}
