import { getProjectsData } from '@/sanity/lib/data'
import dynamic from 'next/dynamic'

// Lazy load heavy component
const PersonalProjects = dynamic(() => import('@/app/components/PersonalProjects'), {
  loading: () => <div className="py-20"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-md"></div></div>
})

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
