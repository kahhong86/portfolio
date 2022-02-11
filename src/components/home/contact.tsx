import { FunctionComponent } from "react";
import Link from "next/link";

interface ContactProps{}

const ContactUs:FunctionComponent<ContactProps> = () => {
    return(
        <div className="mx-auto max-w-screen-xl mb-10 pt-16 text-center">
            <h2>Contact Us</h2>
            <p>Feel free to drop me an <Link href="mailto:kahhong86@gmail.com"><a className="underline">email</a></Link> if you any enquiries. Currently the site still in progress. Be sure to check it out when is fully launched.</p>
        </div>
    )
}

export default ContactUs;