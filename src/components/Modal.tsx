import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import Button from "./Button";
import type { TextProps, ButtonProps } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actionText: string;
  action: () => void;
  buttonType?: string;
  actionDisabled?: boolean;
  actionButtonStyles?: ButtonProps;
  actionButtonHoverStyles?: ButtonProps;
  actionTextStyles?: TextProps;
}
const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  action,
  actionText,
  buttonType,
  actionDisabled = false,
  actionButtonStyles,
  actionButtonHoverStyles,
  actionTextStyles
}) => {
  const secondaryBtnProps = { variant: "ghost", colorScheme: "blue", mr: 3 };
  const primaryBtnProps = { type: buttonType, isDisabled: actionDisabled };
  return (
    <>
      <ChakraModal
        size={{ base: "full", sm: "lg" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="purple.200">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button
              bg="none"
              color="none"
              {...secondaryBtnProps}
              w={100}
              onClick={onClose}
            >
              cancel
            </Button>
            <Button
              _hover={{ ...actionButtonHoverStyles }}
              bg={
                actionButtonStyles && actionButtonStyles.backgroundColor
                  ? actionButtonStyles.backgroundColor.toString()
                  : "white"
              }
              styles={{ ...actionButtonStyles }}
              onClick={() => action()}
              {...primaryBtnProps}
              w={100}
            >
              <Text {...actionTextStyles} >{actionText}</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
