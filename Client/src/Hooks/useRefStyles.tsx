import { useEffect, useRef } from "react";
import { useStateContext } from "Context/context";
const styles = {
  sliderRef: "sliderBar",
  barRef: "appbar",
  footerRef: "footer",
};
type Ref = any;
const useRefStyles = (ref: Ref) => {
  // const { componentsStyles, setcomponentStyles } = useStateContext();
  //@ts-ignore
  let reference = componentsStyles[ref];
  useEffect(() => {
    const styleRect = ref.current.getBoundingClientRect().height;
    // setcomponentStyles({ ...componentsStyles, [ref]: styleRect });
  }, [reference, ref]);
};
export default useRefStyles;
