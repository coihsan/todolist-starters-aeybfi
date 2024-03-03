import { SignInButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <section className="h-[100svh] w-full flex">
      <main className="px-6 max-sm:px-6 w-full">
        <SignInButton />
      </main>
    </section>
  );
}
