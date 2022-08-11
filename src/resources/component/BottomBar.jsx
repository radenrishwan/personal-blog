import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from "../assets/Icon"
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const BottomBar = () => {
    return <div className="shadow mt-[100px] bg-white border-opacity-10 border-0 border-t border-solid border-gray-400">
        <nav className="flex flex-row justify-between item-center container mx-auto px-[8rem] h-[12rem]">
            <div className="w-full flex justify-between py-6">
                <Icon />
                <div className="flex flex-col justify-start">
                    <p className="text-xl font-bold mb-2">Other Project</p>
                    <div className="flex gap-2 flex-col">
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "https://shortener.mohamadrishwan.me"}>URL Shortener</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "https://github.com/radenrishwan/seiormusic"}>Audio Player</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "https://about.mohamadrishwan.me"}>Portofolio</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "http://personal-blog-dcff3.web.app"}>Blog</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-xl font-bold mb-2">About Me</p>
                    <div className="flex gap-2 flex-col">
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "https://about.mohamadrishwan.me"}>Portofolio</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "https://www.linkedin.com/in/raden-mohamad-rishwan-1b1476213"}>Linkedin</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "http://github.com/radenrishwan"}>Github</p>

                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-xl font-bold mb-2">Link</p>
                    <div className="flex gap-2 flex-col">
                    <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "http://personal-blog-dcff3.web.app"}>Home</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "http://github.com/radenrishwan"}>Github</p>
                        <p className="text-md font-medium hover:text-green-400 cursor-pointer"
                            onClick={() => window.location.href = "https://about.mohamadrishwan.me"}>About</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex flex-row h-full w-full justify-start items-start content-start gap-5 mt-2">
                        <FontAwesomeIcon className="h-5 hover:text-green-400 cursor-pointer" 
                        onClick={() => window.location.href = "https://www.facebook.com/raden.muhamad.391"} icon={faFacebook} />
                        <FontAwesomeIcon className="h-5 hover:text-green-400 cursor-pointer" 
                        onClick={() => window.location.href = "https://www.instagram.com/radenrishwan"} icon={faInstagram} />
                        <FontAwesomeIcon className="h-5 hover:text-green-400 cursor-pointer" 
                        onClick={() => window.location.href = "http://www.github.com/radenrishwan"} icon={faGithub} />
                        <FontAwesomeIcon className="h-5 hover:text-green-400 cursor-pointer" 
                        onClick={() => window.location.href = "https://www.linkedin.com/in/raden-mohamad-rishwan-1b1476213"} icon={faLinkedin} />
                    </div>
                    <p className="text-md mb-2">
                        Copyright © 2022 Raden Mohamad Rishwan.
                    </p>
                </div>
            </div>
        </nav>
    </div>
}