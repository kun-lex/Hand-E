import './components/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Routes>
      <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;