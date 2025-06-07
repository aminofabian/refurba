import Logo from './logo';

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-slate-100 text-slate-900 shadow-lg border-b border-slate-200">
            {/* Logo Section */}
            <div className="flex items-center">
                <Logo 
                    size="md" 
                    color="brand" 
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-slate-600 transition-colors font-medium text-slate-700">
                    Browse
                </a>
                <a href="#" className="hover:text-slate-600 transition-colors font-medium text-slate-700">
                    Sell
                </a>
                <a href="#" className="hover:text-slate-600 transition-colors font-medium text-slate-700">
                    About
                </a>
                <button 
                    className="px-4 py-2 rounded-lg font-medium transition-colors shadow-sm text-white hover:opacity-90" 
                    style={{ backgroundColor: '#1e964c' }}
                >
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default Navbar;