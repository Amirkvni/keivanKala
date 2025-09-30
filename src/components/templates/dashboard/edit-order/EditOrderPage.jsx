"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { priceFormatter } from "@/utils/priceFormatter";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function EditOrderPage({
  allProducts,
  orderProducts,
  user,
  userAddress,
  staus,
  orderId,
}) {
  const router = useRouter();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const [isShowSearchResult, setIsShowSearchResult] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isShowAllProducts, setIsShowAllProducts] = useState(false);
  const [orderProductsList, setOrderProductsList] = useState(
    orderProducts.map((p) => ({ ...p, quantity: Number(p.quantity) }))
  );
  const [customer, setCustomer] = useState({
    _id: user._id,
    firstname: user.firstname || "",
    lastname: user.lastname || "",
    phone: user.phone || "",
    email: user.email || "",
  });
  const [orderStatus, setOrderStatus] = useState(staus);

  const [searchQuery, setSearchQuery] = useState("");
  const [address, setAddress] = useState({
    _id: userAddress._id,
    province: userAddress.province || "",
    city: userAddress.city || "",
    district: userAddress.district || "",
    plaque: userAddress.plaque || "",
    unit: userAddress.unit || "",
    postalCode: userAddress.postalCode || "",
    fullAddress: userAddress.fullAddress || "",
  });
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const changeQuantity = (productId, delta) => {
    setOrderProductsList((prev) =>
      prev.map((p) =>
        p._id === productId
          ? {
              ...p,
              quantity: Math.max(1, Number(p.quantity) + delta),
            }
          : p
      )
    );
  };
  const totalPrice = orderProductsList.reduce((sum, product) => {
    const productData = allProducts.find((p) => p._id === product._id);
    if (!productData) return sum;

    const price = productData.secondPrice || productData.price;
    return sum + price * Number(product.quantity);
  }, 0);
  const handleProductChange = (e, product) => {
    const checked = e.target.checked;
    if (checked) {
      setOrderProductsList((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setOrderProductsList((prev) => prev.filter((p) => p._id !== product._id));
    }
    console.log(product);
  };
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };
  const getOrderProductsChanges = () => {
    const initialProducts = orderProducts.map((p) => ({
      _id: p._id,
      quantity: Number(p.quantity),
      persianName: p.persianName,
    }));

    const currentProducts = orderProductsList.map((p) => ({
      _id: p._id,
      quantity: Number(p.quantity),
      persianName: p.persianName,
    }));

    let changes = [];

    initialProducts.forEach((initP) => {
      const current = currentProducts.find((c) => c._id === initP._id);

      if (!current) {
        changes.push({ _id: initP._id, type: "removed" });
      } else if (current.quantity !== initP.quantity) {
        changes.push({
          _id: initP._id,
          type: "updated",
          quantity: current.quantity,
          persianName: current.persianName,
        });
      }
    });

    currentProducts.forEach((curP) => {
      const exists = initialProducts.some((i) => i._id === curP._id);
      if (!exists) {
        changes.push({
          _id: curP._id,
          type: "added",
          quantity: curP.quantity,
          persianName: curP.persianName,
        });
      }
    });

    return changes;
  };

  const updateOrderHandler = async () => {
    const productsChanges = getOrderProductsChanges();

    const customerChanges = Object.keys(customer).reduce((acc, key) => {
      const value = customer[key];
      if (value && value !== user[key] && value.trim() !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});

    const addressChanges = Object.keys(address).reduce((acc, key) => {
      const value = address[key];
      if (value !== userAddress[key] && value.trim() !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});

    const statusChange = staus !== orderStatus ? orderStatus : null;

    const payload = {
      productsChanges: productsChanges.length > 0 ? productsChanges : null,
      customerChanges:
        Object.keys(customerChanges).length > 0 ? customerChanges : null,
      addressChanges:
        Object.keys(addressChanges).length > 0 ? addressChanges : null,
      statusChange,
    };

    if (
      !payload.productsChanges &&
      !payload.customerChanges &&
      !payload.addressChanges &&
      !payload.statusChange
    ) {
      console.log("هیچ تغییری برای آپدیت وجود ندارد!");
      return;
    }

    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "خطا در بروزرسانی سفارش!",
        });
      }

      const data = await res.json();
      Swal.fire({
        icon: "success",
        title: "موفقیت آمیز",
        text: "سفارش با موفقیت بروزرسانی شد!",
        confirmButtonText: "تایید",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: err.message,
      });
    }
  };

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setIsShowSearchResult(false);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.persianName
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase())
    );

    setFilteredProducts(filtered);
    setIsShowSearchResult(filtered.length > 0);
  }, [searchQuery, allProducts]);
  const addProduct = (product) => {
    setOrderProductsList((prev) => {
      const existingProduct = prev.find((p) => p._id === product._id);
      if (existingProduct) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsShowSearchResult(false);
    setSearchQuery("");
  };
  const deleteFromOrderHandler = (id) => {
    setOrderProductsList((prev) => prev.filter((p) => p._id !== id));
  };
  const deleteCommentHandler = async (id) => {
    const result = await Swal.fire({
      title: "آیا از حذف این سفارش مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/orders", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: id }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", "سفارش با موفقیت حذف شد.", "success");
        router.push("/dashboard/all-orders");
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };
  return (
    <div className="p-12 ">
      <span className="text-xl font-bold">ویرایش سفارش </span>
      <div className="flex gap-x-4 mt-4  [&>div]:rounded-lg ">
        <div className="w-3/12 p-3  bg-white dashboard-box-shadow h-fit sticky top-20 flex gap-3 flex-col gap-y-5 [&>button]:flex [&>button]:items-center [&>button]:gap-x-2 [&>button]:w-full  [&>button>span]:w-8 [&>button>div]:text-xs [&>button>div>p]:font-bold [&>button>div>span]:text-gray-600 [&>button>div]:text-start [&>button>span]:h-8 [&>button>span]:rounded-full [&>button>span]:bg-gray-200 [&>button]:hover:bg-gray-100 [&>button]:p-4 [&>button]:cursor-pointer">
          <button onClick={() => scrollToSection(section1Ref)}>
            <span></span>
            <div>
              <p>انتخاب محصولات</p>
              <span>افزودن محصول به لیست خرید.</span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section2Ref)}>
            <span></span>
            <div>
              <p>اطلاعات مشتری</p>
              <span>
                وارد کردن اطلاعات مشتری مانند نام، ایمیل و شماره تلفن.
              </span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section3Ref)}>
            <span></span>
            <div>
              <p>اطلاعات آدرس</p>
              <span>ارائه جزئیات آدرس حمل و نقل.</span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section4Ref)}>
            <span></span>
            <div>
              <p>پرداخت</p>
              <span>وارد کردن روش و جزئیات پرداخت برای تکمیل تراکنش.</span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section5Ref)}>
            <span></span>
            <div>
              <p>وضعیت سفارش</p>
              <span>تغییر وضعیت پردازش سفارش</span>
            </div>
          </button>
        </div>
        <div className="w-9/12  [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4 [&>div]:p-4 [&>div]:bg-white [&>div]:rounded-lg flex flex-col gap-y-4">
          <div className=" dashboard-box-shadow " ref={section1Ref}>
            <span className="text-sm font-semibold">انتخاب محصولات</span>
            <div className="flex items-center gap-2">
              <div className="w-10/12 relative   ">
                <input
                  type="text"
                  className="w-full p-3 rounded-lg outline-green-500 bg-gray-100"
                  placeholder="جستجو کنید ..."
                  value={searchQuery}
                  onChange={(e) => searchHandler(e)}
                />
                <CiSearch className="absolute left-1 top-4" />
              </div>
              <button
                className="w-2/12 text-xs bg-green-500 text-white px-0.5 py-4 rounded-lg font-bold cursor-pointer"
                onClick={() => setIsShowAllProducts(true)}
              >
                مشاهده محصولات
              </button>
            </div>
            <div className="p-4 relative">
              <table className="w-full border border-gray-200 rounded-md overflow-hidden text-sm text-right">
                <thead className="bg-gray-100 font-semibold text-gray-600">
                  <tr>
                    <th className="p-3 text-right">محصول</th>
                    <th className="p-3 text-right">قیمت</th>
                    <th className="p-3 text-right">تعداد</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {orderProductsList.map((product) => (
                    <tr key={product._id} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex gap-x-2 items-center">
                          <div className="w-12 h-12 rounded-md flex items-center justify-center">
                            <Image
                              width={42}
                              height={42}
                              alt={`product-${String(product._id).slice(-8)}`}
                              src={
                                allProducts.find(
                                  (p) => p.persianName == product.persianName
                                )?.mainImage
                              }
                            />
                          </div>
                          <div className="flex flex-col text-gray-700">
                            <p> {product.persianName}</p>
                            <p className="text-xs text-gray-500">
                              {String(product._id).slice(-8)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-gray-700">
                        {priceFormatter(
                          allProducts.find(
                            (p) => p.persianName == product.persianName
                          )?.secondPrice * product.quantity ||
                            allProducts.find(
                              (p) => p.persianName == product.persianName
                            )?.price * product.quantity
                        )}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-x-1 border rounded w-24 px-2 py-1">
                          <span
                            className="cursor-pointer select-none text-gray-600"
                            onClick={() => changeQuantity(product._id, -1)}
                          >
                            -
                          </span>
                          <span className="text-center w-6">
                            {product.quantity}
                          </span>
                          <span
                            className="cursor-pointer select-none text-gray-600"
                            onClick={() => changeQuantity(product._id, 1)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td
                        className="text-lg cursor-pointer hover:text-red-500"
                        onClick={() => deleteFromOrderHandler(product._id)}
                      >
                        <FaRegTrashCan />
                      </td>
                    </tr>
                  ))}
                  {orderProductsList.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center p-3">
                        محصولی انتخاب نشده است!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {isShowSearchResult && (
                <div className="absolute bg-white top-0 right-0 w-10/12 max-h-96 overflow-y-auto rounded-lg p-3 shadow-2xl flex flex-col gap-y-2 ">
                  {filteredProducts.map((product) => (
                    <div
                      className="flex gap-x-2 items-center cursor-pointer "
                      key={product._id}
                      onClick={() => addProduct(product)}
                    >
                      <div className="w-12 h-12 rounded-md flex items-center justify-center">
                        <Image
                          width={42}
                          height={42}
                          src={product.mainImage}
                          alt={`product-${String(product._id).slice(-8)}`}
                        />
                      </div>
                      <span className="text-xs">{product.persianName}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-end">مجموع: {priceFormatter(totalPrice)}</div>
          </div>
          <div className=" dashboard-box-shadow " ref={section2Ref}>
            <span className="text-sm font-semibold">اطلاعات مشتری</span>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>نام</span>
                <input
                  type="text"
                  name="firstname"
                  value={customer.firstname}
                  onChange={handleCustomerChange}
                />
              </div>
              <div>
                <span>نام خانوادگی</span>
                <input
                  type="text"
                  name="lastname"
                  value={customer.lastname}
                  onChange={handleCustomerChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">ایمیل</span>
              <input
                type="text"
                className="bg-gray-100 p-3 outline-green-500"
                name="email"
                value={customer.email}
                onChange={handleCustomerChange}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">شماره تلفن</span>
              <input
                type="text"
                className="bg-gray-100 p-3 outline-green-500"
                name="phone"
                value={customer.phone}
                onChange={handleCustomerChange}
              />
            </div>
          </div>
          <div className=" dashboard-box-shadow " ref={section3Ref}>
            <span className="text-sm font-semibold"> اطلاعات آدرس</span>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>استان</span>
                <input
                  type="text"
                  name="province"
                  value={address.province}
                  onChange={handleAddressChange}
                />
              </div>
              <div>
                <span>شهر</span>
                <input
                  type="text"
                  value={address.city}
                  name="city"
                  onChange={handleAddressChange}
                />
              </div>
            </div>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>کوچه/ فرعی</span>
                <input
                  type="text"
                  value={address.district}
                  name="district"
                  onChange={handleAddressChange}
                />
              </div>
              <div>
                <span>پلاک</span>
                <input
                  type="text"
                  value={address.plaque}
                  name="plaque"
                  onChange={handleAddressChange}
                />
              </div>
            </div>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>واحد</span>
                <input
                  type="text"
                  value={address.unit}
                  name="unit"
                  onChange={handleAddressChange}
                />
              </div>
              <div>
                <span>کدپستی</span>
                <input
                  type="text"
                  value={address.postalCode}
                  name="postalCode"
                  onChange={handleAddressChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">آدرس کامل</span>
              <textarea
                rows={9}
                className="outline-green-500 rounded-lg bg-gray-100 resize-none p-2"
                value={address.fullAddress}
                name="fullAddress"
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <div className=" dashboard-box-shadow " ref={section4Ref}>
            <span className="text-sm font-semibold"> اطلاعات پرداخت</span>

            <div className="flex flex-col gap-y-2">
              <span className="text-xs">روش پرداخت </span>
              <select className="bg-gray-100 p-3 rounded-lg outline-green-500 ">
                <option value="-1">درگاه بانکی</option>
                <option value="-1">حضوری</option>
                <option value="-1">کارت به کارت</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">ایمیل</span>
              <input
                type="text"
                defaultValue="test@gmail.com"
                className="bg-gray-100 p-3 outline-green-500"
              />
            </div>
          </div>
          <div className=" dashboard-box-shadow" ref={section5Ref}>
            <span className="text-sm font-semibold">وضعیت سفارش</span>
            <select
              className="bg-gray-100 p-3 rounded-lg outline-green-500 "
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              <option value="pending">جاری</option>
              <option value="preparing">در حال آماده‌سازی</option>
              <option value="readytoship">آماده برای ارسال</option>
              <option value="shipped">ارسال شده</option>
              <option value="delivered">تحویل داده شده </option>
              <option value="canceled">لغو شده</option>
              <option value="returned">مرجوع شده </option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 py-6 px-4 flex justify-end rounded-lg dashboard-box-shadow ">
        <div className="flex gap-x-4 items-center [&>button]:px-5  [&>button]:py-3 [&>button]:rounded-lg [&>button]:text-xs [&>button]:font-bold [&>button]:cursor-pointer">
          <button
            className=" border-red-600 border-2 text-red-600"
            onClick={() => deleteCommentHandler(orderId)}
          >
            حذف
          </button>
          <button
            className="bg-blue-500 text-white "
            onClick={updateOrderHandler}
          >
            بروزرسانی
          </button>
        </div>
      </div>
      {isShowAllProducts && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
          <div className="w-[500px] h-[550px] bg-white p-7 rounded-xl flex flex-col gap-y-4">
            <div className="text-center  relative">
              <p className="font-black">همه محصولات</p>
              <p className="text-[11px] mt-1">
                محصولات را به این سفارش اضافه کنید.
              </p>
              <IoMdClose
                className="absolute left-0 top-0 text-xl cursor-pointer"
                onClick={() => setIsShowAllProducts(false)}
              />
            </div>
            <div className="h-400  overflow-y-scroll flex flex-col gap-y-3 text-xs">
              {allProducts.map((product) => (
                <div className="flex gap-x-4 items-center " key={product._id}>
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={(e) => handleProductChange(e, product)}
                    checked={orderProductsList.some(
                      (p) => p._id === product._id
                    )}
                  />
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-x-2">
                      <Image
                        width={70}
                        height={70}
                        alt={`product-${String(product._id).slice(-8)}`}
                        src={product.mainImage}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="max-w-52">{product.persianName}</p>
                        <p className="mt-1">
                          کد : {String(product._id).slice(-8)}
                        </p>
                      </div>
                    </div>
                    <span>تعداد موجود:{product.stock}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="bg-green-600 text-white py-2 rounded-lg cursor-pointer"
              onClick={() => setIsShowAllProducts(false)}
            >
              انجام شد
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditOrderPage;
