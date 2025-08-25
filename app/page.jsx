import Link from 'next/link'
import { Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

// Product Highlights
function ProductHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, name: "Premium Headphones", description: "Crystal clear audio with noise cancellation", price: "$199" },
            { id: 2, name: "Smart Watch", description: "Track your fitness and stay connected", price: "$249" },
            { id: 3, name: "Wireless Charger", description: "Fast charging for all your devices", price: "$59" }
          ].map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <div className="text-white text-5xl font-bold">N{product.id}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <Link 
                    href={`/products/${product.id}`} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    prefetch={true}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            prefetch={true}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">We offer only the highest quality products from trusted brands.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Your payment information is protected with industry-standard encryption.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">We ship orders within 24 hours and provide tracking information.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to NextCommerce</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop with confidence and convenience.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              prefetch={true}
            >
              Browse Products
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              prefetch={true}
            >
              Sign In
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              prefetch={true}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Product Highlights with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <ProductHighlights />
      </Suspense>

      {/* Features Section with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>
    </div>
  )
}