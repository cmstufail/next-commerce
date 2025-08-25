import Link from 'next/link'

// Mock product data
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        description: "Experience crystal clear audio with our noise-cancelling wireless headphones. Perfect for music lovers and professionals who need focus. Features include 30-hour battery life, comfortable ear cushions, and advanced noise cancellation technology.",
        price: 199.99,
        features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Bluetooth 5.0 connectivity",
            "Built-in microphone for calls",
            "Comfortable over-ear design"
        ]
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        description: "Track your activity, sleep, and heart rate with our advanced fitness watch. Stay connected with notifications while on the go. Water-resistant design perfect for swimming and all weather conditions.",
        price: 249.99,
        features: [
            "Heart rate monitoring",
            "Sleep tracking",
            "GPS for outdoor activities",
            "Water resistant up to 50m",
            "7-day battery life"
        ]
    },
    {
        id: 3,
        name: "Fast Wireless Charger",
        description: "Charge your devices quickly without the hassle of cables. Compatible with most smartphones and earbuds. LED indicator shows charging status.",
        price: 59.99,
        features: [
            "Fast charging compatible",
            "LED charging indicator",
            "Non-slip surface",
            "Universal compatibility",
            "Overheat protection"
        ]
    }
]

export default function ProductDetail( { params } ) {
    const product = products.find( p => p.id === parseInt( params.id ) )

    if ( !product ) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
                <Link href="/products" className="text-blue-600 hover:underline">
                    ← Back to Products
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <Link href="/products" className="inline-flex items-center text-blue-600 hover:underline mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Products
            </Link>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center p-12">
                        <div className="text-white text-8xl font-bold">N{ product.id }</div>
                    </div>
                    <div className="p-8">
                        <h1 className="text-3xl font-bold mb-4">{ product.name }</h1>
                        <p className="text-gray-600 mb-6 text-lg">{ product.description }</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3">Features</h2>
                            <ul className="list-disc list-inside space-y-2">
                                { product.features.map( ( feature, index ) => (
                                    <li key={ index } className="text-gray-700">{ feature }</li>
                                ) ) }
                            </ul>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-blue-600">${ product.price.toFixed( 2 ) }</span>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}