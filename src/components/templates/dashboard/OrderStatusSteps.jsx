import {
  FaCheckCircle,
  FaBox,
  FaTruck,
  FaClipboardCheck,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCheckCircle className="text-white" />,
    title: "سفارش انجام شده",
    date: "چهارشنبه، ۱۵ دسامبر ۲۰۲۱",
    description: [
      "سفارش داده شده است.",
      "چهارشنبه، ۱۵ دسامبر ۲۰۲۱ - ۰۶:۴۴ بعد از ظهر",
      "فروشنده سفارش شما را پردازش کرده است.",
      "پنجشنبه، ۱۶ دسامبر ۲۰۲۱ - ۰۸:۴۸ صبح",
    ],
    color: "bg-emerald-500",
  },
  {
    icon: <FaBox className="text-white" />,
    title: "بسته‌بندی شده",
    date: "پنجشنبه، ۱۶ دسامبر ۲۰۲۱",
    description: [
      "کالای شما توسط فروشنده بسته‌بندی گردیده است.",
      "جمعه، ۱۷ دسامبر ۲۰۲۱ - ۰۹:۵۰ صبح",
    ],
    color: "bg-teal-400",
  },
  {
    icon: <FaTruck className="text-white" />,
    title: "حمل و نقل",
    date: "جمعه، ۱۷ دسامبر ۲۰۲۱",
    description: [
      "RPK Logistics - MFDSI#00F587V84",
      "کالای شما ارسال شده است.",
      "شنبه، ۱۸ دسامبر ۲۰۲۱ - ۰۸:۵۶ صبح",
    ],
    color: "bg-green-400",
  },
  {
    icon: <FaClipboardCheck className="text-white" />,
    title: "تحویل داده شد",
    date: "",
    description: ["برای تحویل"],
    color: "bg-sky-400",
  },
];

export default function OrderStatusSteps() {
  return (
    <div className="max-w-3xl mx-auto p-4 ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">وضعیت سفارش</h2>
      <div className="relative border-r-2 border-dashed border-gray-300 pr-6">
        {steps.map((step, index) => (
          <div key={index} className="mb-10 relative">
            {/* آیکون مرحله */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full absolute right-[-45px] top-0 ${step.color}`}
            >
              {step.icon}
            </div>

            {/* محتوا */}
            <div className="ml-6">
              <h3 className="font-bold text-sm text-gray-800">
                {step.title}
                {step.date && (
                  <span className="text-xs font-normal text-gray-500 ml-1">
                    - {step.date}
                  </span>
                )}
              </h3>
              <ul className="mt-2 space-y-1 text-xs text-gray-600">
                {step.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
