import { Avatar } from "@chakra-ui/react";

interface PfpProps {
  seed: string;
  size?: string;
  name?: string;
}

const ProfilePicture: React.FC<PfpProps> = ({ seed: pfp, size = "md" }) => {
  return (
    <>
      <Avatar
        src={`https://api.dicebear.com/5.x/bottts/svg?seed=${pfp}`}
        size={size}
        bg="purple.300"
        css={{
          border: "2px solid white",
        }}
      />
    </>
  );
};
export default ProfilePicture;
