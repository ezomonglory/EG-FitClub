import './App.css';
import Footer from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plan from './components/Plan/Plan';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plan/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
