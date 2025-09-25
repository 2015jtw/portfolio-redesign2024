import { getClientWorkData } from '@/sanity/lib/data'
import dynamic from 'next/dynamic'

// Lazy load heavy component
const FreelanceProjects = dynamic(() => import('@/app/components/FreelanceProjects'), {
  loading: () => <div className="py-20"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-md"></div></div>
})

export default async function WorkPage() {
  const clientWorkData = await getClientWorkData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <FreelanceProjects data={clientWorkData} />
      </div>
    </main>
  )
}
