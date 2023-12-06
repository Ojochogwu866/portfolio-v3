
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
        title: 'You Read',
        description: 'Book Reading app for keeping tabs of your reading adventures, documenting your reading experience, like book genre covered in a period of time, total number of pages read, and getting access to latest books and best selling, by fetching  the boks data from New York Times API.',
        url:'',
        stack: [
           "Vue Js", "Express Js", "Vercel", "OnRender"
        ]
    },
    {
        title: 'Fiction Factory',
        description: 'Hiring platform for fiction writters. Hire vetted plot writters to do your story telling, buy manuscripts and get your worsk published at very low cost. Also, you get paid to do your writting Job',
        url:'',
        stack: [
           "Vue Js", "GoLang", "Vercel", "OnRender", "Docker"
        ]
    },
    {
        title: 'ReDux',
        description: ' Work In Progress',
        url:'',
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
] as const;

