import { Outlet } from "react-router-dom";

import Follow from "../../containers/Follow";

export default function Home() {
  return (
    <div className="flex h-full">
      <div className="flex-1">
      <Outlet></Outlet>
      </div>
      <Follow />
    </div>
  );
}
