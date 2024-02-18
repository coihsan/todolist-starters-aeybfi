import WorkspaceNavbar from "./WorkspaceNavbar";
import Navmenu from "../components/Navmenu";
import Image from "next/image";
import Link from "next/link";
export function Logo() {
  return (
    <>
      <Link href={"#"}>
        <Image src={"/tiditodo.svg"} width={120} height={30} alt="logo" />
      </Link>
    </>
  );
}
export default function Navbar() {
  return (
    <section className="border-r-2 border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-950">
      <nav className="flex flex-col w-56 px-6 h-full py-5 ">
        <Logo />
        <div className="pt-12 flex flex-col">
          <span className="font-semibold text-zinc-500 text-[12px]">MENU</span>
          <Navmenu styling={"flex-col"} />
        </div>
        <WorkspaceNavbar />
      </nav>
    </section>
  );
}
