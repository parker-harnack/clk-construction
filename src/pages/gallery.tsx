import React from "react";
import Gallery from "components/Gallery";
import ViewLayout from "components/ViewLayout";
import Head from "next/head";
import TopBar from "views/TopBar";

const GALLERY_PATH = "/tmp/images/gallery";
const IMAGE_FILES = [
  "IMG_9864.PNG",
  "IMG_9865.PNG",
  "IMG_9866.PNG",
  "IMG_9867.PNG",
  "IMG_9868.PNG",
  "IMG_9869.PNG",
  "IMG_9870.PNG",
  "IMG_9871.PNG",
  "IMG_9872.PNG",
  "IMG_9873.PNG",
  "IMG_9874.PNG",
  "IMG_9875.PNG",
  "IMG_9876.PNG",
  "IMG_9877.PNG",
  "IMG_9878.PNG",
  "IMG_9879.PNG",
  "IMG_9880.PNG",
  "IMG_9881.PNG",
  "IMG_9882.PNG",
  "IMG_9883.PNG",
];

const GalleryPage = () => {
  const images = IMAGE_FILES.map((f) => `${GALLERY_PATH}/${f}`);
  return (
    <>
      <Head>
        <title>Gallery | CLK Construction</title>
      </Head>
      <TopBar />
      <ViewLayout>
        <div className="max-w-6xl mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Project Gallery
          </h1>
          <Gallery images={images} />
        </div>
      </ViewLayout>
    </>
  );
};

export default GalleryPage;
