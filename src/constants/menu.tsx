import { iconNav } from "@/src/constants/icons";
interface Props {
  key: number;
  icon: JSX.Element;
  text: string;
  href: string;
  pathname: string;
}
export const navmenu: Props[] = [
  {
    key: 0,
    icon: iconNav.house,
    text: "Home",
    href: "/",
    pathname: "/home",
  },
  {
    key: 1,
    icon: iconNav.workspace,
    text: "Workspace",
    href: "/workspace",
    pathname: "/workspace",
  },
  {
    key: 2,
    icon: iconNav.checklist,
    text: "Task",
    href: "/task",
    pathname: "/task",
  },
  {
    key: 3,
    icon: iconNav.document,
    text: "Document",
    href: "/document",
    pathname: "/document",
  },
  {
    key: 4,
    icon: iconNav.archive,
    text: "Archive",
    href: "/archive",
    pathname: "/archive",
  },
];
