import Input from "../Input";
import Modal from "../Modal";

interface IEditModalProps {
  isOpen: boolean;
  text: string;
  onChangeText: (name: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

const EditListModal: React.FC<IEditModalProps> = ({
  isOpen,
  text,
  onSubmit,
  onClose,
  onChangeText,
}) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title="Edit List Text"
      actionText="Save"
      action={onSubmit}
    >
      <Input w='100%' name='text' setState={onChangeText} formLabel="Edit" value={text} />
    </Modal>
  );
};

export default EditListModal;
