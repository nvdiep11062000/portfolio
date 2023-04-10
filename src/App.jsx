import { useEffect } from 'react';
import './App.scss';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Aos from 'aos';
import Hero from './component/UI/Hero';
import Service from './component/UI/Service';
import Portfolio from './component/UI/Portfolio';

function App() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Service />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default App;
