import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import contactimage from '/public/png/placeholder.png';
export const projectsData = [
    {
        id: 1,
        name: 'Online Job Portal',
        description: "Developed a job portal web application using the MERN stack, featuring user authentication, role-based access control, job listings,job manipulation, and resume uploading. Enhanced UX/UI with React Js, CSS,ThunderClient, Materia UI and React-Bootstrap.",
        tools: ['MongoDB', 'Express', 'React.js', 'Node.js', 'Bootstrap', 'CSS'],
        role: 'MERN Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-Commerce Website',
        description: "Built a complete e-commerce website featuring product listings, shopping cart functionality, payment integration, and admin panel for inventory management. Designed using React.js and integrated with Firebase for authentication.",
        tools: ['React.js', 'Firebase', 'CSS', 'Stripe API', 'React Router', 'Bootstrap'],
        role: 'MERN Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Shopify Product Scraper',
        description: "Developed a web application to scrape and display product information from Shopify stores in an organized format. The application includes XML reading, content summarization using LLMs, and a pre-scraping process to automate sitemap discovery.",
        features: [
            "Reads XML files to extract product links, images, and titles.",
            "Processes content with LLMs to summarize product descriptions in bullet points.",
            "Automates sitemap discovery by parsing robots.txt and XML sitemap."
        ],
        tools: ['Node.js', 'React', 'LLM API (e.g., ChatGPT)', 'JavaScript', 'HTML', 'CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',  // Add an appropriate image if available
    }
    ,
    {
        
            id: 4,
            name: 'Product Management App',
            description: "Developed a comprehensive product management application with Next.js and TypeScript. Integrated Firebase for image manipulation, enabling dynamic product image editing and storage. Implemented features for product listing, CRUD operations, and real-time updates, ensuring a streamlined management experience.",
            tools: ['Next.js', 'TypeScript', 'Firebase', 'React Bootstrap'],
            role: 'Full Stack Developer',
            code: '',  // Add GitHub repo link here if available
            demo: '',  // Add live demo link here if available
            image: ayla,  // Ensure 'ayla' points to the correct image file path
          },
          
    {
        
            
    id: 5,
    name: 'Contact Management App',
    description: "Built a robust backend for a contact management application using Express and Node.js. Implemented RESTful APIs for managing contacts, including features for creating, updating, deleting, and retrieving contacts. Focused on efficient data handling and secure user authentication, providing a reliable and scalable solution.",
    tools: ['Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    role: 'Backend Developer',
    code: '',  // Add GitHub repo link here if available
    demo: '',  // Add live demo link here if available
    image: contactimage,  // Ensure 'contactImage' points to the correct image file path
            
            
    }

];
