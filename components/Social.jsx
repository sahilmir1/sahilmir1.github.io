import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sahilmir1" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mir-sahil-9381b8123/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div>
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
