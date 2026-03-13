import ParticlesBackground from './ParticlesBackground';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            {/* Hero Wrapper with Particles */}
            <div className="relative py-20 lg:py-32 overflow-hidden mesh-bg min-h-[max(calc(100vh-80px),600px)] flex items-center">

                {/* Dynamic Canvas Particles */}
                <ParticlesBackground />

                {/* Static Neon Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nvidia-green opacity-5 rounded-full blur-[100px] pointer-events-none z-0">
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-nvidia-green/30 bg-nvidia-green/10 text-nvidia-green text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_10px_rgba(118,185,0,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-nvidia-green animate-pulse"></span>
                            <span>Data Science & Business Systems</span>
                        </div>
                        <div className="flex justify-center -mt-6 -mb-8 md:-mt-10 md:-mb-12 relative z-10">
                            <img
                                src="/assets/fast-logo-text.png"
                                alt="FAST Typography"
                                className="w-full max-w-lg md:max-w-xl drop-shadow-[0_0_30px_rgba(118,185,0,0.6)] object-contain"
                            />
                        </div>
                        <p className="mt-4 text-xl text-nvidia-textSecondary leading-relaxed max-w-2xl mx-auto">
                            We are the premier tech community bridging the gap between cutting-edge Artificial
                            Intelligence, Data Science, and modern Business Systems.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <motion.a
                                href="#home-about"
                                whileTap={{ scale: 0.9, textShadow: "0px 0px 20px #76B900", boxShadow: "0px 0px 40px 10px rgba(118,185,0,0.8)", backgroundColor: "#76B900", color: "#000" }}
                                className="px-8 py-4 bg-nvidia-green text-black font-bold rounded-sm hover:bg-[#88d600] transition-colors duration-300 flex items-center justify-center gap-2 group"
                            >
                                Discover FAST
                                <i className="fas fa-arrow-down text-sm group-hover:translate-y-1 transition-transform"></i>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* About Section */}
            <div id="home-about" className="py-24 bg-transparent relative border-t border-nvidia-green/20 overflow-hidden min-h-[60vh]">
                <div className="absolute inset-0 chip-bg opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 left-1/4 w-px h-full bg-nvidia-green/20"></div>
                <div className="absolute top-0 left-3/4 w-px h-full bg-nvidia-green/20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16 text-center"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm border border-nvidia-green bg-nvidia-green/10 mb-6 relative">
                            <div className="absolute -right-1 -top-1 w-2 h-2 bg-nvidia-green rounded-full"></div>
                            <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-nvidia-green rounded-full"></div>
                            <i className="fas fa-sitemap text-nvidia-green text-xl"></i>
                        </div>
                        <h2 className="text-sm font-bold text-nvidia-green uppercase tracking-widest mb-2 font-mono">System Architecture</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">The FAST Framework</h3>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">We emulate the high-performance computing ethos of NVIDIA to build our community's foundational knowledge base.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        {/* Chip Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-nvidia-card p-1 rounded-sm relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-nvidia-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="bg-nvidia-charcoal p-8 rounded-sm h-full border border-white/5 relative z-10">
                                <i className="fas fa-microchip text-3xl text-nvidia-green mb-6 drop-shadow-[0_0_8px_rgba(118,185,0,0.8)]"></i>
                                <h4 className="text-xl font-bold mb-3 border-l-2 border-nvidia-green pl-3">Powered by Tensor Cores</h4>
                                <p className="text-nvidia-textSecondary text-sm leading-relaxed">Like specialized hardware accelerating math equations, our community accelerates learning by focusing on the fundamental algorithms driving Deep Learning.</p>
                            </div>
                        </motion.div>

                        {/* Chip Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-nvidia-card p-1 rounded-sm relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-nvidia-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="bg-nvidia-charcoal p-8 rounded-sm h-full border border-white/5 relative z-10">
                                <i className="fas fa-layer-group text-3xl text-nvidia-green mb-6 drop-shadow-[0_0_8px_rgba(118,185,0,0.8)]"></i>
                                <h4 className="text-xl font-bold mb-3 border-l-2 border-nvidia-green pl-3">CUDA-Accelerated Growth</h4>
                                <p className="text-nvidia-textSecondary text-sm leading-relaxed">Parallel processing is at our core. We foster an environment where multiple disciplines—Data, Business, and Tech—thread together.</p>
                            </div>
                        </motion.div>

                        {/* Chip Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-nvidia-card p-1 rounded-sm relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-nvidia-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="bg-nvidia-charcoal p-8 rounded-sm h-full border border-white/5 relative z-10">
                                <i className="fas fa-eye text-3xl text-nvidia-green mb-6 drop-shadow-[0_0_8px_rgba(118,185,0,0.8)]"></i>
                                <h4 className="text-xl font-bold mb-3 border-l-2 border-nvidia-green pl-3">Ray-Traced Vision</h4>
                                <p className="text-nvidia-textSecondary text-sm leading-relaxed">Clarity and precision in our goals. We trace the path of emerging technologies to illuminate future career paths for our members.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
