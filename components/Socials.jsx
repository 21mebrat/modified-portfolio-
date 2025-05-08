import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTelegramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@PROGRAMMING21",
    Icon: RiYoutubeLine,
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/mebratmatebie212121",
    Icon: RiLinkedinBoxFill,
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/profile.php?id=100070506502886",
    Icon: RiFacebookLine,
  },
  {
    name: "Teleagram",
    link: "https://t.me/mahtot2121",
    Icon: RiTelegramFill,
  },
  {
    name: "Github",
    link: "https://github.com/21mebrat/modified-portfolio-",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
