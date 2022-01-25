import { FunctionComponent } from "react";

interface FooterProps{}

const Footer:FunctionComponent<FooterProps> = () => {
    return(
        <div className="text-xs pb-5 italic text-gray-400">&copy; 2022 Kah Hong</div>
    )
}

export default Footer;