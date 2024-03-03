import Greeting from "../components/Greeting";
import User from "../components/User";
export default function Header() {
  return (
    <header className="border-b-[1px] border-muted">
      <div className="flex items-center justify-between w-full py-4 px-6">
        <h1 className="font-bold text-md">Workspace</h1>
        <User />
      </div>
    </header>
  );
}
