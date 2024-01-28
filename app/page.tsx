import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
export default function Home() {
  return (
    <section className="h-[100svh] w-full">
      <Navbar />
      <main className="px-12 max-sm:px-6">
        <TaskList />
      </main>
      <Footer />
    </section>
  );
}
