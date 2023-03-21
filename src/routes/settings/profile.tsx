import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useLogin } from "../../libs/api";

const AccountSettings: React.FC = () => {
  // const [username, setUsername] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const navigate = useNavigate();
  // // const { mutate, isLoading } = useLogin();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   mutate({ username, email: username, password });
  // };
  return (
    <>
      <Flex
        // bg="red"
        w="400px"
        h="500px"
      >
        <h1>hi</h1>
        {/* <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="100%" h="100%" spacing={8} justifyContent={"center"}>
            <Input
              value={name}
              formLabel=" Display Name"
              w="330px"
              setState={setName}
              isRequired={true}
            />
            <Flex flexDir={"row"} justify="space-between" w="330px">
              <Input
                value={pronouns}
                formLabel="Pronouns"
                w="75px"
                setState={setPronouns}
                isRequired={true}
              />
              <Input
                value={birthday}
                formLabel="Birthday"
                w="120px"
                type="date"
                setState={setBirthday}
                isRequired={true}
              />
            </Flex>
            <Input
              value={bio}
              formLabel="Bio"
              w="330px"
              setState={setBio}
              isRequired={true}
            />
            <DoinkButton w="330px" {...buttonProps} children="Save" />
          </VStack>
        </form> */}
      </Flex>
    </>
  );
};
export default AccountSettings;
