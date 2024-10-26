import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-transparent shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Mercator</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/themohitnair/mercator" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}