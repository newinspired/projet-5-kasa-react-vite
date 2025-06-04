import { Routes, Route } from 'react-router-dom';


import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Logement from './pages/logements.jsx';
import Error404 from './pages/error404.jsx';


function App() {

return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;