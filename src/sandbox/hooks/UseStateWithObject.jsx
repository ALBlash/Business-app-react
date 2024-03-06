import { useState } from "react";

const UseStateWithObject = () => {
    const INITIAL_NAME = {
        first: "",
        last: "",
    };

    const [name, setName] = useState(INITIAL_NAME);

    // const blah = () => {
    //     setName({ ...name, first: "blah", last: "blah2" })
    // }

    return (
        <>
            <form>
                <h5>your name: {name.first} {name.last}</h5>

                <input type="text"
                    placeholder="first name"
                    onChange={(e) => setName({ ...name, first: e.target.value })}
                />

                <input type="text"
                    placeholder="last name"
                    onChange={(e) => setName({ ...name, last: e.target.value })}
                />

            </form>
            {/* <button onClick={blah}>blah</button> */}
        </>
    )
}

export default UseStateWithObject;