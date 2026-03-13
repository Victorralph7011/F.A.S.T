import { useState } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Window */}
            <div
                id="ai-chat-window"
                className={`fixed bottom-24 right-6 w-80 md:w-[400px] bg-[#0A0A0A] border border-nvidia-green/40 rounded-lg shadow-2xl z-50 flex flex-col max-h-[600px] h-[80vh] transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`}
            >
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#111] rounded-t-lg">
                    <div className="flex items-center gap-3">
                        <i className="fas fa-network-wired text-nvidia-green"></i>
                        <h3 className="font-bold text-sm">Are there any FAST questions I can help with?</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-nvidia-textSecondary hover:text-white transition-colors">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="p-4 flex-1 overflow-y-auto bg-black text-sm text-nvidia-textSecondary space-y-4">
                    <p className="leading-relaxed">This is an AI powered chatbot. AI generated content may have mistakes. Please verify. Chat messages are recorded to improve our services.</p>
                    <p className="font-bold text-white text-xs">By using this chatbot you consent to such recording.</p>
                    <p className="text-xs">This chatbot is built with Llama. <a href="#" className="underline text-white hover:text-nvidia-green">Llama 3.2 Community License Agreement</a></p>

                    <div className="border-l-2 border-nvidia-green pl-3 py-1 my-4 bg-[#111] rounded-r-md block">
                        <p className="text-white">Hello! How can I assist you with FAST today?</p>
                    </div>
                </div>

                <div className="p-3 bg-black border-t border-white/5 flex flex-col gap-2">
                    <button className="text-xs text-left px-3 py-2 border border-white/20 rounded-full hover:border-nvidia-green hover:text-white transition-colors">When is the next workshop?</button>
                    <button className="text-xs text-left px-3 py-2 border border-white/20 rounded-full hover:border-nvidia-green hover:text-white transition-colors">How can I join the design team?</button>
                </div>

                <div className="p-3 bg-black border-t border-white/10 rounded-b-lg">
                    <div className="relative bg-[#1A1A1A] rounded-md flex items-end">
                        <textarea rows={1} className="w-full bg-transparent text-sm text-white px-3 py-3 outline-none resize-none placeholder-nvidia-textSecondary" placeholder="Ask me here.."></textarea>
                        <div className="p-2">
                            <button className="bg-nvidia-green hover:bg-[#88d600] text-black w-8 h-8 rounded-sm flex items-center justify-center transition-colors">
                                <i className="fas fa-paper-plane text-xs"></i>
                            </button>
                        </div>
                    </div>
                    <p className="text-[10px] text-center text-nvidia-textSecondary mt-2">AI-generated content may be incomplete. Verify important info.</p>
                </div>
            </div>

            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-black border border-nvidia-green text-white px-5 py-3 rounded-full flex items-center gap-3 hover:bg-[#111] hover:shadow-[0_0_20px_rgba(118,185,0,0.4)] transition-all duration-300 z-50 group"
            >
                <i className="fas fa-project-diagram text-white group-hover:text-nvidia-green transition-colors"></i>
                <span className="font-bold">Ask AI</span>
            </button>
        </>
    );
};

export default ChatWidget;
