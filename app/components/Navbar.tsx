import UserLogin from "./UserLogin";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-12 max-sm:px-6 py-5 border-b-2 border-zinc-200 bg-onyx-50">
        <Image src={"/vercel.svg"} height={40} width={110} alt="user" />
        <UserLogin />
      </nav>
    </>
  );
}
