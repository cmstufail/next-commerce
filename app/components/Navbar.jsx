'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const { data: session, status } = useSession()
  const [ isHydrated, setIsHydrated ] = useState( false )

  useEffect( () => {
    setIsHydrated( true )
  }, [] )

  const handleLogout = async () => {
    try {
      await signOut()
    } catch ( error ) {
      console.error( 'Failed to log out', error )
    }
  }

  if ( !isHydrated ) {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NextCommerce
          </Link>
          <div className="w-20 h-6 bg-gray-200 rounded"></div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NextCommerce
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">
            Products
          </Link>

          { status === 'loading' ? (
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
          ) : session ? (
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/add-product" className="text-gray-700 hover:text-blue-600 transition">
                Dashboard
              </Link>
              <button
                onClick={ handleLogout }
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Sign Out
              </button>
              <div className="flex items-center">
                { session.user?.image ? (
                  <Image
                    src={ session.user.image }
                    alt="User Avatar"
                    width={ 32 }
                    height={ 32 }
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    { session.user?.name?.charAt( 0 )?.toUpperCase() ||
                      session.user?.email?.charAt( 0 )?.toUpperCase() ||
                      'U' }
                  </div>
                ) }
              </div>
            </div>
          ) : (
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign In
            </Link>
          ) }
        </div>
      </div>
    </nav>
  )
}