export default function FollowLoadingItem() {
  return (
    <div className="flex w-full animate-pulse gap-4 mb-5">
      <div className="h-10 w-10 rounded bg-slate-700"></div>
      <div className="flex-1">
        <p className="h-4 w-1/2 rounded bg-slate-700 mb-1"></p>
        <p className="h-4 w-1/4 rounded bg-slate-700"></p>
      </div>
    </div>
  );
}
