import styles from './MainPage.module.css';
import Header from '../../layouts/Headers/Header';
import Monthly from '../../layouts/Monthly/Monthly';
import Weekly from '../../layouts/Weekly/Weekly';
import Daily from '../../layouts/Daily/Daily';
import Todos from '../../layouts/Todos/Todos';
const MainPage: React.FC = () => {
  return (
    <section className={styles.maipage}>
      <Header />
      <section className={styles.content}>
        <Monthly />
        <Weekly />
        <Daily />
        <Todos />
      </section>
    </section>
  );
};

export default MainPage;
