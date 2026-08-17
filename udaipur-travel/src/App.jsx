import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Attractions from './components/Attractions';
import Gallery from './components/Gallery';
import BestTime from './components/BestTime';
import TravelTips from './components/TravelTips';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Attractions />
        <Gallery />
        <BestTime />
        <TravelTips />
      </main>
      <Footer />
    </>
  );
}

export default App;
