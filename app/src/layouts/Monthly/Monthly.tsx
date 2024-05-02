import { MonthKey } from '../../types/global';

import styles from './Monthly.module.css';

import Container from '../../components/Container/Container';
import MonthlyButton from '../../components/Button/MonthlyButton/MonthlyButton';

const monthArray: MonthKey[] = Array.from(
  { length: 13 },
  (_, index) => index as MonthKey,
);

const Monthly: React.FC = () => {
  return (
    <Container>
      <h1 style={{ fontSize: '32px' }}>Month</h1>
      <section className={styles.monthly}>
        {monthArray.map((month: MonthKey) => (
          <MonthlyButton key={month} month={month} />
        ))}
      </section>
    </Container>
  );
};

export default Monthly;
