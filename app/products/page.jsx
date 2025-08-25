import Link from 'next/link'

// Mock product data
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        description: "Experience crystal clear audio with our noise-cancelling wireless headphones.",
        price: 199.99,
        image: "/headphones.jpg"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        description: "Track your activity, sleep, and heart rate with our advanced fitness watch.",
        price: 249.99,
        image: "/watch.jpg"
    },
    {
        id: 3,
        name: "Fast Wireless Charger",
        description: "Charge your devices quickly without the hassle of cables.",
        price: 59.99,
        image: "/charger.jpg"
    },
    {
        id: 4,
        name: "Ergonomic Office Chair",
        description: "Stay comfortable during long work hours with our ergonomic chair design.",
        price: 299.99,
        image: "/chair.jpg"
    },
    {
        id: 5,
        name: "Ultra HD Monitor",
        description: "Enjoy stunning visuals with our 4K resolution monitor.",
        price: 399.99,
        image: "/monitor.jpg"
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        description: "Type with precision and satisfaction using our tactile mechanical keyboard.",
        price: 129.99,
        image: "/keyboard.jpg"
    }
]

export default function Products() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { products.map( product => (
                    <div key={ product.id } className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <div className="text-white text-5xl font-bold">N{ product.id }</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{ product.name }</h3>
                            <p className="text-gray-600 mb-4">{ product.description }</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-blue-600">${ product.price.toFixed( 2 ) }</span>
                                <Link
                                    href={ `/products/${ product.id }` }
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ) ) }
            </div>
        </div>
    )
}