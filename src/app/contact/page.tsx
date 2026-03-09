import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
    return (
        <div className="bg-navy min-h-screen text-white selection:bg-white selection:text-black flex flex-col pt-24">
            <Navbar />
            
            <div className="flex-grow flex items-center">
                 <Contact />
            </div>

            <Footer />
        </div>
    );
}
