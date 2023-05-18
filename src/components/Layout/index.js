import Nav from "../Nav";

export default function Layout({children}) {
  return (
    <main className="h-full w-full bg-black flex md:flex-row flex-col">
      <Nav></Nav>
      <section className="flex-1 order-1 md:order-2">{children}</section>
    </main>
  );
}
