import GetSocialIconComponent from "./getSocialIconComponent";

function SocialInput({ value, onChange, platform }) {

  return (
    <div className="relative mt-4 w-[600px] ">
      <span className="absolute top-3 right-3 text-gray-500">
        {GetSocialIconComponent(platform)}
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border rounded px-10 py-2 edit-profile-input border-none outline-none"
        placeholder="لینک خود را وارد کنید"
      />
    </div>
  );
}
export default SocialInput;
