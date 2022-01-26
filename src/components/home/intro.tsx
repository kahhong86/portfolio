import { FunctionComponent } from "react";
import Image from "next/image";
import { assetsUrl } from "../../../utils/backend_url";

interface IntroProps{
}

const Intro:FunctionComponent<IntroProps> = () => {
    return(
        <div className="">
            <div className="text-center">
                <div className="md:flex border-b-2 pb-10">
                    <div className="md:flex-1 block md:inline-block text-center">
                        <Image 
                            width="200"
                            height="200"
                            src={assetsUrl + "/logo-trans.png"}
                            alt="Home"
                        />
                    </div>
                    <div className="md:flex-1">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl my-5 font-bold">Welcome to <br />   {`Kah Hong's Domain`}</h1>
                            <p>
                                {`I'm a frontend developer since 2009. Graduated in Malaysia and started working in Singapore. Started off as an UI/UX designer, visual designer during my internship. Then found my line of work in frontend development where I can still put my visual and UI design skills on the website. `}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;