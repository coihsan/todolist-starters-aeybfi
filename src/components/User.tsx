import Image from "next/image";
import { ModeToggle } from "./costum/mode-toggle";
import { Avatar } from "./ui/avatar";
export default function User() {
  return (
    <div className="flex items-center gap-5">
      <Image
        className="rounded-full"
        src={"/avatar/avatar1.webp"}
        width={40}
        height={40}
        alt="user"
      />
      <ModeToggle />
    </div>
  );
}
