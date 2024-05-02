import Button from '../Buttons';
import EditIcon from '../../Icons/EditIcon';

const EditButton = () => {
  const handleEdit = () => {};

  return (
    <Button onClick={handleEdit}>
      <EditIcon />
    </Button>
  );
};

export default EditButton;
