"use client";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUpForm() {
  let router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");


  const [enteredEmail, setEnteredEmail] = useState(true);
  const [enteredPhone, setEnteredPhone] = useState(true);
  const [enteredPassWord, setEnteredPassWord] = useState(true);
  const [enteredVerifyPassWord, setEnteredVerifyPassWord] = useState(true);
  const isEqual = (a, b) => a == b;
  const signUp = async () => {
    const veryfyForm = () => {
      let isValid = true;
      if (!phone.trim()) {
        setEnteredPhone(false);
        isValid = false;
      } else {
        const isValidPhone = validatePhone(phone);
        if (!isValidPhone) {
          setEnteredPhone("invalidPhone");
          isValid = false;
        } else {
          setEnteredPhone(true);
        }
      }
      if (!email.trim()) {
        setEnteredEmail(false);
        isValid = false;
      } else {
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
          setEnteredEmail("invalidEmail");
        } else {
          setEnteredEmail(true);
        }
      }
      if (!password.trim()) {
        setEnteredPassWord(false);
        isValid = false;
      } else {
        const isValidPass = validatePassword(password);
        if (!isValidPass) {
          setEnteredPassWord("invalidPassword");
        } else {
          setEnteredPassWord(true);
        }
      }
      if (!verifyPassword.trim()) {
        setEnteredVerifyPassWord(false);
        isValid = false;
      } else {
        const isEqualPasswors = isEqual(password, verifyPassword);
        if (!isEqualPasswors) {
          setEnteredVerifyPassWord("invalidVerifyPass");
          isValid = false;
        } else {
          setEnteredVerifyPassWord(true);
        }
      }
      return isValid;
    };
    const isFormValid = veryfyForm();
    if (isFormValid) {
      const user = { email, phone, password };
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status === 201) {
        alert("ثبت نام موفق");
        setPhone("");
        setPassword("");
        setVerifyPassword("");
        setEmail("");
        router.replace("/");
      } else if (res.status === 422) {
        alert("کاربر وجود دارد");
      }
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[440px]  border border-gray-200 rounded-2xl p-3 ">
        <h1 className="text-center text-2xl text-green-400">keivanKala</h1>
        <div className="flex flex-col gap-y-3 my-4 [&>input]:border-1 [&>input]:border-gray-200 [&>input]:outline-none [&>input]:p-1">
          <label>ایمیل :</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {enteredEmail !== true && (
            <span className="text-red-600 text-xs">
              {enteredEmail === "invalidEmail"
                ? "ایمیل نامعتبر است"
                : "ایمیل ؟ "}
            </span>
          )}
          <label>شماره تلفن :</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          {enteredPhone !== true && (
            <span className="text-red-600 text-xs">
              {enteredPhone === "invalidPhone"
                ? "شماره نامعتبر است"
                : "شماره تلفن ؟ "}
            </span>
          )}
          <label>رمز عبور :</label>
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {enteredPassWord !== true && (
            <span className="text-red-600 text-xs">
              {enteredPassWord === "invalidPassword"
                ? "پسورد انتخابی به اندازه قوی نیست"
                : "پسورد ؟ "}
            </span>
          )}
          <label>تایید رمز عبور :</label>
          <input
            type="text"
            value={verifyPassword}
            onChange={(event) => setVerifyPassword(event.target.value)}
          />
          {enteredVerifyPassWord !== true && (
            <span className="text-red-600 text-xs">
              {enteredVerifyPassWord === "invalidVerifyPass"
                ? "پسورد انتخابی مطابقت ندارد"
                : "پسورد ؟ "}
            </span>
          )}

          <button
            className="bg-green-600 text-white py-2 rounded-sm"
            onClick={() => signUp()}
          >
            ثبت نام
          </button>
        </div>
        <div>
          <span>
            اکانت کاربری دارید ؟
            <Link href="/signin" className="text-blue-600 px-1">
              وارد
            </Link>
            شوید
          </span>
        </div>
      </div>
    </div>
  );
}
