import WorkspaceNavbar from "./WorkspaceNavbar";
import Navmenu from "../components/Navmenu";
import Image from "next/image";
export default function Navbar() {
  return (
    <section className="border-r-2 border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-950">
      <nav className="flex flex-col w-64 px-6 h-full py-5 ">
        <Image src={"/vercel.svg"} height={20} width={110} alt="user" />
        <div className="pt-12 flex flex-col">
          <span className="font-semibold text-zinc-500 text-[12px]">MENU</span>
          <Navmenu styling={"flex-col"} />
        </div>
        <WorkspaceNavbar />
      </nav>
    </section>
  );
}
