import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <footer className="bg-transparent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400 ">
            © 2023 Mercator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}