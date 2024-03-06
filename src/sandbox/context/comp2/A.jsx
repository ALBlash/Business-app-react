import { AgeProvider } from "../AgeProvide";
import B from "./B";

const A = () => {
    return (
        <AgeProvider>
            <B />
        </AgeProvider>
    )
}
export default A;