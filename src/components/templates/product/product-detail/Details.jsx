import React from "react";

function Details({ product }) {
  return (
    <div className="mt-8">
      <p className="border-green-400 border-b-2 my-6 w-fit">مشخصات کلی</p>
      <div className="flex flex-col gap-y-5">
        {Object.entries(product.attributes).map(([key, value]) => (
          <>
            <div className="flex ">
              <div className=" w-1/5">{key}</div>
              <div className=" border-b-2 border-b-gray-200 w-full pb-2">
                {value}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Details;
