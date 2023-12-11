
export const links = [
    {
        name: 'About',
        extend: '#about'
    },
    {
        name: 'Experience',
        extend: '#experience'
    },
    {
        name: 'Projects',
        extend: '#projects'
    }
] as const;

export const skills = [
   "JavaScript", "TypeScript", "Solidity", "Rust", "ReactJs", "VueJs", "RemixRun", "NodeJs (Express)", "PostgreSql", "Nextjs", "HTML & CSS"
] as const;

export const projects = [
    {
        project: 'You Read',
        description: 'Book Reading app for keeping tabs of your reading adventures, documenting your reading experience, like book genre covered in a period of time, total number of pages read, and getting access to latest books and best selling, by fetching  the boks data from New York Times API.',
        url:'you-read.vercel.app',
        stack: [
           "Vue Js", "Express Js", "Vercel", "OnRender"
        ]
    },
    {
        project: 'Fiction Factory',
        description: 'Hiring platform for fiction writters. Hire vetted plot writters to do your story telling, buy manuscripts and get your worsk published at very low cost. Also, you get paid to do your writting Job',
        url:'fictionfactory.com',
        stack: [
           "Vue Js", "GoLang", "Vercel", "OnRender", "Docker"
        ]
    },
    {
        project: 'ReDux',
        description: ' Work In Progress',
        url:'redux.verce.app',
        stack: [
           "React Js", "Python", "Vercel", "OnRender", "Docker"
        ]
    }
] as const;

export const experiences = [
    {
        title: "FullStack Engineer",
        organization:"NextGen",
        date:"May 2023 — present",
        stack:[
            "React", "JavaScript", "TypeScript", "ExpressJs", "SCSS", "Framer Motion", "TailwindCSS"
        ],
        description:"Developed and maintained the NextGen frontend app emphasizing speed, accessibility, and user onboarding improvements. Also, Led the design and build of the admin dashboard for streamlined event sign-ups and enhanced user data management. Spearheaded the creation of a secure and scalable backend REST API for user management and multi-event functionality."
    },
    {
        title: "Frontend Engineer",
        organization: "Clinikli",
        date: "Nov. 2021 — Aug. 2022",
        stack:[
            "VueJs", "JavaScript", "TailwindCSS", "SCSS"
        ],
        description: "Led the development of Clinikli's web application, converting extensive design pages into functional components. Implemented a sorting algorithm to enhance search and recommendation features, improving overall user experience. Managed ongoing maintenance and client-side implementation of a secure payment model, ensuring consistent reliability and user trust.",
    },
    {
        title: "FullStack Engineer (Frontend Heavy)",
        organization: "Sonvisage",
        date: "Aug. 2021 — Mar. 2022",
        stack:[
            "VueJs", "JavaScript", "TailwindCSS", "NodeJs (Express)"
        ],
        description: "Developed and translated design components into precise and responsive web pages. Implemented efficient state management for bulk data uploads, enhancing scalability. Managed Node.js REST API development for real-time data collection from IoT devices."
    },
    {
        title: "Frontend Engineer (Intern)",
        organization:"Vinca",
        date:"June 2021 — August 2021",
        stack:[
            "React", "JavaScript", "CSS (SCSS)", "Styled Components"
        ],
        description:"Collaborated  with the UI team to deliver modern web pages for the vinca web app. Built and maintained several components and pages on the vinca hospital website. Developed a Patient/Doctor appointment booking system to ease booking of appointments for specialized services. Also built the interface of the admin component to handle bookings, and messages from users."
    },
    {
        title: "Frontend Engineer (Intern)",
        organization:"FourthStream",
        date:"Nov 2020 — May 2021",
        stack:[
            "React", "HTML & CSS", "JavaScript", "CSS (SCSS)", "Styled Components"
        ],
        description:" Worked alongside the UI and engineering team to develop fully functional web interfaces and components, while ensuring all integrations with the backend are fully operational. Developed fully responsive user interfaces, and functional components accross browsers and devices."
    },
] as const;

