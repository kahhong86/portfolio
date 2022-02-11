import { FunctionComponent } from "react";

interface FooterProps{}

const Footer:FunctionComponent<FooterProps> = () => {
    return(
        <div className="mx-auto max-w-screen-xl text-center">
            <div className="text-xs pb-5 italic text-gray-400">&copy; {(new Date().getFullYear())} Kah Hong</div>
        </div>
    )
}

export default Footer;