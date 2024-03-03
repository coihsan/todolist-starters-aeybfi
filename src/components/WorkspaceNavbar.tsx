"use client";
import { iconsUI } from "../lib/constants/icons";
export default function WorkspaceNavbar() {
  return (
    <div className="overflow-y-scroll pt-6">
      <div className="flex items-center justify-between w-full pb-6">
        <span className="font-semibold text-zinc-500 text-[12px] mb-13">
          WORKSPACE
        </span>
        <button>{iconsUI.add}</button>
      </div>
      <input
        className="w-full rounded-lg h-[30px] pl-3 border border-zinc-300"
        type="search"
        name=""
        id=""
        placeholder="Search"
      />
    </div>
  );
}
