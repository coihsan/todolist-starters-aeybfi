import DarkMode from "../UI/DarkMode";
import UserLogin from "./UserLogin";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-12 max-sm:px-6 py-5 border-b-2 border-zinc-200 bg-onyx-50 dark:bg-onyx-950">
        <Image src={"/vercel.svg"} height={20} width={110} alt="user" />
        <div className="flex items-center gap-3">
          <UserLogin />
          <DarkMode />
        </div>
      </nav>
    </>
  );
}
