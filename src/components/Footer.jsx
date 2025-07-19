import { ArrowUp } from "lucide-react";
import { PiFlowerFill } from "react-icons/pi";

export const Footer = () => {
    return (
    <footer className="w-full px-6 py-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Message */}
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-2xl font-bold flex items-center gap-2 justify-center">
            Thanks for stopping by!
            <PiFlowerFill />
          </h2>
          <p className="text-muted-foreground text-sm">
            Made with care, caffeine, and a good playlist.
          </p>
          <p className="text-muted-foreground text-sm">
            Sampreeth S M &copy;  {new Date().getFullYear()}
          </p>

        </div>
        <div className="gap-3 flex flex-col items-center  mt-30">
            <a href="#hero">
                <span className="text-sm text-muted-foreground mb-2"> Top </span>
                <ArrowUp className="h-5 w-5 text-primary" />
            </a>
            
        </div>

        {/* Right: Links */}
        <div className="flex gap-12 text-sm">
          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Contact me</h3>
            <a href="mailto:sampreeth.careers@gmail.com" className="hover:text-primary underline underline-offset-4">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sam-sampreeth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Navigation</h3>
            <a href="/" className="hover:text-primary underline underline-offset-4">
              Home
            </a>
            <a href="#about" className="hover:text-primary underline underline-offset-4">
              About
            </a>
            <a href="#skills" className="hover:text-primary underline underline-offset-4">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary underline underline-offset-4">
              Projects
            </a>
            <a href="/Resume.pdf" target="_blank" className="hover:text-primary underline underline-offset-4">
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
