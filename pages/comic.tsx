import Layout from "../src/components/layout";
import { FunctionComponent } from "react";

interface ComicProps{}

const Comic:FunctionComponent<ComicProps> = () => {
    return(
        <Layout title="Comic">
            <h1>Comic</h1>
        </Layout>
    )
}

export default Comic;