import { useSelector } from "react-redux";
import { RootState } from "typings/store";

export default <TState = RootState, TSelected = unknown>(
  selector: (state: TState) => TSelected
) => useSelector(selector);
