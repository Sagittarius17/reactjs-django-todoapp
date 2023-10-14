const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    BrandName
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="hover:text-blue-300">Home</a>
                    <a href="#" className="hover:text-blue-300">About</a>
                    <a href="#" className="hover:text-blue-300">Services</a>
                    <a href="#" className="hover:text-blue-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;