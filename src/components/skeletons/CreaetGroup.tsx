import CreateGroupLayout from "../../layouts/grid/CreateGroup";

interface IProps {
  children: React.ReactNode;
}

const CreateGroupSkeleton: React.FC<IProps> = ({children}: IProps) => {
  return (
    <CreateGroupLayout>
      {children}
    </CreateGroupLayout>
  )
}

export default CreateGroupSkeleton;