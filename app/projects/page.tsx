import { getProjectsData } from '@/sanity/lib/data'
import PersonalProjects from '@/app/components/PersonalProjects'

export default async function ProjectsPage() {
  const projectsData = await getProjectsData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <PersonalProjects data={projectsData} />
      </div>
    </main>
  )
}
