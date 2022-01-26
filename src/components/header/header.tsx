import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationItem } from "./navigation-item";
import Image from "next/image";
import { assetsUrl } from "../../../utils/backend_url";

interface HeaderProps{
}

const Header:FunctionComponent<HeaderProps> = () => {
    const router = useRouter();

    return(
        <nav className="bg-black block fixed bottom-52 md:bottom-auto md:top-0 right-0 w-14 md:w-full z-10">
            <div className="max-w-screen-xl mx-auto">
                {NavigationItem.map(({name,url,small_name},index) => {
                    return(
                        <div className="md:inline-block" key={index}>
                            <Link href={url}>
                                <a className={`text-white block text-center p-2 md:p-5 ${router.pathname == `${url}` ? "bg-zinc-900" : ""}`}>
                                    <span className="hidden md:inline-block">{name}</span>
                                    <div className="md:hidden flex justify-center">
                                        <Image 
                                            height="48"
                                            width="48"
                                            alt=""
                                            src={assetsUrl + small_name}
                                        />
                                    </div>
                                </a>    
                            </Link>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Header;