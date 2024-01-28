import Link from "next/link";
import { iconNav } from "../constants/icons";
interface Props {
  key: number;
  icon: JSX.Element;
  text: string;
  href: string;
}
const navmenu: Props[] = [
  { key: 0, icon: iconNav.house, text: "Dashboard", href: "/" },
  { key: 1, icon: iconNav.star, text: "Today", href: "/" },
  { key: 2, icon: iconNav.star, text: "Upcoming", href: "/" },
  { key: 3, icon: iconNav.star, text: "Anytime", href: "/" },
  { key: 4, icon: iconNav.star, text: "Sameday", href: "/" },
  { key: 5, icon: iconNav.star, text: "Notes", href: "/" },
  { key: 6, icon: iconNav.star, text: "Trash", href: "/" },
];
interface Props {
  styling: string;
}
export default function Navmenu({ styling }: Props) {
  return (
    <nav className={`${styling} flex items-start flex-col gap-1`}>
      {navmenu.map((nav) => (
        <Link
          className="flex items-center hover:bg-indigo-700 rounded-md px-5 py-3 w-full transition-all ease-in-out duration-300 hover:text-white"
          key={nav.key}
          href={nav.href}
        >
          <span className="w-5 h-5 fill-onyx-500 dark:fill-onyx-300">
            {nav.icon}
          </span>
          <span className="font-semibold pl-6">{nav.text}</span>
        </Link>
      ))}
    </nav>
  );
}
