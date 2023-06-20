import './components/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer';
import NewNav from './components/Newnavbar';

function App() {
  return (
    <div>
      <Navbar />
      <NewNav />
      <Main />
      <Footer />
    </div>
    

  );
}

export default App;