export interface IMentor {
  id: string
  createdAt: string;
  updatedAt: string;
  username: string;
  position: string;
  profession: string[];
  language: string[];
  //
  price: string
  image?: File | null;
  imageUrl?: string;
  about: string;
  howCanYouHelp: string;
  slug: string
  mdx?: any;
  resumeLink: string;
  email: string;
  telegram: string;
}

export interface IMentorResponse extends Omit<IMentor, 'id' | 'createdAt' | 'updatedAt' | 'price'> {}