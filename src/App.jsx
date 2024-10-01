import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Text from './components/Text';
import Image from './components/Image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bohera from './components/Bohera';
import Follow from './components/Follow';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Text/>
      <Image/>
      <Bohera/>
      <Follow/>
      <Footer/>
    </>
  )
}

export default App
