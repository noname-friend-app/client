type Session = {
  id: string;
  username: string;
  email: string;
  profile?: Profile
} | null;

interface Profile  {
    id: string;
    name: string;
    bio: string;
    pronouns: string;
    birthday: string;
    user?: Session
}

interface Group {
  id: string;
  name: string
  description: string;
  groupImageUrl: string 
  joinCode: string;
  createdAt: string;
  updatedAt: string;
  members: GroupMember[]
}

interface GroupMember{
  id: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  profileId: string;
  groupId: string;
  profile: Session
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