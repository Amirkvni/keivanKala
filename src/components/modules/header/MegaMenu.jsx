import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleLeft } from "react-icons/fa6";

function MegaMenu({
  categories,
  setActiveCategory,
  activeSubMenu,
  setActiveSubMenu,
  setIsHover,
}) {
  return (
    <ul className="group z-10">
      <div
        className="relative flex cursor-pointer items-center gap-x-2  "
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div>
          <RxHamburgerMenu />
        </div>
        <div className="text-xl">دسته بندی ها</div>
      </div>
      <div className=" absolute top-full w-full max-w-[1000px]  ">
        <div className="relative rounded-b-lg  shadow-base hidden  group-hover:block  ">
          <div
            className="flex h-[450px] max-h-[450px] w-full overflow-hidden rounded-b-lg pt-0.5 "
            onMouseLeave={() => setIsHover(false)}
          >
            {/* right : */}
            <div
              dir="ltr"
              className="main-scroll w-50 overflow-y-auto bg-gray-100 dark:bg-black "
            >
              <ul dir="rtl">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="hover:bg-white hover:text-green-300 text-gray-700 dark:text-white dark:hover:bg-zinc-800"
                    onMouseEnter={() => {
                      setActiveCategory(category.name);
                      setActiveSubMenu(category.submenu);
                      setIsHover(true);
                    }}
                  >
                    <Link
                      href={category.link}
                      className="flex py-4 pr-4 text-lg"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* left : */}
            <div
              dir="ltr"
              className="main-scroll h-[450px] max-h-[450px] w-full overflow-auto bg-white dark:bg-zinc-800 "
            >
              <div className="flex grow p-5" dir="rtl">
                <div>
                  <div className="flex grow flex-wrap gap-x-14 gap-y-8">
                    {activeSubMenu?.map((submenu) => (
                      <div className="space-y-2" key={submenu.id}>
                        <Link
                          href={submenu.mainLink}
                          className=" relative before:content-[''] before:w-[2px] before:h-[25px] flex items-center gap-x-2 text-lg hover:text-green-300 before:bg-green-500 before:absolute before:right-0 before:top-0 pr-4"
                        >
                          <div className="">{submenu.title}</div>
                          <FaAngleLeft />
                        </Link>
                        <ul>
                          <li>
                            {submenu.links.map((item) => (
                              <Link
                                key={item.id}
                                href={`/search/${item.address}`}
                                className="block py-2 text-lg  hover:text-green-300 text-gray-500 dark:text-gray-200"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
}

export default MegaMenu;
