import { FiGithub, FiLink2, FiArrowUpRight } from "react-icons/fi";


const projects = [
    {
        id: 1,
        title: "NFT Marketplace Using Blockchain",
        description: "A decentralized platform to mint, buy, and sell NFTs using Ethereum, IPFS, and MetaMask.",
        image: "/projects/nft-marketplace.jpg",
        tags: ["Solidity", "Tailwind CSS", "Metamask"],
        demoUrl: "https://github.com/sam-sampreeth/NFT-Marketplace",
        githubUrl: "https://github.com/sam-sampreeth/NFT-Marketplace",
    },
    {
        id: 2,
        title: "WhatsApp Chat Analyzer",
        description: "Streamlit app that visualizes WhatsApp chats with user stats, word clouds, and interactive charts.",
        image: "/projects/chat-analyzer.jpeg",
        tags: ["Python", "Streamlit", "Plotly"],
        demoUrl: "https://whatsapp-chat-metrics.streamlit.app/",
        githubUrl: "https://github.com/sam-sampreeth/chat-analyzer",
    },
    {
        id: 3,
        title: "SkillHive: Learning Nexus",
        description: "An e-learning platform with role-based access and structured learning modules for skill mastery.",
        image: "/projects/skillhive.png",
        tags: ["Angular", "TypeScript", "Figma"],
        demoUrl: "https://github.com/sam-sampreeth/Infosys-Internship-Project",
        githubUrl: "https://github.com/sam-sampreeth/Infosys-Internship-Project",
    },
    {
        id: 4,
        title: "Aegis: The Password Manager",
        description: "Securely manage and store login credentials with a full-stack password manager.",
        image: "/projects/aegis.png",
        tags: ["MongoDB", "React", "Node.js"],
        demoUrl: "https://github.com/sam-sampreeth/aegis",
        githubUrl: "https://github.com/sam-sampreeth/aegis",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured 
                    <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Some of my recent projects. Turning ideas into impactful, functional, and meaningful applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/15 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <FiLink2 size={20}/>
                                    </a>
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <FiGithub size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/sam-sampreeth" className="w-fit cosmic-button flex items-center mx-auto gap-2" target="_blank">
                        Check out my GitHub <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
};