import { getCompanyWorkData } from '@/sanity/lib/data'
import CompanyWork from '@/app/components/CompanyWork'

export default async function AgencyWorkPage() {
  const companyWorkData = await getCompanyWorkData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <CompanyWork data={companyWorkData} />
      </div>
    </main>
  )
}
