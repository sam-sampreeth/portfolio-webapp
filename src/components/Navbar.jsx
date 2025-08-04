import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";




const navbarItems = [
    {name: "Home", href: '#hero'},
    {name: "About", href: '#about'},
    {name: "Skills", href: '#skills'},
    {name: "Projects", href: '#projects'},
    {name: "Contact", href: '#contact'},
]
export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return(
         <nav className={cn(" w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="/">
                    <span className="relative z-10">
                        <span className="text-glow">Sampreeth's</span> <span className="text-foreground">Portfolio</span>
                    </span>
                </a>

                {/* Desktop NavBar */}
                <div className="hidden md:flex space-x-8">
                    {navbarItems.map((item, key) => (
                        <a href={item.href} key={key} className="text-foreground/85 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile NavBar */}
                <button className="md:hidden p-2 text-foreground z-50 mr-6 " aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
                <div
  className={cn(
    "fixed inset-9 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
    "transition-all duration-300 md:hidden",
    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  )}
>
  <div className="flex flex-col space-y-8 text-xl items-center">
    {navbarItems.map((item, key) => (
      <a
        href={item.href}
        key={key}
        className="text-foreground/85 hover:text-primary transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </a>
    ))}
    {/* ⬇️ Add theme toggle INSIDE the mobile menu */}
  </div>
</div>


            </div>
        </nav>
    );
};