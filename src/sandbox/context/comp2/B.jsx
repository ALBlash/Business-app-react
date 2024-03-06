import { useAge } from "../AgeProvide";
import C from "./C";

const B = () => {
    const { age } = useAge();
    return (
        <>
            <p>age in B: {age}</p>
            <C />
        </>
    )
}
export default B;