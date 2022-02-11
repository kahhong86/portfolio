import { FunctionComponent } from "react";
import Header from "../src/components/header/header";
import Layout from "../src/components/layout";
import { WorkList } from "../src/components/past-experiences/worklist";
import Image from "next/image";
import { assetsUrl } from "../utils/backend_url";

const PastExperiences:FunctionComponent = () => {
    return(
        <Layout title="Past Experiences">
            <div className="mx-auto max-w-screen-xl md:px-20">
                <h1 className="mb-5">Past Experiences</h1>
                {WorkList.map(({company,snippet,date,role,companyLogo},index)=>{
                    return(
                        <div key={index} className="py-8 border-b border-grey md:flex">
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
            </div>
            
        </Layout>
    )
}

export default PastExperiences;