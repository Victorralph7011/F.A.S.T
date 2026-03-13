import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="font-sans antialiased overflow-x-hidden selection:bg-nvidia-green selection:text-black flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/domains" element={<Domains />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
