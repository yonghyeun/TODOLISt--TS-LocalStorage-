import { DayKey } from '../../types/global';

import styles from './Daily.module.css';

import Container from '../../components/Container/Container';
import DailyButton from '../../components/Button/DailyButton/DailyButton';

const dayArray: DayKey[] = Array.from(
  { length: 8 },
  (_, index) => index as DayKey,
);

const Daily: React.FC = () => {
  return (
    <Container>
      <h1 style={{ fontSize: '32px' }}>Daily</h1>
      <section className={styles.daily}>
        {dayArray.map((day: DayKey) => (
          <DailyButton key={day} day={day} />
        ))}
      </section>
    </Container>
  );
};

export default Daily;
