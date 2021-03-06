import { FunctionComponent } from "react";
import Header from "../src/components/header/header";
import Intro from "../src/components/home/intro";
import Layout from "../src/components/layout";
import Work from "../src/components/home/work";
import ContactUs from "../src/components/home/contact";
import Skill from "../src/components/home/skill";
import Footer from "../src/components/footer/footer";

interface HomeProps{
    base?:string,
}

const Home:FunctionComponent<HomeProps> = () => {
    return(
        <Layout title="Introduction" layout="">
            <Intro />
            <Work />
            <Skill />
            <ContactUs />
            <Footer />
        </Layout>
    )
}

export default Home;