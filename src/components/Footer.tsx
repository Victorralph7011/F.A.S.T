const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10 shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold tracking-tighter text-white">
                            FAST<span className="text-nvidia-green">.</span>
                        </span>
                    </div>
                    <p className="text-nvidia-textSecondary text-xs font-mono">
                        Crafted with <span className="text-nvidia-green">💚</span> by FAST.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-nvidia-textSecondary hover:text-nvidia-green transition-colors"><i className="fab fa-instagram text-lg"></i></a>
                        <a href="#" className="text-nvidia-textSecondary hover:text-nvidia-green transition-colors"><i className="fab fa-linkedin text-lg"></i></a>
                        <a href="#" className="text-nvidia-textSecondary hover:text-nvidia-green transition-colors"><i className="fab fa-discord text-lg"></i></a>
                        <a href="#" className="text-nvidia-textSecondary hover:text-nvidia-green transition-colors"><i className="far fa-envelope text-lg"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
