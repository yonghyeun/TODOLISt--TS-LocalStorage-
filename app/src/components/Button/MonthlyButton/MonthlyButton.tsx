import { MonthKey, MonthValue } from '../../../types/global';

import Button from '../Buttons';

import styles from './MonthlyButton.module.css';

type MonthMap = Readonly<Record<MonthKey, MonthValue>>;

const MonthMap: MonthMap = {
  0: 'All',
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

type Props = {
  month: MonthKey;
};

const MonthlyButton: React.FC<Props> = ({ month }) => {
  const monthName = MonthMap[month];
  const className = `${styles.default} ${styles[monthName]}`;

  // TODO onClick 이벤트 구현하기

  return <Button className={className}>{monthName}</Button>;
};

export default MonthlyButton;
