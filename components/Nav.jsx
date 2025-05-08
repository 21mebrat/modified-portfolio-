import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex fixed z-50 bottom-0 w-full xl:top-20 xl:right-[2%] xl:w-16 xl:h-screen xl:max-w-md">
      <div className="flex w-full items-center justify-between bg-white/10 backdrop-blur-sm text-3xl px-4 md:px-20 lg:px-32 xl:px-0 h-[80px] xl:flex-col xl:h-max xl:justify-center xl:gap-y-10 xl:py-8 xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${
              pathname === link.path &&
              "text-green-500 border-r-4 border-green-500 shadow-lg shadow-green-500/50 pr-4 animate-pulse"
            } relative flex items-center group hover:text-green-500 transition-all duration-300`}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="hidden md:group-hover:flex absolute pr-14 right-0"
            >
              <div className="bg-white text-primary flex items-center p-[6px] rounded-[3px] relative">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* triangle */}
                <div
                  className="absolute -right-2 border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
