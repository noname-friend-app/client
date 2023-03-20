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
