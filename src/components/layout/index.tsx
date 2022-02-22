import Head from 'next/head';
import { FunctionComponent } from "react";
import Header from "../header/header";

const Layout = ({children,title,layout="max-w-screen-xl"}) => {
    return(
        <div className="bg-base md:pt-12">
            <div className={`mx-auto ${layout}`}>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="pt-10 px-10 md:px-0 border-r-50 md:border-l-0 md:border-r-0 border-black md:border-transparent min-h-screen">
                    <Header/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;