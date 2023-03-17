type Session = {
  id: string;
  name: string;
  email: string;
  profile?: {
    id: string;
    name: string;
    bio: string;
    pronouns: string;
    birthday: string;
  };
} | null;
