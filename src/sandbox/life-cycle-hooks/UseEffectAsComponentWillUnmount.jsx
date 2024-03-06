import { useEffect } from "react";
import { getTime } from "./utils";

const UseEffectAsComponentWillUnmount = () => {

    useEffect(() => {
        console.log("in useEffect", getTime());
        return () => {
            console.log(`useEffect cleanup: component close: will unmount ${getTime()}`);
        }
    }, []);

    return console.log("in render ");
}

export default UseEffectAsComponentWillUnmount;