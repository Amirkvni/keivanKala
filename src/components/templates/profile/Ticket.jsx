import Link from "next/link";

const Ticket = ({ _id, title, createdAt, department, status }) => {
  return (
    <Link
      className={`border ${
        status === "closed"
          ? "border-red-500"
          : status === "answered"
          ? "border-blue-500"
          : status === "new"
          ? "border-green-500"
          : ""
      }`}
      href={`/profile/tickets/answer/${_id}`}
    >
      <div>
        <p>{title}</p>
        <p className="bg-gray-200 p-1.5 rounded-sm text-sm text-center dark:text-black">
          {department.title}
        </p>
      </div>
      <div className="text-center">
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <p
          className={`p-2 rounded-lg text-sm text-white ${
            status === "answered"
              ? "bg-blue-400"
              : status === "closed"
              ? "bg-red-900"
              : "bg-green-400"
          }`}
        >
          {status === "closed"
            ? "بسته شده"
            : status === "answered"
            ? "پاسخ داده شده"
            : status === "new"
            ? "جدید"
            : status}
        </p>
      </div>
    </Link>
  );
};

export default Ticket;
