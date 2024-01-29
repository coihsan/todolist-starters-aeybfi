import Greeting from "../components/Greeting";
import AddNewTask from "../UI/AddNewTask";
export default function Header() {
  return (
    <header className="flex items-center justify-between w-full pt-6">
      <Greeting />
      <AddNewTask />
    </header>
  );
}
