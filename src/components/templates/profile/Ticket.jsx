import Link from "next/link";

const Ticket = ({ _id, title, createdAt, department, hasAnswer }) => {
  return (
    <Link href={`/p-user/tickets/answer/${_id}`}>
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
            hasAnswer ? "bg-green-400" : "bg-red-900"
          }`}
        >
          {hasAnswer ? "پاسخ داده شده" : "پاسخ داده نشده"}
        </p>
      </div>
    </Link>
  );
};

export default Ticket;
