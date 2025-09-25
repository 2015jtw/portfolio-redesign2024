import { getClientWorkData } from '@/sanity/lib/data'
import { FixedNavbar } from '@/app/components/FixedNavbar'
import Footer from '@/app/components/Footer'
import ClientWorkSection from '@/app/components/ClientWorkSection'

export default async function WorkPage() {
  const clientWorkData = await getClientWorkData()

  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <FixedNavbar />
        <ClientWorkSection data={clientWorkData} />
        <Footer />
      </div>
    </main>
  )
}
