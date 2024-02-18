"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { iconsUI } from "../constants/icons";
import WorkspaceNavbar from "./WorkspaceNavbar";
import Image from "next/image";
import Link from "next/link";
import { navmenu } from "../constants/menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(true);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="border-r-2 border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-950"
    >
      <nav
        className={`${isOpen ? "w-56" : " w-min"} flex flex-col px-6 h-full py-5 `}
      >
        <div className="flex items-center gap-3">
          {!isOpen ? (
            <button onClick={() => setIsOpen(true)}>{iconsUI.menu}</button>
          ) : (
            <button onClick={() => setIsOpen(false)}>{iconsUI.menu}</button>
          )}
          <Logo />
        </div>
        <div className="pt-12 flex flex-col">
          <span className="font-semibold text-zinc-500 text-[12px]">MENU</span>
          <Navmenu showText={showText} styling="flex-col" />
        </div>
        <WorkspaceNavbar />
      </nav>
    </motion.section>
  );
}
interface Props {
  key: number;
  icon: JSX.Element;
  text: string;
  href: string;
}

interface Propss {
  styling: string;
  buka: () => void;
  showText: true;
}
export function Navmenu({ styling, buka, showText }: Propss) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(isActive);
    }
  };
  return (
    <nav className={`${styling} flex flex-col gap-1`}>
      {navmenu.map((nav) => (
        <Link
          className={`${isActive ? "bg-slate-700" : "bg-transparant"}  flex items-center group hover:bg-slate-700 rounded-md pl-3 py-3 w-full transition-all ease-in-out duration-150 hover:text-white`}
          key={nav.key}
          href={nav.href}
        >
          <span className="flex items-center justify-center fill-onyx-500 dark:fill-onyx-300 group-hover:fill-white transition-all ease-in-out duration-150">
            {nav.icon}
          </span>
          {showText && (
            <span className="font-semibold pl-3 leading-none align-baseline text-sm">
              {nav.text}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}

export function Logo() {
  return (
    <>
      <Link href={"#"}>
        <Image src={"/tiditodo.svg"} width={120} height={30} alt="logo" />
      </Link>
    </>
  );
}
