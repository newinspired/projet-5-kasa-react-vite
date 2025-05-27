import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Error404 from '../pages/error404.jsx';
import Logement from '../pages/logements.jsx';
import Layout from '../components/layout.jsx';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}