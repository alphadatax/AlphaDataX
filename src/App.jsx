import { useRef } from 'react'
import "./assets/fonts/hamlin/stylesheet.css"
import CustomAppBar from './components/CustomAppBar/CustomAppBar/';
import FirstSection from './components/FirstSection/FirstSection';
import './App.css'
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  const servicesRef = useRef(null);
  const ourTechRef = useRef(null);
  const whatWeSolveRef = useRef(null);
  const whyAplhaRef = useRef(null);
  const futureRef = useRef(null);
  const contactRef = useRef(null);

   const scrollTo = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 64, // adjust for AppBar height
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
       <div>
      <CustomAppBar 
       onFirstSectionClick={() => scrollTo(servicesRef)}
       onSecondSectionClick={() => scrollTo(ourTechRef)}
       onThirdSectionClick={() => scrollTo(whatWeSolveRef)}
       onFourthSectionClick={() => scrollTo(whyAplhaRef)}
       onFifthSectionClick={() => scrollTo(futureRef)}
       onContactNowClick={() => scrollTo(contactRef)}
      
      />
      <FirstSection />
      <div ref={servicesRef}>
      <SecondSection />
      </div>
      <div ref={ourTechRef}>
      <ThirdSection ref={ourTechRef}/>
      </div>
      <div ref={whatWeSolveRef}>
      <FourthSection />
      </div>
      <div ref={whyAplhaRef}>
      <FifthSection onContactNowClick={() => scrollTo(contactRef)}/>
      </div>
      <div ref={futureRef}>
      <SixthSection />
      </div>
      <div ref={contactRef}>
      <ContactSection/>
      </div>
      <Footer/>
      {/* Rest of your content */}
    </div>
    </>
  )
}

export default App
