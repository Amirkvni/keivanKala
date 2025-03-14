"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "./NextJsImage";
import image1 from "@/../public/images/c1.jpg";
import image2 from "@/../public/images/c2.jpg";
import image3 from "@/../public/images/c3.jpg";
import Image from "next/image";

function LightBox({ mainImage, pictures }) {
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex justify-center items-center h-80">
        <Image
          width={400}
          height={400}
          src={mainImage}
          className="w-75"
          onClick={() => setOpen(true)}
        />
      </div>

      <div className="flex gap-x-4 [&>img]:w-20 [&>img]:h-20 [&>img]:border justify-center">
        {pictures.map((pic) => (
          <Image
            key={Math.random()}
            width={500}
            height={500}
            src={pic}
            onClick={() => setOpen(true)}
            className="border border-gray-200 px-1 rounded-lg"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[image1, image2, image3]}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}

export default LightBox;
