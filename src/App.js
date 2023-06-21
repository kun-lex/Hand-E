import './components/App.css'
import Navbar from './components/Navbar';
import NewNav from './components/Newnavbar';
import Main from './components/Main'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* <NewNav /> */}
      <Main />
      <Footer />
    </div>
    

  );
}

export default App;