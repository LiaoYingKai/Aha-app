export default function TagContainer({ children }) {
  return (
    <div className="grid w-full grid-cols-2 justify-center gap-6 px-[5px] sm:grid-cols-3 md:grid-cols-4 md:gap-y-9 md:px-0 lg:grid-cols-5">
      {children}
    </div>
  );
}
