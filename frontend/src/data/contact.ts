import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const contactInfo = [
  {
    id: 1,
    label: "Address:",
    value: "Gullberg III,\nLahore",
    icon: MapPin,
  },
  {
    id: 2,
    label: "My Email:",
    value: "jawadahmad.dev.pk@gmail.com",
    icon: Mail,
  },
  {
    id: 3,
    label: "Call Me Now:",
    value: "0344-4704080",
    icon: Phone,
  },
];

export const contactSocialLinks = [
  {
    id: 1,
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    id: 2,
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    id: 3,
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];
