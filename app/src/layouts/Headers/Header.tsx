import Container from '../../components/Container/Container';

import styles from './Headers.module.css';

const Header = () => {
  return (
    <Container>
      <h1 className={styles.title}>ToDoList</h1>
    </Container>
  );
};

export default Header;
