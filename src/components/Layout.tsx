import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-16"> {/* Add padding-top to account for navbar height */}
        {children}
      </main>
    </div>
  )
}
