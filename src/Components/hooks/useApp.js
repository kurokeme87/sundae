import { useContext } from "react";
import { AppContext } from "../Providers/AppProvider";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
