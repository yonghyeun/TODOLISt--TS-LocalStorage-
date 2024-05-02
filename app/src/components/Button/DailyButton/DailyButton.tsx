import { DayKey, DayValue } from '../../../types/global';

import Button from '../Buttons';

import styles from './DailyButton.module.css';

const DayMap: Record<DayKey, DayValue> = {
  0: 'All',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};

type Props = {
  day: DayKey;
};

const DailyButton: React.FC<Props> = ({ day }) => {
  const dayName = DayMap[day];
  const className = `${styles.default} ${styles[dayName]}`;
  return <Button className={className}>{dayName}</Button>;
};

export default DailyButton;
