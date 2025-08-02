import React from "react";
import Link from "next/link";
import Image from "next/image";
import GetSocialIconComponent from "../editAdmininfo/getSocialIconComponent";
function AdminBiography({
  fullName,
  job,
  socials,
  skills,
  biography,
  userAddress,
  profileUrl,
}) {
  return (
    <div className="w-[500px]  flex flex-col items-center gap-y-4  bg-white p-3 rounded-lg  overflow-hidden dashboard-box-shadow">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image src={profileUrl} width={500} height={500} alt="adminPic" />
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <span className="text-xl">{fullName}</span>
        <span className="text-sm">{job}</span>
        <span className="text-sm">
          ایران,{userAddress.province},{userAddress.city}
        </span>
      </div>

      <div className="text-sm text-gray-600 ">
        <p>بیوگرافی</p>
        <p className="mt-2">{biography}</p>
      </div>

      <div className=" flex justify-around w-full [&>div]:text-center">
        <div>
          <p>2</p>
          <p>سال فعالیت</p>
        </div>
        <div>
          <p>2</p>
          <p>بلاگ ها</p>
        </div>
        <div>
          <p>1</p>
          <p>نوشته ها</p>
        </div>
      </div>
      <div className=" w-full">
        <span>سوشال مدیا :</span>
        <div className="mt-3 flex flex-col gap-y-2 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center [&>div>svg]:text-3xl [&>div>div]:text-sm">
          {socials.map((social) => (
            <div key={social._id} className="[&>div>svg]:text-xl">
              <div className="w-8 h-8  flex justify-center items-center border rounded-full border-gray-200">
                {GetSocialIconComponent(social.platform)}
              </div>
              <div>
                <p>{social.platform}</p>
                <Link
                  className="hover:text-blue-500"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.url}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full ">
        <span>مهارت ها :</span>
        <div className="mt-3 flex flex-col gap-y-6 [&>div>div]:w-full [&>div>div]:h-3 [&>div>div]:rounded-sm [&>div>div]:bg-gray-200 [&>div>div]:relative [&>div>div]:overflow-hidden [&>div>div]:p-0 [&>div>div>div]:absolute [&>div>div>div]:top-0 [&>div>div>div]:left-0 [&>div>div>div]:h-full">
          {skills.map((skill) => (
            <div key={skill._id}>
              <span>{skill.name} :</span>
              <div>
                <div
                  className="bg-green-500 h-3 rounded text-center text-[8px] py-0.25 text-white font-bold"
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminBiography;
