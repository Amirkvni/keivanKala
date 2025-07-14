import React from "react";
import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
function Spinner() {
  return (
    <>
      <Header />
      <div className="container mx-auto  ">
        <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Spinner;
