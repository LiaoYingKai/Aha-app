import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-10 bg-black text-white">
      <h1 className="text-6xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-300">
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}
