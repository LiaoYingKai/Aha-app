import Tags from "./Tags";
import {TagsProvider} from "./providers/TagsProvider";

export default function Root() {
  return (
    <TagsProvider>
      <Tags />
    </TagsProvider>
  );
}
