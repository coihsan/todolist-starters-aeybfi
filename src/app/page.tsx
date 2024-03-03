import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskList from "../components/TaskList";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../components/costum/mode-toggle";
export default function Home() {
  return (
    <section className="h-[100svh] w-full flex">
      <main className="px-6 max-sm:px-6 bg-white dark:bg-slate-800 w-full">
        {/* <ModeToggle />
        <UserButton />
        <Header />
        <TaskList />
        <Footer /> */}
      </main>
    </section>
  );
}
