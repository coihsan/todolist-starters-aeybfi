"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { iconsUI } from "../constants/icons";
import WorkspaceNavbar from "./WorkspaceNavbar";
import Image from "next/image";
import Link from "next/link";
import { navmenu } from "../constants/menu";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`${isOpen ? "w-56" : "w-max"} border-r-2 border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-950`}
    >
      <nav className="flex flex-col px-3 h-full py-5 ">
        <div className="flex items-center gap-2">
          {!isOpen ? (
            <button className="buttonMenu" onClick={() => setIsOpen(true)}>
              {iconsUI.menu}
            </button>
          ) : (
            <button className="buttonMenu" onClick={() => setIsOpen(false)}>
              {iconsUI.menu}
            </button>
          )}
          <Link className={`${isOpen ? "hidden" : "block"}`} href={"#"}>
            <Image src={"/tiditodo.svg"} width={120} height={30} alt="logo" />
          </Link>
        </div>
        <div className="pt-12 flex flex-col">
          <span
            className={`${isOpen ? "hidden" : "block"} font-semibold text-zinc-500 text-[12px]`}
          >
            MENU
          </span>
          <div className="flex flex-col">
            {navmenu.map((nav) => (
              <Link
                className={`link ${pathname === "/" ? "active" : ""} flex items-center group hover:bg-slate-700 rounded-md pl-3 py-3 transition-all ease-in-out duration-150 hover:text-white`}
                key={nav.key}
                href={nav.href}
              >
                <span className="flex items-center justify-center fill-zinc-500 dark:fill-zinc-300 group-hover:fill-white transition-all ease-in-out duration-150">
                  {nav.icon}
                </span>
                <span
                  className={`${isOpen ? "hidden" : "block"} font-bold pl-3 leading-none align-baseline text-sm`}
                >
                  {nav.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {!isOpen && <WorkspaceNavbar />}
      </nav>
    </motion.section>
  );
}
