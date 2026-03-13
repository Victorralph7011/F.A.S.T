import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const teamGroups = [
    {
        title: 'FOUNDERS',
        members: [
            { name: 'Alex Mercer', role: 'President & AI Lead', icon: 'fa-user' },
            { name: 'Sarah Chen', role: 'Vice President', icon: 'fa-user-astronaut' }
        ]
    },
    {
        title: 'LEADERSHIP & MENTORS',
        members: [
            { name: 'David Kim', role: 'Data Science Lead', icon: 'fa-user-tie' },
            { name: 'Elena Rostova', role: 'Operations Director', icon: 'fa-user-ninja' },
            { name: 'Marcus Wei', role: 'Head of Engineering', icon: 'fa-laptop-code' },
            { name: 'Aisha Patel', role: 'Community Lead', icon: 'fa-users' }
        ]
    }
];

const Team = () => {
    return (
        <section id="team" className="section-content relative py-32 bg-transparent min-h-screen overflow-hidden">
            {/* Dynamic Canvas Particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <ParticlesBackground />
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-32"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Meet Our Team</h2>
                </motion.div>

                <div className="space-y-40 text-center">
                    {teamGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-xl md:text-2xl font-bold text-white mb-24 tracking-wider uppercase font-mono drop-shadow-md"
                            >
                                {group.title}
                            </motion.h3>

                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-24">
                                {group.members.map((member, memberIndex) => (
                                    <motion.div
                                        key={memberIndex}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        whileHover={{ y: -10 }}
                                        className="relative bg-gradient-to-b from-[#181818] to-[#0a0a0a] rounded-2xl pt-20 pb-8 px-6 border border-white/5 hover:border-nvidia-green/30 transition-all duration-300 w-full sm:w-[320px] group shadow-2xl mx-auto sm:mx-0"
                                    >
                                        {/* Overlapping Avatar */}
                                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-[#111] border-[4px] border-[#222] group-hover:border-nvidia-green transition-colors duration-300 overflow-hidden flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-20 group-hover:shadow-[0_0_30px_rgba(118,185,0,0.3)]">
                                            <i className={`fas ${member.icon} text-5xl text-gray-500 group-hover:text-nvidia-green transition-all duration-300 group-hover:scale-110`}></i>
                                        </div>

                                        <h4 className="text-lg font-bold text-white mb-2 tracking-wide uppercase drop-shadow-sm">{member.name}</h4>
                                        <p className="text-nvidia-green text-sm mb-6 font-mono font-medium drop-shadow-sm">{member.role}</p>

                                        <div className="flex justify-center gap-5">
                                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-linkedin text-xl"></i></motion.a>
                                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-instagram text-xl"></i></motion.a>
                                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-github text-xl"></i></motion.a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
