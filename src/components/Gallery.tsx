import { motion } from 'framer-motion';

const events = [
    {
        title: "CUDA Parallel Processing Workshop",
        date: "28 February 2026",
        images: [
            { icon: "fa-microchip" },
            { icon: "fa-laptop-code" },
            { icon: "fa-network-wired" },
            { icon: "fa-cogs" },
            { icon: "fa-server" },
        ]
    },
    {
        title: "AI Hackathon 2026",
        date: "15 January 2026",
        images: [
            { icon: "fa-robot" },
            { icon: "fa-users" },
            { icon: "fa-award" },
            { icon: "fa-camera" },
            { icon: "fa-lightbulb" },
        ]
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="section-content relative py-24 bg-transparent border-y border-white/5 min-h-screen">
            {/* Aesthetic NVIDIA-Style Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
                <img src="/assets/domain-bg.jpg" alt="Gallery Background" className="w-full h-full object-cover opacity-30 fixed top-0 left-0" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-bold text-nvidia-green uppercase tracking-widest mb-2 font-mono drop-shadow-md">Visuals</h2>
                    <h3 className="text-3xl md:text-5xl font-bold drop-shadow-lg text-white">Event Gallery</h3>
                </motion.div>

                <div className="space-y-20">
                    {events.map((event, eventIdx) => (
                        <motion.div
                            key={eventIdx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: eventIdx * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="flex items-baseline justify-between border-b border-nvidia-green/30 pb-3 mb-6">
                                <h4 className="text-2xl font-bold text-white">{event.title}</h4>
                                <span className="text-nvidia-green font-mono text-sm">{event.date}</span>
                            </div>

                            {/* Horizontal Scroll Container */}
                            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar group/scroll cursor-grab active:cursor-grabbing" style={{ WebkitOverflowScrolling: 'touch' }}>
                                {event.images.map((img, imgIdx) => (
                                    <motion.div
                                        key={imgIdx}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block min-w-[280px] md:min-w-[400px] aspect-video bg-nvidia-card rounded-md glow-border flex-shrink-0 snap-center relative overflow-hidden group/card shadow-xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-nvidia-green/10 to-transparent group-hover/card:opacity-100 transition-opacity z-10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-nvidia-charcoal group-hover/card:bg-black/50 transition-colors">
                                            <i className={`fas ${img.icon} text-6xl text-nvidia-textSecondary opacity-30 group-hover/card:text-nvidia-green group-hover/card:opacity-80 transition-all duration-500 group-hover/card:scale-110 drop-shadow-[0_0_15px_rgba(118,185,0,0.5)]`}></i>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
