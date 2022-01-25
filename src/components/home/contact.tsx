import { FunctionComponent } from "react";
import Link from "next/link";

interface ContactProps{}

const ContactUs:FunctionComponent<ContactProps> = () => {
    return(
        <div className="mb-10">
            <h2>Contact Us</h2>
            <p>Feel free to drop me an <Link href="mailto:kahhong86@gmail.com"><a className="underline">email</a></Link> if you any enquiries.</p>
        </div>
    )
}

export default ContactUs;