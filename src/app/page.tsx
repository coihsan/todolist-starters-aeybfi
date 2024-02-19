import Image from "next/image";
import Sidebar from "@/src/components/Sidebar";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import TaskList from "@/src/components/TaskList";
export default function Home() {
  return (
    <section className="h-[100svh] w-full flex">
      <main className="px-6 max-sm:px-6 bg-white dark:bg-slate-800 w-full">
        <Header />
        <TaskList />
        <Footer />
      </main>
    </section>
  );
}
