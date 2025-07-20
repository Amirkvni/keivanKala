import { FaRegUser } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";

function Answer({ type, title, body, createdAt, user }) {
  return (
    <section
      className={
        type === "user"
          ? "bg-red-700 rounded-lg p-4 w-[500px] ml-auto text-white"
          : "bg-green-700 rounded-lg p-4 w-[500px] mr-auto text-white"
      }
    >
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="w-12 h-12 [&>svg]:text-2xl  justify-center flex items-center rounded-full border">
            {type === "user" ? <FaRegUser /> : <RiAdminLine />}
          </div>

          <div className="flex flex-col gap-y-3">
            <p>
              {type === "user"
                ? user.firstname + " " + user.lastname + "- کاربر"
                : "مدیریت"}
            </p>
            {type === "user" && <span> موضوع : {title}</span>}
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
