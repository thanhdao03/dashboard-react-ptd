export const DataProfileUser = {
  // BASIC INFO
  name: "Thanh Dao",
  email: "thanhdao02dd@gmail.com",
  phone: "0979 022 810",
  location: "Từ Liêm, Hà Nội, Việt Nam",
  website: "https://react-portfolio-ptd.netlify.app/projects",
  bio: "Thank you for visiting my portfolio! If you have any questions or would like to discuss potential collaborations, please feel free to reach out. I am always open to connecting with fellow developers, designers, and professionals in the tech industry. Let's create something amazing together!",
  avatarUrl: "/assets/images/PTD3.jpg",
  // PROFILE
  role: "Frontend Developer",
  gpa: "3.5 / 4.0",
  english: "Basic communication",

  // SUMMARY
  summary:
    "I have nearly two years of Frontend experience at Bkav Corporation, where I contributed to feature development and built interfaces for security systems such as EDR, SIEM, and SOAR — many of which involved complex, visually rich dashboards. I also had the opportunity to work alongside senior experts with 10+ years of experience across various fields in IT, web, and desktop development. In the future, I aim to become a Senior Full-stack Developer, continuously learning and contributing to high-quality software products.",

  // EDUCATION
  education: {
    school: "FPT Polytechnic College",
    major: "Information Technology",
    period: "2019 – 2022"
  },

  // WORK EXPERIENCE
  experience: {
    company: "Bkav Corporation",
    location: "Hà Nội, Việt Nam",
    period: "04/2024 – 02/2026",
    description: [
      "Developed dashboard interfaces using ReactJS and Redux.",
      "Built interfaces for security systems such as EDR, SIEM, and SOAR.",
      "Optimized performance, applied clean code practices and coding conventions.",
      "Strengthened TailwindCSS skills and collaborated closely with team members."
    ]
  },

  // PROJECT
  projects: [
    {
      name: "Personal Portfolio Website",
      role: "Frontend Developer",
      period: "09/2023 – 12/2023",
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "React Router",
        "Framer Motion",
        "Netlify"
      ],
      github: "https://github.com/thanhdao03/portfolio-ptd",
      description: [
        "Built a fully responsive personal portfolio to showcase skills and projects.",
        "Developed modern UI components with React + TailwindCSS.",
        "Implemented client-side routing and dark/light theme with persistence.",
        "Added smooth animations and transitions using Framer Motion.",
        "Deployed on Netlify with automatic builds and custom domain."
      ]
    },
    {
      name: "Admin Dashboard System",
      role: "Frontend Developer",
      period: "2024",
      technologies: ["ReactJS", "Redux", "MUI"],
      github: "https://github.com/thanhdao03/dashboard-react-ptd",
      description: [
        "Developed dashboard UI for internal management systems.",
        "Worked with complex data visualization.",
        "Optimized UI performance."
      ]
    },
    {
      name: "Security Monitoring Platform",
      role: "Frontend Developer",
      period: "2024",
      technologies: ["ReactJS", "Redux", "TailwindCSS"],
      github: "#",
      description: [
        "Built interfaces for EDR / SIEM systems.",
        "Designed reusable UI components.",
        "Collaborated with backend team."
      ]
    }
  ]

};
