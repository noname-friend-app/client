import { Avatar } from "@chakra-ui/react";

interface PfpProps {
  seed: string;
}

const ProfilePicture: React.FC<PfpProps> = ({ seed: pfp }) => {
  return (
    <>
      <Avatar src={`https://api.dicebear.com/5.x/bottts/svg?seed=${pfp}`} />
    </>
  );
};
export default ProfilePicture;
