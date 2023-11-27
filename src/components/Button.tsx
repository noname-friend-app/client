import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";
interface IButtonProps {
  w?: string | number;
  h?: string | number;
  bg?: string;
  color?: string;
  _hover?: any;
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  styles?: ButtonProps
}

const Button: React.FC<IButtonProps> = ({
  h = 45,
  w = "200px",
  bg = "white",
  color = "black",
  _hover = { color: "white", background: "purple.100" },
  children,
  onClick,
  isDisabled = false,
  ...rest
}) => {
  return (
    <>
      <ChakraButton
      {...rest}
       isDisabled={isDisabled}
       onClick={onClick}
       bg={bg}
       color={color}
       fontWeight={"light"}
       w={w}
       _hover={_hover}
       h={h}
      >{children}</ChakraButton>
    </>
  );
};

export default Button;
