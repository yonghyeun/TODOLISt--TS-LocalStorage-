import Button from '../Buttons';
import PlusIcon from '../../Icons/PlusIcon';

import styles from './TodoButton.module.css';

const PlusButton = () => {
  const handlePlus = () => {};

  return (
    <Button onClick={handlePlus} className={styles.plus}>
      <PlusIcon />
    </Button>
  );
};

export default PlusButton;
