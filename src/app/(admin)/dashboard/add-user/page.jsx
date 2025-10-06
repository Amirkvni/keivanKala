"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import bcrypt from "bcryptjs";
import AddressInformation from "@/components/templates/dashboard/edit-user/AddressInformation";
import Overview from "@/components/templates/dashboard/edit-user/Overview";
import UserProfile from "@/components/templates/dashboard/edit-user/UserProfile";
import { checkPasswordStrength } from "@/utils/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const [roles, setRoles] = useState([]);
  const [mainUser, setMainUser] = useState({});
  const [mainAddress, setMainAddress] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const years = Array.from({ length: 1404 - 1300 + 1 }, (_, i) => 1404 - i);

  useEffect(() => {
    if (passwordMatch && passwordStrength === "قوی") {
      const hashed = bcrypt.hashSync(password, 12);
      setMainUser((prev) => ({ ...prev, password: hashed }));
    } else {
      setMainUser((prev) => {
        const copy = { ...prev };
        delete copy.password;
        return copy;
      });
    }
  }, [password, confirmPassword, passwordMatch, passwordStrength]);

  const createUserHandler = async () => {
    try {
      const payload = {
        mainUser,
        mainAddress,
      };

      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("خطا در ایجاد کاربر");
      if (res.status === 200) {
        Swal.fire("کاربر ایجاد شد");
        router.push("/dashboard/all-users");
      }
    } catch (err) {
      console.error(err);
      alert("خطا در ایجاد کاربر");
    }
  };
  useEffect(() => {
    const getRoles = async () => {
      const res = await fetch("/api/role");
      const data = await res.json();
      setRoles(data);
    };
    getRoles();
  }, []);

  return (
    <div className="p-12">
      <p className="text-lg font-bold">ایجاد کاربر</p>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg">
        <div className="w-8/12 flex flex-col gap-y-4 [&>div]:p-6">
          <Overview
            setMainUser={setMainUser}
            mainUser={mainUser}
            roles={roles}
          />
          <AddressInformation
            mainAddress={mainAddress}
            setMainAddress={setMainAddress}
          />
        </div>

        <div className="w-4/12 flex flex-col gap-y-4 [&>div]:p-4 [&>div]:rounded-lg">
          <UserProfile />
          <div className="bg-white dashboard-box-shadow p-4 rounded-lg">
            <span className="font-extrabold text-lg">تاریخ تولد</span>
            <div className="flex gap-x-4 mt-2 [&>div]:flex [&>div]:gap-x-1.5 [&>div]:items-center [&>div>label]:text-sm [&>div>select]:border-gray-300 [&>div>select]:text-sm [&>div>select]:border [&>div>select]:rounded-md [&>div>select]:p-1">
              <div>
                <label>روز</label>
                <select
                  onChange={(e) =>
                    setMainUser({
                      ...mainUser,
                      birthday: {
                        ...mainUser.birthday,
                        day: +e.target.value,
                      },
                    })
                  }
                >
                  <option value="">انتخاب کنید</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>ماه</label>
                <select
                  onChange={(e) =>
                    setMainUser({
                      ...mainUser,
                      birthday: {
                        ...mainUser.birthday,
                        month: +e.target.value,
                      },
                    })
                  }
                >
                  <option value="">انتخاب کنید</option>
                  {months.map((month, index) => (
                    <option key={month} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>سال</label>
                <select
                  onChange={(e) =>
                    setMainUser({
                      ...mainUser,
                      birthday: {
                        ...mainUser.birthday,
                        year: +e.target.value,
                      },
                    })
                  }
                >
                  <option value="">انتخاب کنید</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white dashboard-box-shadow p-4 rounded-lg">
            <span className="font-extrabold text-lg">ایجاد رمزعبور </span>
            <div className="mt-2 [&>div>label]:block [&>div]:mt-3 [&>div>input]:mt-2 [&>div]:relative [&>div>input]:p-2 [&>div>input]:rounded-lg [&>div>input]:outline-none [&>div>input]:w-full [&>div>input]:border [&>div>input]:border-gray-300">
              <div>
                <label>رمزعبور :</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPassword(val);
                    const strength = checkPasswordStrength(val);
                    setPasswordStrength(strength);
                    setPasswordMatch(val === confirmPassword);
                  }}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute top-10 left-3 text-gray-500"
                >
                  {showPassword ? (
                    <MdOutlineVisibilityOff size={22} />
                  ) : (
                    <MdOutlineVisibility size={22} />
                  )}
                </button>
                {passwordStrength && (
                  <p
                    className={`mt-1 text-sm ${
                      passwordStrength === "قوی"
                        ? "text-green-600"
                        : passwordStrength === "متوسط"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    قدرت رمز: {passwordStrength}
                  </p>
                )}
              </div>
              <div>
                <label>تایید رمز عبور :</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    const val = e.target.value;
                    setConfirmPassword(val);
                    setPasswordMatch(val === password);
                  }}
                  className="pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute top-10 left-3 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <MdOutlineVisibilityOff size={22} />
                  ) : (
                    <MdOutlineVisibility size={22} />
                  )}
                </button>
                {!passwordMatch && (
                  <p className="mt-1 text-red-600 text-sm">
                    رمزها یکسان نیستند
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            className="p-2 rounded-lg cursor-pointer bg-green-700 text-white w-fit mr-auto mt-4"
            onClick={createUserHandler}
          >
            ایجاد
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
