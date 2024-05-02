import Container from '../../../components/Container/Container';

import styles from './layouts.module.css';

const UncompletedTodos = () => {
  return (
    <section className={styles.content} style={{ height: '30%' }}>
      <Container>
        <ul>
          <li>공부 열심히 하기</li>
          <li>설거지 하기</li>
        </ul>
      </Container>
    </section>
  );
};

export default UncompletedTodos;
