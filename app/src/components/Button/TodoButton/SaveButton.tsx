import Button from '../Buttons';
import SaveIcon from '../../Icons/SaveIcon';

const SaveButton: React.FC = () => {
  const handleSave = () => {};

  return (
    <Button onClick={handleSave}>
      <SaveIcon />
    </Button>
  );
};

export default SaveButton;
