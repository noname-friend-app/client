type Session = {
  id: string;
  username: string;
  email: string;
  profile?: Profile;
} | null;

interface Profile {
  id: string;
  name: string;
  bio: string;
  pronouns: string;
  birthday: string;
  user?: Session;
}

interface Group {
  id: string;
  name: string;
  description: string;
  groupImageUrl: string;
  joinCode: string;
  createdAt: string;
  updatedAt: string;
  members: GroupMember[];
  quotes?: Quote[];
}

interface GroupMember {
  id: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  profileId: string;
  groupId: string;
  profile: Profile;
}

interface GroupsResponse {
  message: string;
  groups: Group[];
  user: Session;
}

interface GroupResponse {
  message: string;
  group: Group;
}

interface Quote {
  id: string;
  text: string;
  saidAt: string;
  updatedAt: string;
  profileid: string;
  groupdId: string;
  profile: Profile;
}

interface QuotesResponse {
  message: string;
  quotes: Quote[];
  group: Group;
}

interface Comment {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  profileId: string;
  quoteId: string;
  profile?: Profile
}

interface CommentsResponse {
  quote: Quote;
  comments: Comment[];

}


interface ListResponse {
  lists: List[];
  group: Group;
}

interface List {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  groupId: string;
  profileId: string;
  listItems: ListItem[]
}

interface ListItem {
  id: string;
  text: string;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
  listId: string;
}

interface ListItemsResponse {
  message: string;
  listItems: ListItem[]
}

interface Comment {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  profileId: string;
  quoteId: string;
  profile?: Profile
}
interface CommentsResponse {
  quote: Quote;
  comments: Comment[];

}


interface ListResponse {
  lists: List[];
  group: Group;
}

interface List {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  groupId: string;
  profileId: string;
  listItems: ListItem[]
}

interface ListItem {
  id: string;
  text: string;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
  listId: string;
}

interface ListItemsResponse {
  message: string;
  listItems: ListItem[]
}