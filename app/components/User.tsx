import Image from "next/image";
import DarkMode from "../UI/DarkMode";
export default function User() {
  return (
    <div className="flex items-center gap-5">
      <DarkMode />
      <Image
        className="rounded-full"
        src={"/avatar/avatar1.webp"}
        width={40}
        height={40}
        alt="user"
      />
    </div>
  );
}
