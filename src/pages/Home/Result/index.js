import { ResultProvider } from "./providers/ResultProvider";

import Result from "./Result.js";

export default function Root() {
  return (
    <ResultProvider>
      <Result />
    </ResultProvider>
  );
}
