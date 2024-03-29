"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import WorkspaceNavbar from "../WorkspaceNavbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navmenu } from "@/src/lib/menu";
const variants = {
  open: { width: 80 },
  closed: { width: 256 },
};
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.section
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="max-w-56 h-[100vh] border-r-2 border-muted bg-zinc-50 dark:bg-zinc-950"
    >
      <nav className="flex flex-col px-3 h-full py-5 relative">
        <div className="absolute right-[-15px] top-5">
          {!isOpen ? (
            <button className="buttonMenu" onClick={() => setIsOpen(true)}>
              <ChevronLeft />
            </button>
          ) : (
            <button className="buttonMenu" onClick={() => setIsOpen(false)}>
              <ChevronRight />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 relative">
          <Image src={"/tiditodo-icon.svg"} width={30} height={30} alt="logo" />
          {!isOpen && (
            <Image
              src={"/tiditodo-name.svg"}
              width={78}
              height={30}
              alt="logo"
            />
          )}
        </div>
        <div className="pt-12 flex flex-col">
          <span className="font-semibold text-zinc-500 text-[12px]">MENU</span>
          <div className="flex flex-col">
            {navmenu.map((nav) => (
              <Link
                className={`link ${pathname === nav.pathname ? "active" : ""} flex items-center group hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md pl-3 py-3 transition-all ease-in-out duration-150`}
                key={nav.key}
                href={nav.href}
              >
                <span className="flex items-center justify-center fill-zinc-500 dark:fill-zinc-300 transition-all ease-in-out duration-150">
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
