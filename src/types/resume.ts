type SocialLink = {
  name: string;
  url: string;
};

type Education = {
  school: string;
  degree: string;
  graduated: string;
  description: string;
};

type Work = {
  company: string;
  title: string;
  years: string;
  description: string;
};

type Skill = {
  name: string;
  level: string;
};

type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
};

export type MainData = {
  name: string;
  description: string;
  image: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  github: string;
  project: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  website: string;
  resumedownload: string;
  social: SocialLink[];
};

export type Resume = {
  main: MainData;
  resume: {
    skillmessage: string;
    education: Education[];
    work: Work[];
    skills: Skill[];
  };
  portfolio: {
    projects: Project[];
  };
};
