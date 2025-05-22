import Header from './header.jsx';
import Footer from './footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 👈 C'est ici que les pages (Home, About, 404...) s'affichent */}
      </main>
      <Footer />
    </>
  );
}