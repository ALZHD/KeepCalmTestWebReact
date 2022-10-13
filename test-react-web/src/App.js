import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstSection from './components/Sections/FirstSection/FirstSection';
import SecondSection from './components/Sections/SecondSection/SecondSection';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from './Footer/Footer';
import InternalHeader from './components/InternalHeader/InternalHeader';

function App() {
  return (
    <div className="main-container">
      <div className="navbar-block"><Navbar /></div>
      <div className="content">
        <InternalHeader />
        <FirstSection />
        <PhotoSlider />
        <InternalHeader />
        <SecondSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
