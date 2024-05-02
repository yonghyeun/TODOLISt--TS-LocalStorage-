import Container from '../../../components/Container/Container';
import PlusButton from '../../../components/Button/TodoButton/PlusButton';
import Todo from '../../../components/Todo/Todo';

import styles from './layouts.module.css';

const SelectedTodos = () => {
  return (
    <section className={styles.content} style={{ height: '70%' }}>
      <Container>
        <h1 style={{ fontSize: '24px' }}>5월 1주차 화요일의 투두리스트</h1>
        <PlusButton />
        <ul>
          <li>
            <Todo />
          </li>
          <ul>
            <li>
              <Todo />
            </li>
            <ul>
              <li>
                <Todo />
              </li>
            </ul>
          </ul>
        </ul>
      </Container>
    </section>
  );
};

export default SelectedTodos;
