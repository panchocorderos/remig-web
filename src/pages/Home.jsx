import HeroSection from '../Components/HeroSection';
import Features from '../Components/Features';
import IntegrationsSection from '../Components/IntegrationsSection';
import CTASection from '../Components/CTASection';
import Main from '../Components/common/Main';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


export default function Home() {
  return (
    <Main>
        <Navbar />
        <HeroSection />
        <Features />
        <IntegrationsSection />
        <CTASection />
        <Footer />
    </Main>
  )
}
