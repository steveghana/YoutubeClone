import React, { createContext, useContext, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
type Boolean = React.Dispatch<React.SetStateAction<boolean>>
interface StateProps {
  toggleSidebar: boolean;
  settoggleSidebar: Boolean;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  expandSideBar: () => void;
  setShowsideBar:Boolean;
  showSidebar:boolean;
  videos: null | object | string | Array<object>;
  selectedCategory:string;
}

export const StateProvider = createContext<StateProps | undefined>(undefined);

export const StateContextProvider = ({ children }: any) => {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  const expandSideBar = () => settoggleSidebar((prev) => !prev);
  const [showSidebar, setShowsideBar] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  // React.useEffect(() => {
  //   setVideos(null);
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
  //     setVideos(data.items)
  //   );
  // }, [selectedCategory]);
  return (
    <StateProvider.Provider
      value={{
        toggleSidebar,
        settoggleSidebar,
        expandSideBar,
        showSidebar,
        setShowsideBar,
        videos,
        setSelectedCategory,
        selectedCategory,
      }}
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
