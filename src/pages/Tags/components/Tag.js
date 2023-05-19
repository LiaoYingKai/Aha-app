export default function Tag({name, count}) {
  return (
    <div className="w-full max-w-[150px]">
      <div className="mb-2.5 h-[150px] w-full rounded-[10px] bg-light-black px-2 py-3 flex items-end">
        <div className="text-2xl leading-9 line-clamp-1 border-4 border-solid border-white rounded-[10px] py-1 px-2">{name}</div>
      </div>
      <p className="mb-1 line-clamp-1 text-sm">{name}</p>
      <p className="text-xs">{count} Results</p>
    </div>
  );
}
