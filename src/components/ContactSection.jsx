import { Mail, MapIcon } from "lucide-react";
import { FaHackerrank, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import {  SiLeetcode } from "react-icons/si";
import { cn } from "@/lib/utils";
import { TbSend } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);
        setTimeout(()=>{
            toast({
                title: "Message Sent!",
                description: "Thanks for your message. I'll get back to you ASAP!"
            });
            setIsSubmitting(false);
        }, 1000)
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="mx-auto container max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:sampreeth.careers@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        sampreeth.careers@gmail.com
                                    </a>
                                </div>
                            </div>  

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Bengaluru, Karnataka
                                    </a>
                                </div>
                            </div>  
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Let's connect on all platforms!
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/sam-sampreeth/" target="_blank" className="hover:text-primary transition-colors duration-300">
                                    <FiLinkedin />
                                </a>
                                <a href="https://x.com/sampreethhhh" target="_blank" className="hover:text-primary transition-colors duration-300">
                                    <FaXTwitter/>
                                </a>
                                <a href="https://leetcode.com/u/sam-sampreeth/" target="_blank" className="hover:text-primary transition-colors duration-300">
                                    <SiLeetcode />
                                </a>
                                <a href="https://www.hackerrank.com/profile/sampreethhhh" target="_blank" className="hover:text-primary transition-colors duration-300">
                                    <FaHackerrank />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">
                            Send me a message!
                        </h3>

                        <form className="space-y-6">
                            <div className="text-left">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 px-5">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Name goes here ..."/>
                            </div>

                            <div className="text-left">
                                <label htmlFor="email" className="block text-sm font-medium mb-2 px-5">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="abc@domain.ext"/>
                            </div>

                            <div className="text-left">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 px-5">Your Message</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="What do you want to talk about?"/>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                                ""
                            )}>
                                {isSubmitting ? "Sending..." : "Submit your message"} 
                                <TbSend size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};