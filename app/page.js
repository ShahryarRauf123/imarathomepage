import Navbar from "./components/Navbar";
import VideoBG from './components/VideoBG'
import LearnMore from './components/LearnMore'
import Projects from './components/Projects'
import Map from './components/Map'
import Values from './components/Values'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


export default function Home() {
    return (
        <main className="items-center relative">
            <Navbar/>
            <VideoBG/>
            <LearnMore/>
            <Projects/>
            <Map/>
            <Values/>
            <Newsletter/>
            <Footer/>
        </main>
    );
}
