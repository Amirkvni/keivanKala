import { FaRegUser } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";

function Answer({ type, title, body, createdAt, user }) {
  return (
    <section
      className={
        type === "user"
          ? "bg-red-700 rounded-lg 2xl:p-4 p-2 2xl:w-[500px] w-3/4 ml-auto text-white text-[11px] 2xl:text-balance"
          : "bg-green-700 rounded-lg 2xl:p-4 p-2 2xl:w-[500px] w-3/4 mr-auto text-white text-[11px] 2xl:text-balance"
      }
    >
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="w-6 h-6 2xl:w-12 2xl:h-12 [&>svg]:text-2xl  justify-center flex items-center rounded-full border">
            {type === "user" ? <FaRegUser /> : <RiAdminLine />}
          </div>

          <div className="flex flex-col gap-y-3 ">
            <p>
              {type === "user"
                ? user.firstname + " " + user.lastname + "- کاربر"
                : "مدیریت"}
            </p>
            {type === "user" && (
              <span> موضوع : {title}</span>
            )}
          </div>
        </div>
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
      </div>
      <div className="bg-white text-black p-1 rounded-sm mt-4">
        <p>{body}</p>
      </div>
    </section>
  );
}

export default Answer;
