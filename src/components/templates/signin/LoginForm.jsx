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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState(true);
  const [code, setCode] = useState("");
  const loginWithPassword = async () => {
    const veryfyForm = () => {
      let isValid = true;
      if (!email.trim()) {
        setEnteredPhone(false);
        isValid = false;
      } else {
        const isEmail = validateEmail(email);
        const isPhoneNumber = validatePhone(email);
        if (isEmail || isPhoneNumber) {
          isValid = true;
        } else {
          isValid = false;
          return setEnteredPhone("falseFormat");
        }
        setEnteredPhone(true);
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
      const user = { email, password };
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      if (res.status === 200) {
        Swal.fire({
          icon: "success	",
          title: "ورود موفق",
          position: "top-start",

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
  const loginWithSms = async () => {
    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      Swal.fire({
        title: "شماره وارد شده معتبر نیست!",
        icon: "error",
      });
    } else {
      setLoginWay("otp");
    }
    const res = await fetch("/api/auth/sms/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });
    if (res.status === 201) {
      Swal.fire({
        title: "sms ارسال شد",
        icon: "success",
        confirmButtonText: "وارد کردن کد",
      });
    }
    if (res.status === 422) {
      Swal.fire({
        title: "گاربر وجود دارد",
        icon: "error",
        confirmButtonText: "ورود",
      });
    }
  };
  const verifyCode = async () => {
    const body = { phone, code };
    const res = await fetch("/api/auth/sms/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 409) {
      Swal.fire({
        title: "کد وارده معتبر نیست!",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    } else if (res.status === 410) {
      Swal.fire({
        title: "کد وارده  منقضی شده است!",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    } else if (res.status === 200) {
      Swal.fire({
        title: "ورود با موفقیت انجام شد",
        icon: "success",
        confirmButtonText: " پنل کاربری ",
      }).then(() => {
        router.replace("/profile");
      });
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white dark:bg-zinc-800 dark:text-white">
      <div className="w-[340px]  border border-gray-200 rounded-2xl p-3 ">
        <h1 className="text-center text-2xl text-green-400">کیوان کالا</h1>
        {loginWay === "username" && (
          <div className="flex flex-col gap-y-3 my-4 [&>input]:border-1 [&>input]:border-gray-200 [&>input]:outline-none [&>input]:p-1">
            <label>ایمیل :</label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {!enteredPhone && <span>ایمیل ؟</span>}
            {enteredPhone === "falseFormat" && <span>فرمت اشتباه است</span>}
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
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="bg-green-600 text-white py-2 rounded-sm"
              onClick={loginWithSms}
            >
              ارسال پیامک
            </button>
            <button
              className="bg-green-400 text-white py-2 rounded-sm"
              onClick={() => setLoginWay("username")}
            >
              ورود با ایمیل
            </button>
          </div>
        )}
        {loginWay === "otp" && (
          <div className="flex flex-col gap-y-3 my-4 [&>input]:border-1 [&>input]:border-gray-200 [&>input]:outline-none [&>input]:p-1">
            <label>کد تایید :</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              className="bg-green-600 text-white py-2 rounded-sm"
              onClick={verifyCode}
            >
              ثبت کد تایید
            </button>
            <button
              className="bg-green-400 text-white py-2 rounded-sm"
              onClick={() => setLoginWay("username")}
            >
              لفو
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
