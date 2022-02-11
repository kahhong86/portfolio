import { FunctionComponent } from "react";
import Image from "next/image";
import { assetsUrl } from "../../../utils/backend_url";
import Link from "next/link";

interface IntroProps{
}

const Intro:FunctionComponent<IntroProps> = () => {
    return(
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center">
                <div className="md:flex pb-10">
                    <div className="md:flex-1 block md:inline-block text-center">
                        <Image 
                            width="500"
                            height="500"
                            src={assetsUrl + "/logo-trans.png"}
                            alt="Home"
                        />
                    </div>
                    <div className="md:flex-1 flex justify-center items-center">
                        <div className="text-center md:text-left md:pr-10">
                            <h1 className="text-4xl my-5 font-bold">Welcome to <br />   {`Kah Hong's Domain`}</h1>
                            <p>
                                {`I'm a frontend developer since 2009. Graduated in Malaysia and started working in Singapore. Started off as an UI/UX designer, visual designer during my internship. Then found my line of work in frontend development where I can still put my visual and UI design skills on the website. `}
                            </p>
                            <Link href="https://www.linkedin.com/in/kah-hong-cheong-1b478130/">
                                <a className="mt-5 inline-block">
                                    <Image 
                                        width="48"
                                        height="48"
                                        alt="Linkedin"
                                        src={assetsUrl + "/icons/ico-linkedin.png"}
                                    />
                                </a>
                            </Link>
                            <Link href="https://github.com/kahhong86">
                                <a className="mt-5 inline-block ml-2">
                                    <Image 
                                        width="48"
                                        height="48"
                                        alt="Github"
                                        src={assetsUrl + "/icons/ico-github.png"}
                                    />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/kahhong86/">
                                <a className="mt-5 inline-block ml-2">
                                    <Image 
                                        width="48"
                                        height="48"
                                        alt="Github"
                                        src={assetsUrl + "/icons/ico-instagram.png"}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;