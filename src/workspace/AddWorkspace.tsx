"use client";
import { iconsUI } from "../lib/constants/icons";
import { useEffect, useState } from "react";
export default function AddWorkspace() {
  const [isAdd, setIsAdd] = useState([]);
  return <button>{iconsUI.add}</button>;
}
