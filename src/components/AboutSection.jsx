import { Briefcase, GraduationCap } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="space-y-6 text-center">
                    <h1 className="text-3xl font-bold">Sampreeth S M</h1>
                    <p className="text-primary font-medium text-xl">Full Stack Developer, Based in Bengaluru</p>
                    <p className="text-foreground mx-2-2xl mx-auto font-medium">
                        Hi there! I'm  a passionate and driven Computer Science and Engineering student currently in my final year at Dayananda Sagar University, Bengaluru. With a solid foundation in programming and software development, I have spent the past few years exploring and building projects that combine functionality with user-centric design.
                    </p>
                </div>

                <div className="mt-7 text-left flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/15 transition-colors duration-300"
                    target="_blank" rel="noopener noreferrer">
                        Download CV
                    </a>
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>
                </div>

                <div className="mt-12 text-left">
                    <h2 className="text-xl font-semibold mb-4">
                        Proficiency
                    </h2>
                    <div className="flex flex-wrap gap-2 cursor-pointer">
                        {[
                            "Web Development",
                            "Frontend Development",
                            "Backend Development",
                            "UI/UX Design",
                            "REST API Integration",
                            "Framer",
                            "Figma",
                            "Version Control (Git)",
                            "Responsive Design",
                            "Database Management"
                        ].map(skill => (
                            <span key={skill} className="bg-primary/50 text-sm px-3 py-1 rounded-xl text-foreground hover:scale-105 transition-transform duration-200 ease-in-out">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Experience */}
                <div className="mt-12 text-left">
                    <h2 className="text-foreground font-semibold text-xl leading-tight">Experience</h2>
                </div>
                <div className="grid grid-cols-[40px_1fr] gap-x-2 ">
                    
                    {/* Experience 1 */}
                    <div className="flex flex-col items-center gap-1 pt-4">
                        <Briefcase className="text-foreground w-5 h-5" />
                        <div className="w-[1.5px] bg-[#413168] h-2 grow" />
                    </div>
                    <div className="flex flex-col py-3 text-left">
                        <p className="text-foreground text-base font-medium leading-normal">Angular Full Stack Intern</p>
                        <p className="text-[#a190cb] text-base font-normal leading-normal">Infosys Springboard, Remote (Dec 2024 - Feb 2025)</p>
                    </div>

                    {/* Experience 2 */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[1.5px] bg-[#413168] h-3" />
                        <Briefcase className="text-foreground w-5 h-5" />
                    </div>
                    <div className="flex flex-col py-3 text-left">
                        <p className="text-foreground text-base font-medium leading-normal">Independent Full Stack Developer</p>
                        <p className="text-[#a190cb] text-base font-normal leading-normal">Remote (2023 - Present)</p>
                    </div>
                </div>  

                 {/* Education */}

                 <div className="mt-10 text-left">
                        <h2 className="text-foreground font-semibold text-xl leading-tight">
                            Education
                        </h2>
                 </div>
                 <div className="grid grid-cols-[40px_1fr] gap-x-2 ">
                    {/* Education 1 */}
                    <div className="flex flex-col items-center gap-1 pt-4">
                        <GraduationCap className="text-foreground w-5 h-5" />
                        <div className="w-[1.5px] bg-[#413168] h-2 grow" />
                    </div>
                    <div className="flex flex-col py-3 text-left">
                        <p className="text-foreground text-base font-medium leading-normal">
                        B.Tech in Computer Science and Engineering
                        </p>
                        <p className="text-[#a190cb] text-base font-normal leading-normal">
                        Dayananda Sagar University, Bengaluru (2022 - 2026)
                        </p>
                    </div>

                    {/* Education 2 */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[1.5px] bg-[#413168] h-3" />
                        <GraduationCap className="text-foreground w-5 h-5" />
                    </div>
                    <div className="flex flex-col py-3 text-left">
                        <p className="text-foreground text-base font-medium leading-normal">
                        Pre-University Degree (Grade 12) in PCMCs
                        </p>
                        <p className="text-[#a190cb] text-base font-normal leading-normal">
                        Seshadripuram Composite PU College, Bengaluru (2020 - 2022)
                        </p>
                    </div>
                    </div>
            </div>
        </section>
    );
}