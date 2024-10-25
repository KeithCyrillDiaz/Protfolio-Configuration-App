export const SocialsUrl = {
    facebook: "https://www.facebook.com/keith.diaz.58",
    gitHub: "https://github.com/KeithCyrillDiaz",
    linkedIn: "https://www.linkedin.com/in/keith-cyrill-diaz-637a5a2b2/"
}

export const HomeDetails = {
    profilePicture: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Profile%20Image%2FIMG_20211130_133849%20(1).jpg?alt=media&token=56fca8f2-3003-47d6-83d8-5c2a595eb1a1",
    name: "Keith Diaz",
    role: "Full Stack Developer | Mobile & Web Developer",
    subtitle: [
        "Passionate ", "Developer ", "from the Philippines"
    ]
}

export type imagesTypes = {
    uri: string;
    label: string[]
}

export type TechnicalSkillsTypes = {
    uri: string;
    label: string;
    Level: string;
    Experience: string;
    rating: number;
}

export const AboutDetails = {
   PersonalInformation: {
    myImage: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Profile%20Image%2FDiaz%2C%20Keith%20Cyrill%20A.jpg?alt=media&token=1a585aab-91ee-4d1e-85cd-4cb0e4d2f038",
    fullName: "Keith Cyrill A. Diaz",
    selfIntroduction: ["Hi there! I'm Keith, a fresh graduate passionate about building ", "mobile ", "and ", "web ", "applications, with a current focus on JavaScript and Typescript."],
    contactNumber: "+63 976-532-9159",
    email: "keithalbarinadiaz0317@gmail.com",
    address: "33 Julio’s Compound Pulang Lupa Uno Las Pinas City",
    intro2: "I was first exposed to technology at age four, which ignited my passion for technologies. This interest grew during my college years, leading me to pursue a degree in Information Systems. Throughout my studies, I gained hands-on experience in full-stack development during my thesis project. I thrive in collaborative environments where I can contribute to meaningful projects and grow both personally and professionally while aiming to make a positive impact in the tech industry."
   },
   EducationInformation: {
        course: "Bachelor of Science in Information System" ,
        GPA: 1.567,
        school: "Technological University of the Philippines",
        images: [
          {
              uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Education%2FBestInThesisDepartment.jpg?alt=media&token=ecc08065-b12f-48c8-b232-9993e2bb3531",
              label: ["Awarded", "Best Thesis", "in College of Science Department"]
          },
          {
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Education%2FCumLaude.png?alt=media&token=9591dace-09fe-4cfe-bdf3-ca2d9fd2d27e",
            label: ["Awarded", "Cum Laude"]
          },
          {
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Education%2FBestInThesisCourse.jpg?alt=media&token=fddde99a-5b97-43d7-8e7b-0d64cbb14107",
            label: ["Awarded", "Best Thesis", "in Information System"]
          }
        ] as imagesTypes[]
   },
   TechnicalSkills: [
        {
            label: "TypeScript",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FTypescript.png?alt=media&token=4e8b159e-2270-4c0d-9737-daf3cc93c02e",
            Level: "Intermediate",
            Experience: "8 months",
            rating: 80
        },
        {
            label: "HTML",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FHTML.png?alt=media&token=d2880a88-dfe2-403c-ad1b-1057bd43972d",
             Level: "Intermediate",
            Experience: "8 months",
            rating: 80
        },
        {
            label: "Tailwind",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FTailwind.png?alt=media&token=1b17e184-7ce9-43bc-b782-0b83aa786888",
             Level: "Intermediate",
            Experience: "5 months",
            rating: 80
        },
        {
            label: "React",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FReact.png?alt=media&token=08139f76-0370-4861-a4db-aab9c8a90f22",
             Level: "Intermediate",
            Experience: "5 months",
            rating: 80
        },
        {
            label: "Next",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FNextjs.jpg?alt=media&token=ef85f21a-9628-43a7-af60-f239cb08b941",
            Level: "Novice",
            Experience: "1 month",
            rating: 80
        },
        {
            label: "JavaScript",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FJavascript.png?alt=media&token=3ffa0172-e2ef-4fa3-9fdf-1ebced579a42",
             Level: "Intermediate",
            Experience: "8 months",
            rating: 70
        },
        {
            label: "Node",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FNodejs.webp?alt=media&token=407df011-7e72-4052-9001-4368aeea68c7",
             Level: "Intermediate",
            Experience: "8 months",
            rating: 80
        },
        {
            label: "Express",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2Fexpress-js.png?alt=media&token=06b48fba-3f25-4007-bfcb-301b7bd89085",
             Level: "Intermediate",
            Experience: "8 months",
            rating: 80
        },
        {
            label: "React Native",
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Logo%2FReact%20Native.png?alt=media&token=0207f38a-9e13-4adc-a296-b8cf7dd8dadb",
             Level: "Intermediate",
            Experience: "8 months",
            rating: 75
        },
     
   ] as TechnicalSkillsTypes[]
}