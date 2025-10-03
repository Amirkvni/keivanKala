"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image"; // اضافه کردن اکستنشن تصویر
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
  Image as ImageIcon,
} from "lucide-react";
import React from "react";

export default function Editor({ onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
    ],
    content: "<div>محتوا را وارد کنید</div>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "min-h-[300px]  p-4 focus:outline-none text-right rtl",
        dir: "rtl",
      },
    },
    onUpdate({ editor }) {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

  if (!editor) return null;

  const toggleMark = (mark) => editor.chain().focus().toggleMark(mark).run();

  const toggleListOrQuote = (node) => {
    if (node === "bulletList") editor.chain().focus().toggleBulletList().run();
    else if (node === "orderedList")
      editor.chain().focus().toggleOrderedList().run();
    else if (node === "blockquote")
      editor.chain().focus().toggleBlockquote().run();
  };

  const setTextAlign = (align) =>
    editor.chain().focus().setTextAlign(align).run();

  const toggleHeading = (level) =>
    editor.chain().focus().toggleHeading({ level }).run();

  const addImage = () => {
    const url = window.prompt("آدرس تصویر را وارد کنید");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="w-full p-1 border rounded-lg border-gray-300 roundedl-lg">
      {/* Toolbar */}
      <div
        className="flex gap-2 mb-2 justify-end flex-wrap bg-gray-100 p-2"
        dir="ltr"
      >
        <button
          onClick={() => toggleMark("bold")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
          title="پررنگ"
          type="button"
        >
          <Bold size={18} />
        </button>

        <button
          onClick={() => toggleMark("italic")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
          title="مورب"
          type="button"
        >
          <Italic size={18} />
        </button>

        <button
          onClick={() => toggleMark("underline")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive("underline") ? "bg-gray-200" : ""
          }`}
          title="زیرخط"
          type="button"
        >
          <UnderlineIcon size={18} />
        </button>

        <button
          onClick={() => toggleHeading(1)}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""
          }`}
          title="تیتر ۱"
          type="button"
        >
          <Type size={18} />
        </button>

        <button
          onClick={() => toggleListOrQuote("bulletList")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
          title="لیست نقطه‌ای"
          type="button"
        >
          <List size={18} />
        </button>

        <button
          onClick={() => toggleListOrQuote("orderedList")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive("orderedList") ? "bg-gray-200" : ""
          }`}
          title="لیست شماره‌دار"
          type="button"
        >
          <ListOrdered size={18} />
        </button>

        <button
          onClick={() => setTextAlign("left")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""
          }`}
          title="چپ‌چین"
          type="button"
        >
          <AlignLeft size={18} />
        </button>

        <button
          onClick={() => setTextAlign("center")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""
          }`}
          title="وسط‌چین"
          type="button"
        >
          <AlignCenter size={18} />
        </button>

        <button
          onClick={() => setTextAlign("right")}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""
          }`}
          title="راست‌چین"
          type="button"
        >
          <AlignRight size={18} />
        </button>

        {/* دکمه افزودن تصویر */}
        <button
          onClick={addImage}
          className="p-2 rounded hover:bg-gray-100"
          title="افزودن تصویر"
          type="button"
        >
          <ImageIcon size={18} />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}
