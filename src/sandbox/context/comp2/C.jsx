import { useAge } from "../AgeProvide";

const C = () => {
    const { age, setAge } = useAge();
    return (
        <>
            <p>age in C: {age}</p>
            <input type="text" onChange={({ target: { value } }) => setAge(value)} />
        </>
    );
}

export default C;