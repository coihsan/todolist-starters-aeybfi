import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
export default function Home() {
  return (
    <section className="h-[100svh] w-full flex">
      <Navbar />
      <main className="px-6 max-sm:px-6 bg-white dark:bg-slate-800 w-full">
        <Header />
        <TaskList />
        <Footer />
      </main>
    </section>
  );
}
