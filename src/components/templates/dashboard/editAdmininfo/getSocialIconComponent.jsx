import { BiLogoGmail } from "react-icons/bi";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLink,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaSnapchatGhost,
  FaWhatsapp,
  FaRedditAlien,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export default function GetSocialIconComponent(type) {
  switch (type.toLowerCase()) {
    case "instagram":
      return <FaInstagram />;
    case "telegram":
      return <FaTelegramPlane />;
    case "linkedin":
      return <FaLinkedin />;
    case "facebook":
      return <FaFacebook />;
    case "twitter":
      return <FaTwitter />;
    case "youtube":
      return <FaYoutube />;
    case "pinterest":
      return <FaPinterest />;
    case "snapchat":
      return <FaSnapchatGhost />;
    case "whatsapp":
      return <FaWhatsapp />;
    case "reddit":
      return <FaRedditAlien />;
    case "github":
      return <FaGithub />;
    case "discord":
      return <FaDiscord />;
    case "gmail":
      return <BiLogoGmail />;
    default:
      return <FaLink />;
  }
}
