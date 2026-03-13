import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();

    // Helper to check if current route matches
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 nav-blur border-b border-nvidia-charcoal transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.div whileTap={{ scale: 0.9, textShadow: "0px 0px 20px #76B900" }} transition={{ duration: 0.2 }}>
                        <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
                            <img src="/assets/fast-logo-icon.png" alt="FAST Logo" className="h-[44px] drop-shadow-[0_0_15px_rgba(118,185,0,0.5)]" />
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        <motion.div whileTap={{ scale: 0.85, textShadow: "0px 0px 20px #76B900", color: "#76B900" }}>
                            <Link to="/" className={`nav-link border-b-2 text-sm font-medium pb-1 transition-colors ${isActive('/') ? 'text-white border-nvidia-green' : 'text-nvidia-textSecondary border-transparent hover:text-white'}`}>Home</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.85, textShadow: "0px 0px 20px #76B900", color: "#76B900" }}>
                            <Link to="/domains" className={`nav-link border-b-2 text-sm font-medium pb-1 transition-colors ${isActive('/domains') ? 'text-white border-nvidia-green' : 'text-nvidia-textSecondary border-transparent hover:text-white'}`}>Domains</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.85, textShadow: "0px 0px 20px #76B900", color: "#76B900" }}>
                            <Link to="/events" className={`nav-link border-b-2 text-sm font-medium pb-1 transition-colors ${isActive('/events') ? 'text-white border-nvidia-green' : 'text-nvidia-textSecondary border-transparent hover:text-white'}`}>Events</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.85, textShadow: "0px 0px 20px #76B900", color: "#76B900" }}>
                            <Link to="/gallery" className={`nav-link border-b-2 text-sm font-medium pb-1 transition-colors ${isActive('/gallery') ? 'text-white border-nvidia-green' : 'text-nvidia-textSecondary border-transparent hover:text-white'}`}>Gallery</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.85, textShadow: "0px 0px 20px #76B900", color: "#76B900" }}>
                            <Link to="/team" className={`nav-link border-b-2 text-sm font-medium pb-1 transition-colors ${isActive('/team') ? 'text-white border-nvidia-green' : 'text-nvidia-textSecondary border-transparent hover:text-white'}`}>Team</Link>
                        </motion.div>

                        <motion.div whileTap={{ scale: 0.85, boxShadow: "0px 0px 40px 10px rgba(118,185,0,0.8)", borderColor: "#76B900", backgroundColor: "#76B900", color: "#000" }} className="rounded-sm">
                            <Link to="/" className="px-5 py-2 border border-nvidia-green text-white hover:bg-nvidia-green hover:text-black transition-all duration-300 font-medium text-sm rounded-sm block">
                                Join Us
                            </Link>
                        </motion.div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-nvidia-textSecondary hover:text-white focus:outline-none">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
