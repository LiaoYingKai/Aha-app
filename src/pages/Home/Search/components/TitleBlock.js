export default function TitleBlock({ title, children }) {
  return (
    <div>
      <h2 className="mb-5 text-2xl leading-9">{title}</h2>
      {children}
      <hr className="hidden md:block border-t-1 my-[30px] border-solid border-white border-opacity-50"></hr>
    </div>
  );
}
