export interface IMentor {
  username: string;
  position: string;
  profession: string[];
  language: string[];
  //
  image?: File | null;
  imageUrl?: string;
  about: string;
  howCanYouHelp: string;
  mdx?: any;
  resumeLink: string;
  email: string;
  telegram: string;
}
