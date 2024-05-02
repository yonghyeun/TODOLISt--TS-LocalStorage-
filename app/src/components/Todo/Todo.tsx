import CheckButton from '../Button/TodoButton/CheckButton';
import EditButton from '../Button/TodoButton/EditButton';
import PlusButton from '../Button/TodoButton/PlusButton';
import RemoveButton from '../Button/TodoButton/RemoveButton';

import styles from './Todo.module.css';

const Todo: React.FC = () => {
  return (
    <section className={styles.todo}>
      <p>밥 야무지게 먹기</p>
      <section className={styles.wrapper}>
        <CheckButton />
        <EditButton />
        <PlusButton />
        <RemoveButton />
      </section>
    </section>
  );
};

export default Todo;
