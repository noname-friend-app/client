import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  w?: string | number;
  bg?: string;
  color?: string;
  _hover?: any;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  w = "200px",
  bg = "white",
  color = "black",
  _hover = { color: "white", background: "purple.100" },
  children,
  onClick,
  ...rest
}) => {
  return (
    <>
      <ChakraButton
        {...rest}
        onClick={onClick}
        bg={bg}
        color={color}
        fontWeight={"light"}
        w={w}
        _hover={_hover}
      >
        {children}
      </ChakraButton>
    </>
  );
};

export default Button;
