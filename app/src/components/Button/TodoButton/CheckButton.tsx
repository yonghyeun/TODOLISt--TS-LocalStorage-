import Button from '../Buttons';
import CheckIcon from '../../Icons/CheckIcon';

const CheckButton: React.FC = () => {
  const handleCheck = () => {};

  return (
    <Button onClick={handleCheck}>
      <CheckIcon />
    </Button>
  );
};

export default CheckButton;
