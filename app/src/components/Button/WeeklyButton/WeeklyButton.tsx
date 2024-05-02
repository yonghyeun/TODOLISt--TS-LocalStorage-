import { WeekKey, WeekValue } from '../../../types/global';

import Button from '../Buttons';

import styles from './WeeklyButton.module.css';

const WeekMap: Record<WeekKey, WeekValue> = {
  0: 'All',
  1: 'Week1',
  2: 'Week2',
  3: 'Week3',
  4: 'Week4',
  5: 'Week5',
};

type Props = {
  week: WeekKey;
};

const WeeklyButton: React.FC<Props> = ({ week }) => {
  const weekName: WeekValue = WeekMap[week];
  const className = `${styles.default} ${styles[weekName]}`;

  return <Button className={className}>{weekName}</Button>;
};

export default WeeklyButton;
