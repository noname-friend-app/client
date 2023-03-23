type Session = {
  id: string;
  username: string;
  email: string;
  profile?: {
    id: string;
    name: string;
    bio: string;
    pronouns: string;
    birthday: string;
  };
} | null;

interface Group {
  id: string;
  name: string
  description: string;
  groupImageUrl: string 
  joinCode: string;
  createdAt: string;
  updatedAt: string;
}

interface GroupsResponse {
  message: string;
  groups: Group[];
  user: Session
}

interface GroupResponse {
  message: string;
  group: Group;
}