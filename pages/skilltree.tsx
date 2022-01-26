import { FunctionComponent } from "react";
import Layout from "../src/components/layout";

interface SkillProps{}

const Skillset:FunctionComponent<SkillProps> = () => {
    return(
        <Layout title="Skilltree">
            <h1>Skilltree</h1>
        </Layout>
    )
}

export default Skillset;