import { Header } from 'components/header/header.jsx';
import { Outlet } from 'react-router-dom';
import css from './outlet.module.css';
import { Footer } from 'components/footer/footer.jsx';

const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <main>
          <Outlet />
          </main>
        <Footer/>
        </div>
    </>
  );
}

export default Layout