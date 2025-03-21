import { FaAngleLeft } from "react-icons/fa6";

function Breadcrumb() {
  return (
    <div className=" container  mx-auto  mt-[140px] px-4 ">
      <div className="flex items-center gap-x-2 w-fit bg-white rounded-lg p-2.5 mr-36">
        <span>کیوان کالا</span>
        <FaAngleLeft />
        <span>مردانه</span>
        <FaAngleLeft />
        <span>کتونی مردانه</span>
      </div>
    </div>
  );
}

export default Breadcrumb;
