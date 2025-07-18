import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in text-gradient">Hello! </span>
                        <span className="opacity-0 animate-fade-in-delay-2">I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-3">Sampreeth</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mx-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 pt-3">
                        I build smart, secure, and scalable web experiences. <br />
                        Currently open to internships and full-time roles in full-stack development, frontend engineering, and software development.
                    </p>
                    <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                        <a href="#projects" className="cosmic-button">
                            Check Out My Work!
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
}