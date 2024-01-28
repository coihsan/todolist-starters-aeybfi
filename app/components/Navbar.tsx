import DarkMode from "../UI/DarkMode";
import UserLogin from "./UserLogin";
import Navmenu from "../components/Navmenu";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center flex-col justify-between w-72 px-6 py-5 border-r-2 border-zinc-200 bg-onyx-50 dark:bg-onyx-950">
        {/* <Image src={"/vercel.svg"} height={20} width={110} alt="user" /> */}
        <Navmenu styling={"flex-col"} />
        <div className="flex items-center gap-3">
          <UserLogin />
          <DarkMode />
        </div>
      </nav>
    </>
  );
}
