import Layout from "../src/components/layout";
import { FunctionComponent } from "react";
import InstagramEmbed from "react-instagram-embed"

interface ComicProps{}

const Comic:FunctionComponent<ComicProps> = () => {
    return(
        <Layout title="Comic">
            <h1>Comic</h1>
            <InstagramEmbed
            url='https://www.instagram.com/kahhong86/'
            clientAccessToken='899020530779900|41230abd83f515d346f0883d5a5e2e86'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
            a
        </Layout>
    )
}

export default Comic;