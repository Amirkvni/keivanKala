"use client";
import React, { useState } from "react";
import Editor from "@/components/templates/dashboard/add-blog/Editor";
import { FaTrash } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
function Page() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [category, setCategory] = useState("-1");
  const [englishTitle, setEnglishTitle] = useState("");
  const [tags, setTags] = useState([{ id: 1, tag: "" }]);

  const removeTagHandler = (id) => {
    const filteredTags = tags.filter((tag) => tag.id !== id);
    setTags(filteredTags);
  };

  const validateForm = () => {
    if (!title.trim()) {
      alert("عنوان وبلاگ نمی‌تواند خالی باشد");
      return false;
    }

    if (!englishTitle.trim()) {
      alert("عنوان انگلیسی نمی‌تواند خالی باشد");
      return false;
    }

    const englishRegex = /^[A-Za-z0-9\s]+$/;
    if (!englishRegex.test(englishTitle)) {
      alert("عنوان انگلیسی فقط باید شامل حروف و اعداد انگلیسی باشد");
      return false;
    }

    const formattedEnglishTitle = englishTitle.trim().replace(/\s+/g, "-");
    setEnglishTitle(formattedEnglishTitle);

    if (category === "-1") {
      alert("لطفا دسته بندی را انتخاب کنید");
      return false;
    }

    if (!mainImage.startsWith("https://ik.imagekit.io")) {
      alert("آدرس تصویر باید با https://ik.imagekit.io شروع شود");
      return false;
    }

    const validTags = tags.map((t) => t.tag).filter((t) => t.trim() !== "");
    if (validTags.length < 1) {
      alert("حداقل یک برچسب لازم است");
      return false;
    }

    if (!content || content.trim() === "") {
      alert("محتوای وبلاگ نمی‌تواند خالی باشد");
      return false;
    }

    return true;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          content,
          mainImage,
          englishTitle,
          tags: tags.map((t) => t.tag),
        }),
      });

      if (!res.ok) {
        alert("خطا در ارسال محتوا");
      }
      Swal.fire("محتوا با موفقیت ذخیره شد").then(() =>
        router.push("/dashboard/all-blogs")
      );
    } catch (error) {
      console.error(error);
      alert("خطا در ارسال محتوا");
    }
  };
  return (
    <div className="p-12">
      <div>
        <span>افزودن وبلاگ</span>
        <div className="flex flex-col gap-y-4 mt-3 bg-white p-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان وبلاگ را وارد کنید"
            className="outline-none border rounded-lg p-2 placeholder:text-sm border-gray-300"
          />
          <input
            type="text"
            value={englishTitle}
            onChange={(e) => setEnglishTitle(e.target.value)}
            placeholder="عنوان وبلاگ (به انگلیسی)"
            className="outline-none border rounded-lg p-2 placeholder:text-sm border-gray-300"
          />
          <select
            className="outline-none border rounded-lg p-2  border-gray-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-1">دسته بندی را وارد کنید</option>
            <option value="fashion">مد و استایل</option>
            <option value="photography">عکاسی</option>
            <option value="technology">تکنولوژی</option>
            <option value="lifestyle">سبک زندگی</option>
            <option value="sports">ورزش</option>
            <option value="shopping-guide">راهنمای خرید</option>
            <option value="care">نگهداری و مراقبت</option>
            <option value="occasions">مناسبت‌ها</option>
          </select>
          <input
            type="text"
            value={mainImage}
            onChange={(e) => setMainImage(e.target.value)}
            placeholder="ادرس تصویر اصلی وبلاگ   "
            className="outline-none border rounded-lg p-2 placeholder:text-sm border-gray-300"
          />
          <div>
            <Editor onChange={setContent} />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-3">
              <span>برچسب ها </span>
              <CiSquarePlus
                className="text-green-800 cursor-pointer text-2xl "
                onClick={() =>
                  setTags((prev) => [...prev, { id: prev.length + 1, tag: "" }])
                }
              />
            </div>
            <div className="flex flex-col gap-y-2 [&>div]:flex [&>div]:items-center [&>div]:gap-x-3">
              {tags.map((tag) => (
                <div key={tag.id}>
                  <input
                    type="text"
                    value={tag.tag}
                    onChange={(e) => {
                      const newTags = tags.map((t) =>
                        t.id === tag.id ? { ...t, tag: e.target.value } : t
                      );
                      setTags(newTags);
                    }}
                    className="outline-none border rounded-lg p-2 placeholder:text-sm border-gray-300"
                  />
                  <FaTrash
                    className="text-red-600 cursor-pointer"
                    onClick={() => removeTagHandler(tag.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-fit"
            type="button"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
