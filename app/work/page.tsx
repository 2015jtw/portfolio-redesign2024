import { getClientWorkData } from '@/sanity/lib/data'
import FreelanceProjects from '@/app/components/FreelanceProjects'

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
