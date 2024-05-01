import { Outlet } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
  return (
    <section className={styles.mainpage}>
      <Outlet />
    </section>
  );
};

export default MainPage;
