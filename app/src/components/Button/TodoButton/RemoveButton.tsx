import Button from '../Buttons';
import RemoveIcon from '../../Icons/RemoveIcon';

const RemoveButton = () => {
  const handleRemove = () => {};

  return (
    <Button onClick={handleRemove}>
      <RemoveIcon />
    </Button>
  );
};

export default RemoveButton;
