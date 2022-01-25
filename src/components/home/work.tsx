import { FunctionComponent } from "react";
import { WorkList } from "../past-experiences/worklist";
import Link from "next/link";
import Image from "next/image";
import { assetsUrl } from "../../../utils/backend_url";

interface WorkProps{}

const Work:FunctionComponent<WorkProps> = () => {
    return(
        <div>
            <h2 className="my-5">Past Experiences</h2>
            {[...WorkList].reverse().slice(0,3).map(({company,snippet,date,role,companyLogo},index)=>{
                return(
                    <div key={index} className="mb-5 pb-5 border-b border-grey md:flex">
                        <div className="md:flex-1">
                            <Image 
                                width="100"
                                height="100"
                                src={assetsUrl + companyLogo}
                                alt={company}
                            />
                            <div className="text-lg font-bold">{company}</div>
                            <div>{date}</div>
                            <div>{role}</div>    
                        </div>
                        <div className="mt-5 md:mt-0 md:flex-1">
                            {snippet}
                        </div>
                    </div>
                )
            })}
            <div className="mb-10 pb-10 border-b-2">
                <Link href="/past-experiences">
                    <a className="inline-block text-sky-500">
                        Click here
                    </a>
                </Link> for more of my past experiences...
            </div>
        </div>
    )
}

export default Work;