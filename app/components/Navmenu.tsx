"use client";
import { useState } from "react";
import Link from "next/link";
import { iconNav } from "../constants/icons";
interface Props {
  key: number;
  icon: JSX.Element;
  text: string;
  href: string;
}
const navmenu: Props[] = [
  { key: 0, icon: iconNav.house, text: "Home", href: "/" },
  { key: 1, icon: iconNav.workspace, text: "Workspace", href: "/" },
  { key: 2, icon: iconNav.checklist, text: "Task", href: "/" },
  { key: 3, icon: iconNav.document, text: "Document", href: "/" },
  { key: 4, icon: iconNav.archive, text: "Archive", href: "/" },
];
interface Props {
  styling: string;
}
export default function Navmenu({ styling }: Props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(isActive);
    }
  };
  return (
    <nav className={`${styling} flex items-start flex-col gap-1`}>
      {navmenu.map((nav) => (
        <Link
          className="flex items-center group hover:bg-slate-700 rounded-md px-5 py-3 w-full transition-all ease-in-out duration-150 hover:text-white "
          key={nav.key}
          href={nav.href}
        >
          <span className="flex items-center justify-center fill-onyx-500 dark:fill-onyx-300 group-hover:fill-white transition-all ease-in-out duration-150">
            {nav.icon}
          </span>
          <span className="font-semibold pl-3 leading-none align-baseline">
            {nav.text}
          </span>
        </Link>
      ))}
    </nav>
  );
}
