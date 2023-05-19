import { TagsProvider } from "./providers/TagsProvider";

import Tags from "./Tags";

export default function Root() {
  return (
    <TagsProvider>
      <Tags />
    </TagsProvider>
  );
}
