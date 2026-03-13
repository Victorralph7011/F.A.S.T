import { motion } from 'framer-motion';

const Domains = () => {
    return (
        <section id="domains" className="section-content relative py-24 bg-transparent border-y border-white/5 min-h-screen">
            {/* Aesthetic NVIDIA-Style Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
                <img src="/assets/domain-bg.jpg" alt="Neural Background" className="w-full h-full object-cover opacity-30" />
            </div>

            {/* Static Neon Ambient Glow */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nvidia-green opacity-5 rounded-full blur-[100px] pointer-events-none z-0">
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-center bg-black/80 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl max-w-4xl mx-auto"
                >
                    <h2 className="text-sm font-bold text-nvidia-green uppercase tracking-widest mb-2 font-mono">Capabilities</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Our Core Domains</h3>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">We process data and build systems across a parallelized architecture of specialized domains.</p>
                </motion.div>

                <div className="space-y-32">
                    {/* Domain 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-1/2 order-2 lg:order-1 bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,185,0,0.15)] hover:border-nvidia-green/30"
                        >
                            <div className="text-nvidia-green text-6xl font-bold mb-6 opacity-70 font-mono">01.</div>
                            <h4 className="text-3xl font-bold mb-4 text-white">Technical</h4>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                The tech backbone of our club—where innovation meets execution. From coding and development to hands-on projects, this team brings ideas to life with real-world impact.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-1/2 order-1 lg:order-2"
                        >
                            <div className="aspect-square bg-transparent relative flex items-center justify-center p-8 group">
                                <motion.img
                                    whileTap={{ scale: 0.85, filter: "drop-shadow(0px 0px 50px rgba(118,185,0,1))" }}
                                    src="/assets/domain2.png" alt="Artificial Intelligence"
                                    className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(118,185,0,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(118,185,0,0.6)] group-hover:scale-105 transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Domain 2 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="aspect-square bg-transparent relative flex items-center justify-center p-8 group">
                                <motion.img
                                    whileTap={{ scale: 0.85, filter: "drop-shadow(0px 0px 50px rgba(118,185,0,1))" }}
                                    src="/assets/domain3.png" alt="Data Science"
                                    className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(118,185,0,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(118,185,0,0.6)] group-hover:scale-105 transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-1/2 bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,185,0,0.15)] hover:border-nvidia-green/30"
                        >
                            <div className="text-nvidia-green text-6xl font-bold mb-6 opacity-70 font-mono">02.</div>
                            <h4 className="text-3xl font-bold mb-4 text-white">Corporate</h4>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                The bridge between our club and the outside world. Managing partnerships, sponsorships, and outreach while also driving workshops, hackathons, and events, this team ensures our presence is felt both on and off campus.
                            </p>
                        </motion.div>
                    </div>

                    {/* Domain 3 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-1/2 order-2 lg:order-1 bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,185,0,0.15)] hover:border-nvidia-green/30"
                        >
                            <div className="text-nvidia-green text-6xl font-bold mb-6 opacity-70 font-mono">03.</div>
                            <h4 className="text-3xl font-bold mb-4 text-white">Creatives</h4>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                The storytellers and designers of the club. Through visuals, content, and unique ideas, this team adds the spark that makes everything we do engaging and unforgettable.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-1/2 order-1 lg:order-2"
                        >
                            <div className="aspect-square bg-transparent relative flex items-center justify-center p-8 group">
                                <motion.img
                                    whileTap={{ scale: 0.85, filter: "drop-shadow(0px 0px 50px rgba(118,185,0,1))" }}
                                    src="/assets/domain1.png" alt="Business Systems"
                                    className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(118,185,0,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(118,185,0,0.6)] group-hover:scale-105 transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Domains;
