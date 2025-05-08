"use client";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="text-white">We are a Music Company dedicated to delivering quality music and experiences.</p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="flex flex-col space-y-2">
                        <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
                        <li><a href="#" className="text-white hover:text-gray-400">Pricing</a></li>
                        <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="text-white">IIIT Delhi, Okhla Industrial Estate, Phase III</p>
                    <p className="text-white">New Delhi, Delhi 110020, India</p>
                    <p className="text-white">Email: contact@iiitd.ac.in</p>
                    <p className="text-white">Phone: +91-11-2690-2978</p>
                </div>
            </div>
            <p className="text-center text-xm pt-6 flex justify-center items-center bg-gray-700">Copyright &copy; 2024 Music School and Company.</p>
        </footer>

    )
}

export default Footer