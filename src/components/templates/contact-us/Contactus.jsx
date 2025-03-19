import React from "react";
import ContactAdresses from "./ContactAdresses";
import ContactForm from "./ContactForm";

function Contactus() {
  return (
    <>
      <div className="border rounded-lg p-3 mt-[130px] container mx-auto w-[1000px]">
        <h3 className="border-b-3 border-b-green-300 w-fit">تماس با ما</h3>
        <div className="flex gap-x-3 mt-3">
          <ContactForm />
          <ContactAdresses />
        </div>
      </div>
    </>
  );
}

export default Contactus;
