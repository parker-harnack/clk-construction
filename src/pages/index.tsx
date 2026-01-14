import React from "react";

/** Components */
import {
  IndexView,
  ContactView,
  ServicesView,
  Footer,
  TopBar,
  AboutView,
  ContactInfoView,
} from "views";
import MenuButton from "components/MenuButton";

import Head from "next/head";
import {
  Service,
  createClient,
  getServices,
  getOptions,
  SelectOptions,
} from "lib/content";

interface IndexPageProps {
  services: Service[];
  options: SelectOptions;
}

export const IndexPage = ({ services, options }: IndexPageProps) => {
  // Prepare menu options
  const menuOptions = [
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "#contact" },
    // Add more options as needed
  ];
  return (
    <>
      <Head>
        <title>CLK Construction</title>
      </Head>
      <main className="bg-container">
        <div className="flex justify-between items-center px-4 py-2">
          <TopBar />
        </div>
        <IndexView />
        <ServicesView services={services} />
        <AboutView />
        {/* <ContactView options={options} /> */}
        <ContactInfoView />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

export async function getStaticProps(params, previewData) {
  const client = createClient(previewData);

  const services = await getServices(client);

  const options: SelectOptions = getOptions(client);

  return {
    props: {
      services,
      options,
    },
    // revalidate: 60,
  };
}
