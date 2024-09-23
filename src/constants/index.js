import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    snder,
    niagara,
    bank,
    logen,
    git,
    figma,
    cont,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mySQL,
    python,
    java,
    tableau,
    powerBI,
    uber,
    saas,
    healtcare
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Honors graduate in Engineering",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Cloud Practitioner",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "mySQL",
      icon: mySQL,
    },
    {
      name: "CSS 3",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: java,
    },
    {
      name: "MongoDB",
      icon: powerBI,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "PLC Engineer",
      company_name: "LOGEN",
      icon: logen,
      iconBg: "#383E56",
      date: "January 2020 - July 2022",
      points: [
        "Participating in project planning and documentation, including developing technical specifications and manuals.",
        "Providing technical support and training to maintenance teams, ensuring smooth operation and understanding of automated systems.",
        "Designing and implementing control logic, HMI (Human-Machine Interface) configurations, and SCADA systems for seamless plant operation.",
        "Developing and programming PLC systems to automate industrial processes, ensuring efficiency and reliability in operations.",
      ],
    },
    {
      title: "BMS Operator",
      company_name: "Schneider Electric",
      icon: snder,
      iconBg: "#E6DEDD",
      date: "Internship of 6 Months",
      points: [
        "Operating and monitoring Building Management Systems (BMS) using Schneider Electric EcoStruxure software to ensure optimal performance of HVAC, lighting, and energy systems.",
        "Configuring and adjusting system settings in EcoStruxure to optimize energy consumption, improve comfort levels, and maintain safety standards within the facility.",
        "Conducting regular inspections and performance checks on BMS equipment and software, identifying areas for improvement and implementing updates as needed.",
        "Participating in the installation, testing, and commissioning of new BMS components and software upgrades, ensuring seamless integration with existing systems."
    ]
    
    },
    {
      title: "BMS Engineer",
      company_name: "Tridium",
      icon: niagara,
      iconBg: "#383E56",
      date: "Internship of 2 Months",
      points: [
        "Configured and maintained BMS using Tridium’s Niagara N4 software, integrating HVAC, lighting, and other systems for optimal building automation.",
        "Developed custom dashboards and user interfaces in Niagara N4 to provide intuitive control and real-time monitoring for operators.",
        "Troubleshot and resolved technical issues within Niagara N4, ensuring reliable performance and seamless system integration.",
        "Collaborated with cross-functional teams to implement energy-efficient control strategies, enhancing overall building performance."
    ]
     
    },
    {
      title: "Data Analyst",
      company_name: "BBVA Financial Enterprise",
      icon: bank,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Sept 2024",
      points: [
        "Utilized Jupyter notebooks for data analysis and manipulation, connecting to various databases to extract insights and streamline reporting processes.",
        "Developed and maintained backend applications in Java, supporting the automation of financial data processing and integration tasks.",
        "Leveraged AWS services for scalable data storage, processing, and deployment of machine learning models, enhancing data-driven decision-making capabilities.",
        "Deployed applications and managed containerized services using Kubernetes, ensuring high availability and efficient resource management for data pipelines.",
        "Implemented CI/CD pipelines using Jenkins, automating the deployment and testing of data processing workflows to improve development efficiency.",
        "Created data visualizations and dashboards to present complex data insights to stakeholders, utilizing ETL processes to transform raw data into actionable intelligence."
    ]    
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sacbe proved me wrong.",
      name: "Sara Lee",
      designation: "Data Administrator",
      company: "BBVA",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sac does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Schneider",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sacbe optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Manager",
      company: "Logen",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Uber Clone",
      description:
        "A web-based platform that connects users with drivers for on-demand rides, allowing real-time ride booking, tracking, and seamless payment for convenient urban transportation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: uber,
      source_code_link: "https://github.com/",
    },
    {
      name: "SaaS App",
      description:
        "A cloud-based platform that enables businesses to access and manage software applications online, offering scalable solutions, automated updates, and seamless integration to streamline operations and enhance productivity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: saas,
      source_code_link: "https://github.com/",
    },
    {
      name: "Healtcare Platform",
      description:
        "A web-based healthcare platform that allows patients to book appointments, consult with doctors remotely, access medical records, and manage treatments, providing a seamless and secure solution for personalized healthcare services.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: healtcare,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };