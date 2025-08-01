"use client";
import React, { useState } from "react";
import SocialInput from "./SocialInput";

function AdminSocialsUpdate({ socials, userId }) {
  const [socialMedias, setSocialMedias] = useState(socials);

  const handleSocialChange = (index, newUrl) => {
    const updated = [...socialMedias];
    let newPlatform = "";

    const url = newUrl.toLowerCase();

    if (url.includes("t.me") || url.includes("telegram"))
      newPlatform = "telegram";
    else if (url.includes("instagram.com")) newPlatform = "instagram";
    else if (url.includes("linkedin.com")) newPlatform = "linkedin";
    else if (url.includes("facebook.com")) newPlatform = "facebook";
    else if (url.includes("twitter.com")) newPlatform = "twitter";
    else if (url.includes("youtube.com")) newPlatform = "youtube";
    else if (url.includes("pinterest.com")) newPlatform = "pinterest";
    else if (url.includes("@gmail.com")) newPlatform = "gmail";
    else if (url.includes("snapchat.com") || url.includes("snapchat"))
      newPlatform = "snapchat";
    else if (url.includes("whatsapp.com") || url.includes("wa.me"))
      newPlatform = "whatsapp";
    else if (url.includes("reddit.com")) newPlatform = "reddit";
    else if (url.includes("github.com")) newPlatform = "github";
    else if (url.includes("discord.gg") || url.includes("discord.com"))
      newPlatform = "discord";
    else newPlatform = "";

    updated[index] = { ...updated[index], url: newUrl, platform: newPlatform };
    setSocialMedias(updated);
  };
  const editAdminSocials = async () => {
    try {
      const res = await fetch(`/api/socials/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( socialMedias),
      });

      if (!res.ok) {
        alert("kir");
      }

      const data = await res.json();
    } catch (error) {
      alert("خطا در ارتباط با سرور: " + error.message);
    }
  };
  return (
    <div className="flex flex-col gap-y-6 flex-1 p-3 ">
      <div>
        <p className="text-lg font-bold">سوشال مدیا</p>
      </div>
      <div>
        {socialMedias.map((val, idx) => (
          <SocialInput
            key={val._id}
            value={val.url}
            onChange={(e) => handleSocialChange(idx, e.target.value)}
            platform={val.platform}
          />
        ))}
      </div>
      <button
        className="bg-emerald-400 w-fit mr-auto p-3 rounded-lg text-white cursor-pointer"
        onClick={() => editAdminSocials()}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}

export default AdminSocialsUpdate;
