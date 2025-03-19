function ContactForm() {
  return (
    <div className="w-3/5 ">
      <p>
        قبل از مطرح کردن هرگونه سوال لطفا بخش سوالات متداول را مطالعه فرمایید
      </p>
      <div className="[&>input]:border flex flex-col gap-y-4 mt-3">
        <div className="flex gap-x-2 [&>input]:w-1/2 [&>input]:outline-none [&>input]:border [&>input]:border-gray-200 [&>input]:p-3 [&>input]:rounded-lg ">
          <input placeholder="نام شما" type="text" />
          <input placeholder="شماره تماس شما" type="text" />
        </div>
        <div>
          <input
            type="text"
            placeholder="ایمیل شما"
            className="w-full outline-none border border-gray-200 p-3 rounded-lg"
          />
        </div>
        <textarea
          type="text"
          placeholder="پیام شما"
          cols="52"
          rows="3"
          className="outline-none border border-gray-200 p-3 rounded-lg"
        />
        <button className="w-fit bg-green-400 text-white p-2 rounded-lg mr-auto ">
          ارسال پیام
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
