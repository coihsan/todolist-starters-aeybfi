import Image from "next/image";
export default function UserLogin() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-1xl font-bold max-sm:hidden">YourName</span>
      <button type="button">
        <Image
          className="rounded-full"
          src={"/avatar/avatar1.webp"}
          height={40}
          width={40}
          alt="user"
        />
      </button>
    </div>
  );
}
