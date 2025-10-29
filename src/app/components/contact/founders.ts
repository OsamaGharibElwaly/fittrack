// src/components/contact/founders.ts
export type Founder = {
  id: number;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
};

export const founders: Founder[] = [
  {
    id: 1,
    name: "Osama Alwaly",
    role: "Founder",
    image: "/Osama_Alwaly.jpg",
    email: "osamagharib04@gmail.com",
    phone: "+201210916041",
    address: "Port Said, EG",
    socials: {
      linkedin: "https://www.linkedin.com/in/osama-alwaly",
      instagram: "https://www.instagram.com/osama_gharib904/",
      facebook: "https://www.facebook.com/osama.gharib.902/",
    },
  },
  {
    id: 2,
    name: "Osama Elkatatany",
    role: "Founder",
    image: "/Osama_Elkatatny.jpg",
    email: "omohm065@gmail.com",
    phone: "+201229698870",
    address: "Port Said, EG",
    socials: {
      linkedin: "https://www.linkedin.com/in/osama-elkatatny/",
      instagram: "https://www.instagram.com/dr.osamaelkatatny/",
      facebook: "https://www.facebook.com/osama.elkatatny",
    },
  },
];