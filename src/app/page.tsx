import Header from "@/components/navigation";
import Footer from "@/components/Footer";
import TaskList from "@/components/TaskList";
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
