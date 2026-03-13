import { motion } from 'framer-motion';

const Events = () => {
    return (
        <section id="events" className="section-content py-24 bg-transparent border-y border-white/5 relative min-h-screen">
            {/* Aesthetic NVIDIA-Style Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
                <img src="/assets/domain-bg.jpg" alt="Events Background" className="w-full h-full object-cover opacity-30 fixed top-0 left-0" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <h2 className="text-sm font-bold text-nvidia-green uppercase tracking-widest mb-2 font-mono drop-shadow-md">Discovery</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Upcoming & Past Events</h3>
                    </div>
                </motion.div>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar group/scroll cursor-grab active:cursor-grabbing" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {/* Event Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-block min-w-[320px] md:min-w-[420px] bg-nvidia-card rounded-sm glow-border flex-shrink-0 snap-start group cursor-pointer relative top-0 hover:-top-2 transition-all duration-300"
                    >
                        <div className="h-56 bg-nvidia-charcoal relative overflow-hidden border-b border-nvidia-green/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                <i className="fas fa-microchip text-7xl text-nvidia-green/40 group-hover:text-nvidia-green/60 transition-colors drop-shadow-[0_0_15px_rgba(118,185,0,0.5)]"></i>
                            </div>
                            <div className="absolute bottom-5 left-5 z-20">
                                <span className="px-3 py-1 bg-nvidia-green text-black text-xs font-bold font-mono tracking-wider rounded-sm shadow-[0_0_10px_rgba(118,185,0,0.5)]">UPCOMING</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-nvidia-green font-mono text-sm mb-3">MARCH 15, 2026</p>
                            <h4 className="text-2xl font-bold mb-4 group-hover:text-nvidia-green transition-colors text-white">Building RAG Agents with LLMs</h4>
                            <p className="text-nvidia-textSecondary text-base line-clamp-3 leading-relaxed">
                                Join us for an exclusive, hands-on workshop led by industry experts. Learn how to
                                construct Retrieval-Augmented Generation pipelines using modern tools.
                            </p>
                        </div>
                    </motion.div>

                    {/* Event Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-block min-w-[320px] md:min-w-[420px] bg-nvidia-card rounded-sm glow-border flex-shrink-0 snap-start group cursor-pointer relative top-0 hover:-top-2 transition-all duration-300"
                    >
                        <div className="h-56 bg-nvidia-charcoal relative overflow-hidden border-b border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                <i className="fas fa-network-wired text-7xl text-nvidia-green/30 group-hover:text-nvidia-green/50 transition-colors"></i>
                            </div>
                            <div className="absolute bottom-5 left-5 z-20">
                                <span className="px-3 py-1 bg-white/10 text-white border border-white/20 text-xs font-bold font-mono tracking-wider rounded-sm">PAST</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-nvidia-textSecondary font-mono text-sm mb-3 group-hover:text-nvidia-green transition-colors">FEB 10, 2026</p>
                            <h4 className="text-2xl font-bold mb-4 text-white/90">Intro to CUDA Programming</h4>
                            <p className="text-nvidia-textSecondary text-base line-clamp-3 leading-relaxed">
                                A deep dive into parallel computing architecture and programming with NVIDIA's CUDA
                                platform for accelerated computing.
                            </p>
                        </div>
                    </motion.div>

                    {/* Event Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-block min-w-[320px] md:min-w-[420px] bg-nvidia-card rounded-sm glow-border flex-shrink-0 snap-start group cursor-pointer relative top-0 hover:-top-2 transition-all duration-300"
                    >
                        <div className="h-56 bg-nvidia-charcoal relative overflow-hidden border-b border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                <i className="fas fa-robot text-7xl text-nvidia-green/30 group-hover:text-nvidia-green/50 transition-colors"></i>
                            </div>
                            <div className="absolute bottom-5 left-5 z-20">
                                <span className="px-3 py-1 bg-white/10 text-white border border-white/20 text-xs font-bold font-mono tracking-wider rounded-sm">PAST</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-nvidia-textSecondary font-mono text-sm mb-3 group-hover:text-nvidia-green transition-colors">JAN 25, 2026</p>
                            <h4 className="text-2xl font-bold mb-4 text-white/90">Hackathon: AI for Good</h4>
                            <p className="text-nvidia-textSecondary text-base line-clamp-3 leading-relaxed">
                                48 hours of intense coding, problem-solving, and innovation. Teams built AI-driven
                                solutions for environmental challenges.
                            </p>
                        </div>
                    </motion.div>

                    {/* Browse More Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block min-w-[200px] md:min-w-[300px] bg-transparent border border-white/10 border-dashed rounded-sm hover:border-nvidia-green flex-shrink-0 snap-start group cursor-pointer flex flex-col items-center justify-center transition-colors"
                    >
                        <i className="fas fa-arrow-right text-4xl text-nvidia-textSecondary group-hover:text-nvidia-green transition-colors mb-4 group-hover:translate-x-2"></i>
                        <span className="font-bold text-nvidia-textSecondary group-hover:text-white transition-colors">View All Events</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Events;
