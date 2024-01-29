"use client";
import { useState } from "react";
import { iconsUI } from "../constants/icons";
import ModalAddTask from "../UI/ModalAddTask";
export default function AddNewTask() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenModal(true)}
        className="flex items-center gap-3 px-5 py-3 bg-indigo-500 rounded-md shadow-md hover:scale-[1.05] hiver:shadow-xl transition-all duration-150 ease-in-out text-white fill-white"
      >
        {iconsUI.add} <span className="font-semibold">New Task</span>
      </button>
      {isOpenModal && <ModalAddTask />}
    </>
  );
}
