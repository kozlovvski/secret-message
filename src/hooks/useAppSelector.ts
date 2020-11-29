import { useSelector } from "react-redux";
import { RootState } from "typings/store";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <TState = RootState, TSelected = unknown>(
  selector: (state: TState) => TSelected
) => useSelector(selector);
