import { Heading } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import DoinkButton from "../components/Buton";
import DoinkInput from "../components/Input";

const Root = () => {
  return (
    <>
      <Heading>Doink!</Heading>
      {/* <DoinkButton /> */}
      <DoinkInput />
      {/* <Outlet /> */}
    </>
  );
};

export default Root;
