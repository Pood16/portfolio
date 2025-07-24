import { Link } from "react-router";
import { Github, Linkedin, Mail } from "lucide-react"


export default function Footer(){
    const socialLinks = [
        { icon: Github, href: "https://github.com/Pood16", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/ouirghane", label: "LinkedIn" },
        { icon: Mail, href: "mailto:lahcenwirghanec11@gmail.com", label: "Gmail" },
    ]
    return (
        <footer className="flex justify-end p-3 border-t border-[#455a64]">
            <div className="flex items-center">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className="text-[#607d8b] border-l px-2 border-[#455a64] hover:text-[#4dd0e1] transition-colors duration-200 hover:-translate-y-1 transform"
                        aria-label={social.label}
                        target="_blank"
                    >
                    <social.icon size={20} />
                    </a>
                ))}
            </div>
        </footer>
    )
}






