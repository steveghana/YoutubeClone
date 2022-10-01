import { createContext, useContext, useState } from "react";

interface StateProps {
  toggleSidebar: boolean;
  settoggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  expandSideBar: () => void;
}
export const StateProvider = createContext<StateProps | undefined>(undefined);

export const StateContextProvider = ({ children }: any) => {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  const expandSideBar = () => settoggleSidebar((prev) => !prev);

  return (
    <StateProvider.Provider
      value={{ toggleSidebar, settoggleSidebar, expandSideBar }}
    >
      {children}
    </StateProvider.Provider>
  );
};

export const useStateContext = () => {
  let ctx = useContext(StateProvider);
  if (ctx === undefined) {
    throw Error("No context available");
  }
  return ctx;
};
