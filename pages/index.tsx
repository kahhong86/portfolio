import { NextPage } from "next";
import { FunctionComponent } from "react";

interface HomeProps{
}

const Home:FunctionComponent<HomeProps> = () => {
    return(
        <div>
            <h1 className="bg-sky-500">Welcome to Prince</h1>
        </div>
    )
}

export default Home;