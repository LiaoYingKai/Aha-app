export default function Tag({ name, count }) {
  return (
    <div className="w-full max-w-[150px]">
      <div className="mb-2.5 flex h-[150px] w-full items-end rounded-[10px] bg-light-black px-2 py-3">
        <div className="line-clamp-1 rounded-[10px] border-4 border-solid border-white px-2 py-1 text-2xl leading-9">{name}</div>
      </div>
      <p className="mb-1 line-clamp-1 text-sm">{name}</p>
      <p className="text-xs">{count} Results</p>
    </div>
  );
}
