import { useDispatch } from "react-redux";
import { AppDispatch } from "../typings/store";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => useDispatch<AppDispatch>();
