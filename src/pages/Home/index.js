import { HomeProvider } from "./providers/HomeProvider";

import Home from "./Home";

export default function Root() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}
