export default function LoadingItem({ className }) {
  const classNames = `w-full max-w-[150px] animate-pulse ${className}`
  return (
    <div className={classNames}>
      <div className="mb-2.5 h-[150px] w-full rounded-[10px] bg-slate-700"></div>
      <div className="mb-2 h-5 w-1/4 rounded bg-slate-700"></div>
      <div className="h-4 w-1/2 rounded bg-slate-700"></div>
    </div>
  );
}
