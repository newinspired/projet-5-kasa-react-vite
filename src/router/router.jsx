import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Error404 from '../pages/error404.jsx';
import Layout from '../components/layout.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}