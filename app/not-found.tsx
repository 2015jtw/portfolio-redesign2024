import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black min-h-screen">
      <div className="max-w-7xl w-full font-alegreya">
        
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Go Back Home
          </Link>
        </div>
        
      </div>
    </main>
  )
}
