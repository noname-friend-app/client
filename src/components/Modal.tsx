import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Button from "./Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actionText: string;
  action: () => void;
  buttonType?: string
  actionDisabled?: boolean
}
const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  action,
  actionText,
  buttonType,
  actionDisabled = false
}) => {
  const secondaryBtnProps = {variant: 'ghost', colorScheme:"blue", mr:3, }
  const primaryBtnProps = {type: buttonType, isDisabled: actionDisabled}
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='purple.200'>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button bg='none' color='none' {...secondaryBtnProps} w={100}   onClick={onClose}>
              cancel
            </Button>
            <Button  onClick={() => action()} {...primaryBtnProps} w={100}>
              {actionText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
