import Layout from "../src/components/layout";
import { FunctionComponent } from "react";
import Instagram from "instagram-web-api";
import { instaID, instaPW } from "../utils/backend_url";

interface ComicProps{}

const Comic:FunctionComponent<ComicProps> = () => {
    // const client = new Instagram({ instaID, instaPW });

    // const client = new Instagram({
    //     username: process.env.IG_USERNAME,
    //     password: process.env.IG_PASSWORD,
    // })

    // const instaLogin = async(req,res) => {
    //     try {
    //         // attempt to log in to Instagram
    //         await client.login()
    //     } catch (err) {
    //         // throw an error if login to Instagram fails
    //         console.log("Something went wrong while logging into Instagram", err)
    //     }
    // } 

    return(
        <Layout title="Comic">
            <h1>Comic</h1>

            <p>test</p>
        </Layout>
    )
}

export default Comic;