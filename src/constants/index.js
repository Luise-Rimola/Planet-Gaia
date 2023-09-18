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
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Person1,
    Person2,
    Person3,
    CEO,
    CFO,
    CTO

  } from "../assets";

  
  export const navLinks = [
    
    {
      id: "Co2stream",
      title: "CO2-Stream",
      url: "/co2stream", 
    },
    {
      id: "Co2tabelle",
      title: "CO2-Tabelle",
      url: "/co2tabelle", 
      
    },
   
    
  ];
  
 
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      title: "Ocean Clear",
      company_name: "Automatisierte Wasserreinigungstechnologie",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Unser Team entwickelte eine bahnbrechende automatisierte Wasserreinigungstechnologie, die dazu beitrug, die Ozeane von Verschmutzung zu befreien. Das Verfahren bestand aus mehreren Schritten, die es der Technologie ermöglichten, effizient und umweltfreundlich zu arbeiten."
      ],
    },
    {
      title: "Glowing Tree",
      company_name: "Automatisierte Baumpflanzungstechnologie",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Unser Team hat eine wegweisende automatisierte Baumpflanzungstechnologie entwickelt, die es ermöglicht, Wälder effizient und nachhaltig zu revitalisieren. Der Prozess besteht aus mehreren Schritten, die es der Technologie ermöglichen, die Baumpflanzung zu optimieren und eine gesunde Umwelt zu fördern",
      ],
    },
    {
      title: "Materials Cycle",
      company_name: "Automatisierte Mülltrennung",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Ein entscheidender Schritt im nachhaltigen Recyclingprozess ist die effektive Trennung verschiedener Arten von Abfällen. Hier kommen automatisierte Mülltrennungstechnologien zum Einsatz. Mithilfe moderner Sensoren und Bildverarbeitungssysteme können diese Technologien den Müll in Echtzeit analysieren und Wertstoffe wie Plastik, Metall und Papier von nicht recycelbaren Abfällen trennen. Dadurch wird nicht nur die Genauigkeit der Mülltrennung verbessert, sondern auch der Bedarf an manueller Sortierung reduziert, was Zeit und Kosten spart.",
      ],
    },
    {
      title: "Green Education",
      company_name: "Technologien bei der Wissensvermittlung",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "In der heutigen Zeit spielt Bildung eine entscheidende Rolle bei der Förderung einer nachhaltigen Entwicklung. Angesichts der zunehmenden Herausforderungen im Umwelt- und Klimabereich ist es wichtiger denn je, dass Bildungseinrichtungen und Lehrpläne das Bewusstsein für Nachhaltigkeit schärfen und Wissen über umweltfreundliche Praktiken vermitteln. Moderne Technologien bieten innovative Methoden und Lösungen, um Bildung für Nachhaltigkeit effektiver, ansprechender und global zugänglich zu gestalten. In diesem Text werden einige technologiebasierte Ansätze vorgestellt, die dazu beitragen, eine generationenübergreifende nachhaltige Denkweise zu fördern.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Marketing Director",
      name: "Emily Johnson",
      designation: "Chief Executive Officer",
      company: "",
      image: CEO,
    },
    {
      testimonial:
        "Marketing Director",
      name: "Jessica Martinez",
      designation: "Chief Financial Officer",
      company: "",
      image: CFO,
    },
    {
      testimonial:
        "Marketing Director",
      name: "Benjamin Evans",
      designation: "Chief Technology Officer",
      company: "",
      image: CTO,
    },
    {
      testimonial:
        "Marketing Director",
      name: "Olivia Scott",
      designation: "Marketing Director",
      company: "",
      image: Person1,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Michael Brown",
      designation: "Project Manager",
      company: "DEF Corp",
      image: Person2,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Isabella Rivera",
      designation: "Agricultural Scientist",
      company: "456 Enterprises",
      image: Person3,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
