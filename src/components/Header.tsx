import Greeting from "../components/Greeting";
import User from "../components/User";
export default function Header() {
  return (
    <header className="flex items-center justify-between w-full pt-6">
      <h1>Workspace</h1>
      <User />
    </header>
  );
}
