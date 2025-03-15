"use client";
import { CartContext } from "@/contexts/CartContext";
import { validateEmail, validatePhone } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

function LoginForm() {
  let router = useRouter();
  let { redirectPath } = useContext(CartContext);

  const [loginWay, setLoginWay] = useState("username");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enteredPhoneOrEmail, setEnteredPhoneOrEmail] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState(true);
  const loginWithPassword = async () => {
    const veryfyForm = () => {
      let isValid = true;
      if (!phoneOrEmail.trim()) {
        setEnteredPhoneOrEmail(false);
        isValid = false;
      } else {
        const isEmail = validateEmail(phoneOrEmail);
        const isPhoneNumber = validatePhone(phoneOrEmail);
        if (isEmail || isPhoneNumber) {
          isValid = true;
        } else {
          isValid = false;
          return setEnteredPhoneOrEmail("falseFormat");
        }
        setEnteredPhoneOrEmail(true);
      }
      if (!password.trim()) {
        setEnteredPassword(false);
        isValid = false;
      } else {
        setEnteredPassword(true);
      }
      return isValid;
    };
    const isFormValid = veryfyForm();
    if (isFormValid) {
      const user = { phoneOrEmail, password };
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status === 200) {
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "ورود موفق",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          if (redirectPath) {
            router.replace(redirectPath);
          } else {
            router.replace("/");
          }
        });
      } else {
        alert("کاربر وجود ندارد");
      }
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[340px]  border border-gray-200 rounded-2xl p-3 ">
        <h1 className="text-center text-2xl text-green-400">keivanKala</h1>
        {loginWay === "username" && (
          <div className="flex flex-col gap-y-3 my-4 [&>input]:border-1 [&>input]:border-gray-200 [&>input]:outline-none [&>input]:p-1">
            <label>ایمیل یا شماره تماس:</label>
            <input
              type="text"
              value={phoneOrEmail}
              onChange={(event) => setPhoneOrEmail(event.target.value)}
            />
            {!enteredPhoneOrEmail && <span>ایمیل ؟</span>}
            {enteredPhoneOrEmail === "falseFormat" && (
              <span>فرمت اشتباه است</span>
            )}
            {}
            <label htmlFor="">رمز عبور :</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {!enteredPassword && <span>رمز ؟</span>}

            <button
              className="bg-green-600 text-white py-2 rounded-sm"
              onClick={() => loginWithPassword()}
            >
              ورود
            </button>
            <button
              className="bg-green-400  py-2 rounded-sm font-bold text-white"
              onClick={() => setLoginWay("sms")}
            >
              ورود با کد یکبار مصرف
            </button>
          </div>
        )}
        {loginWay === "sms" && (
          <div className="flex flex-col gap-y-3 my-4 [&>input]:border-1 [&>input]:border-gray-200 [&>input]:outline-none [&>input]:p-1">
            <label>شماره تلفن :</label>
            <input type="text" />
            <button className="bg-green-600 text-white py-2 rounded-sm">
              ارسال پیامک
            </button>
            <button
              className="bg-green-400 text-white py-2 rounded-sm"
              onClick={() => setLoginWay("username")}
            >
              ورود با نام کاربری یا ایمیل
            </button>
          </div>
        )}
        <div>
          <span>
            اکانت کاربری ندارید ؟
            <Link href="/signup" className="text-blue-600 px-1">
              ثبت نام
            </Link>{" "}
            کنید
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
