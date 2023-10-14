const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white p-4 mt-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    BrandName
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600">Terms of Use</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;