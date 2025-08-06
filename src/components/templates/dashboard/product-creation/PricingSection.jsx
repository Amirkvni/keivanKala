import React from "react";

function PricingSection({
  price = "",
  secondPrice = "",
  setMainProduct,
  mainProduct,
}) {
  const changePrice = (type, value) => {
    if (type === "mainPrice") {
      setMainProduct({
        ...mainProduct,
        price: Number(value),
      });
    }
    if (type === "secondPrice") {
      setMainProduct({
        ...mainProduct,
        secondPrice: Number(value),
      });
    }
  };
  return (
    <div className="[&>div]:flex dashboard-box-shadow ">
      <span className="font-extrabold text-lg">قیمت گذاری</span>
      <div className="mt-4 flex-col gap-y-6 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center [&>div>input]:outline-none">
        <div>
          <label htmlFor="">قیمت :</label>
          <input
            type="text"
            className="edit-profile-input"
            defaultValue={price.toLocaleString()}
            onChange={(e) => {
              changePrice("mainPrice", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor=""> قیمت تخفیف :</label>
          <input
            type="text"
            className="edit-profile-input"
            defaultValue={secondPrice.toLocaleString()}
            onChange={(e) => {
              changePrice("secondPrice", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">درصد تخفیف(%) :</label>
          <input
            type="text"
            className="edit-profile-input"
            defaultValue={secondPrice.toLocaleString()}
            onChange={(e) => {
              changePrice("discount", e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
