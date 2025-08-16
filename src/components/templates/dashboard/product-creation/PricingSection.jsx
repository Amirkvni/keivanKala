import React from "react";

function PricingSection({ setMainProduct, mainProduct }) {
  console.log(mainProduct);

  const changePrice = (type, value) => {
    const newValue = Number(value.replace(/,/g, ""));

    if (type === "mainPrice") {
      setMainProduct({
        ...mainProduct,
        price: newValue,
      });
    }
    if (type === "discountPrice") {
      setMainProduct({
        ...mainProduct,
        secondPrice: mainProduct.price - newValue,
        discount: Math.round((newValue * 100) / mainProduct.price),
      });
    }
    if (type === "discount") {
      const newSecondPrice = mainProduct.price * (1 - newValue / 100);
      setMainProduct({
        ...mainProduct,
        secondPrice: newSecondPrice,
        discount: newValue,
      });
    }
  };
  return (
    <div className="[&>div]:flex dashboard-box-shadow ">
      <span className="font-extrabold text-lg">قیمت گذاری</span>
      <div className="mt-4 flex-col gap-y-6 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center [&>div>input]:outline-none">
        <div>
          <label htmlFor="">قیمت اصلی :</label>
          <input
            type="text"
            className="edit-profile-input"
            value={mainProduct.price?.toLocaleString() || ""}
            onChange={(e) => {
              changePrice("mainPrice", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor=""> میزان تخفیف به تومان:</label>
          <input
            type="text"
            className="edit-profile-input"
            value={
              mainProduct.secondPrice
                ? (mainProduct.price - mainProduct.secondPrice).toLocaleString()
                : 0
            }
            onChange={(e) => {
              changePrice("discountPrice", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">درصد تخفیف(%) :</label>
          <input
            min="0"
            max="100"
            type="number"
            className="edit-profile-input"
            value={mainProduct.discount || 0}
            onChange={(e) => {
              changePrice("discount", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor=""> قیمت نهایی :</label>
          <input
            type="text"
            className="edit-profile-input"
            value={
              mainProduct.secondPrice
                ? mainProduct.secondPrice.toLocaleString()
                : mainProduct.price?.toLocaleString()
            }
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
