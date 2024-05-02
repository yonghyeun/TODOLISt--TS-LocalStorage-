import Container from '../../components/Container/Container';
import SelectedTodos from './layouts/SelectedTodos';
import UncompletedTodos from './layouts/UncompletedTodos';

import styles from './Todos.module.css';

const Todos = () => {
  return (
    <Container style={{ flexGrow: 1 }}>
      <h1 style={{ fontSize: '32px' }}>To Do List</h1>
      <section className={styles.todos}>
        <SelectedTodos />
        <UncompletedTodos />
      </section>
    </Container>
  );
};

export default Todos;
