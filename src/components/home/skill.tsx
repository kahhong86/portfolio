import { FunctionComponent } from "react";
import Link from "next/link";
import { assetsUrl } from "../../../utils/backend_url";
import Image from "next/image";

interface SkillProps{}

const Skill:FunctionComponent <SkillProps> = () => {
    return(
        <div className="max-w-screen-xl mx-auto py-20 border-b md:px-32">
            <h1 className="text-center block">Skillset</h1>
            <div className="flex mt-10">
                <div className="md:flex-1">
                    <p className="mb-10">
                        I specialise with large global project with different 
                        countries, languages and reading direction. Whether is 
                        Thai languages that needs different wrapping of content,
                        content of english whether is UK or US or even middle-eastern 
                        country that read from right to left.  
                    </p>
                    <p>
                        If there is any enquiries, you can <Link href="mailto:kahhong86@gmail.com"><a className="underline">email</a></Link> me by clicking on the link.
                    </p>
                </div>
                <div className="md:flex-1 text-center">
                    <Image 
                        width="400"
                        height="175"
                        alt="avatar"
                        src={assetsUrl+"/home/avatar.png"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skill;