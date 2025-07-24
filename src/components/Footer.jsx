import { Link } from "react-router";
import { Github, Linkedin, Mail } from "lucide-react"


export default function Footer(){
    const socialLinks = [
        { icon: Github, href: "https://github.com/Pood16", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/ouirghane", label: "LinkedIn" },
        { icon: Mail, href: "mailto:lahcenwirghanec11@gmail.com", label: "Gmail" },
    ]
    return (
        <footer className="flex space-x-4 p-3 border-t border-[#455a64]">
            <span className="text-[#607d8b] text-sm border-r border-[#455a64] px-2">find me in</span>
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    className="text-[#607d8b] border-r px-2 border-[#455a64] hover:text-[#4dd0e1] transition-colors duration-200 hover:-translate-y-1 transform"
                    aria-label={social.label}
                    target="_blank"
                >
                <social.icon size={20} />
                </a>
            ))}
        </footer>
    )
}






