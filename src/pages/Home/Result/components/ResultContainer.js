export default function ResultContainer({ children }) {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
