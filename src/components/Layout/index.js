import Nav from "../Nav";

export default function Layout({children}) {
  return (
    <main className="flex h-full w-full flex-col bg-black md:flex-row">
      <Nav></Nav>
      <section className="scroll-hidden order-1 flex-1 overflow-y-scroll md:order-2">
        {children}
      </section>
    </main>
  );
}
