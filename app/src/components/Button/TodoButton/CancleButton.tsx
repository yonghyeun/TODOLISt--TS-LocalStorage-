import Button from '../Buttons';
import CancleIcon from '../../Icons/CancleIcon';

const CancleButton: React.FC = () => {
  const handleCancle = () => {};

  return (
    <Button onClick={handleCancle}>
      <CancleIcon />
    </Button>
  );
};

export default CancleButton;
