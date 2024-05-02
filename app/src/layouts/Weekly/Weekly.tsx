import { WeekKey } from '../../types/global';

import Container from '../../components/Container/Container';
import WeeklyButton from '../../components/Button/WeeklyButton/WeeklyButton';

import style from './Weekly.module.css';

const weeklyArray: WeekKey[] = Array.from(
  { length: 6 },
  (_, index) => index as WeekKey,
);

const Weekly = () => {
  return (
    <Container>
      <h1 style={{ fontSize: '32px' }}>Week</h1>
      <section className={style.weekly}>
        {weeklyArray.map((week: WeekKey) => (
          <WeeklyButton week={week} key={week} />
        ))}
      </section>
    </Container>
  );
};

export default Weekly;
