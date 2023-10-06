import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

function Contact(){
  return(
    <Fragment>
      <ContactForm />
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Kepp in touch"/>
      </Head>
    </Fragment>
  )
}

export default Contact;