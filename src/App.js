import Navbar from './components/Navbar';
import Section from './components/Section';
import Employes from './components/Employes';
import Boxes from './components/Boxes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Section />
      <Employes />
      <Boxes />
      <Footer />
    </div>
  );
}

export default App;
