import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {

    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Selection */}
            <ThemeToggle/>

            {/* Background */}  
            <StarBackground />

            {/* NavBar */}
            <NavBar />
            
            {/* Main */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
            </main>

            {/* Footer */}

        </div>
    );
}