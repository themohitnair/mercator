"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle URL submission here
    console.log('Submitted URL:', url)
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Mercator
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Talk to the web
          </p>
          <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
            <div className="w-full sm:max-w-lg">
              <Input
                type="url"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full px-5 py-3 text-base text-gray-100 placeholder-gray-400 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                Converse
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}