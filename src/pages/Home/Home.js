import { Outlet } from "react-router-dom";

import Follow from "../../containers/Follow";

export default function Home() {
  return (
    <div className="flex h-full">
      <div className="h-full w-full flex-1 overflow-y-scroll p-5 pt-0 md:pb-20 md:pt-14">
        <Outlet></Outlet>
      </div>
      <Follow />
    </div>
  );
}
