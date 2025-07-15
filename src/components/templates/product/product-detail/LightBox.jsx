"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
function LightBox({ mainImage, pictures }) {
  console.log(pictures);

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex justify-center items-center h-80  overflow-hidden">
        <Image
          width={400}
          height={400}
          src={mainImage}
          className="w-75 rounded-lg"
          onClick={() => setOpen(true)}
          alt="mainPicture"
        />
      </div>

      <div className="flex gap-x-4 [&>img]:w-20 [&>img]:h-20 [&>img]:border justify-center  ">
        {pictures.map((pic, index) => (
          <Image
            key={Math.random()}
            width={500}
            height={500}
            src={pic}
            alt={`picture-${index}`}
            onClick={() => setOpen(true)}
            className="border border-gray-200 px-1 rounded-lg dark:border-gray-500 "
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: pictures[0] },
          { src: pictures[1] },
          { src: pictures[2] },
        ]}
      />
    </>
  );
}

export default LightBox;
