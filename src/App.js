import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import NavScroll from './components/NavBarPage/NavScroll'
import NewTest from './components/NavBarPage/NewTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewTest />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
