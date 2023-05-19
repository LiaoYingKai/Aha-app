import Follow from "./Follow";
import { FollowProvider } from "./providers/FollowProvider";

export default function Root() {
  return (
    <FollowProvider>
      <Follow />
    </FollowProvider>
  );
}
