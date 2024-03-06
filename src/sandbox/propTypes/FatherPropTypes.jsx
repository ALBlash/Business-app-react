import ChildPropTypes from "./ChildPropTypes";

const FatherPropTypes = () => {

    const exactObject = {
        key: "hello",
        second: 5,
        third: true
    };

    return (
        <div>
            <h1>Father</h1>
            <ChildPropTypes
                string="hey i'm the child"
                number={1}
                boolean={true}
                object={{ key: "value" }}
                array={[1, 2, 3]}
                func={(e) => console.log(e)}
                arrayOfObjects={[
                    { name: "Ari" },
                    { name: "Mosh" },
                    { name: "Eli" }
                ]}
                id={1}
                spesificId="asd"
                exactObject={exactObject}
                name="Ari"
                node={<span>im the node</span>}
                children
            >
                <p>ArrayOf elements</p>
                <p>and yes we are children</p>
            </ChildPropTypes>
            {/* <ChildPropTypes
                string="hey i'm the child"
                number={1}
                boolean={false}
                object={{ key: "value" }}
                array={[1, 2, 3]}
                func={(e) => console.log(e)}
                arrayOfObjects={[
                    { name: "Ari" },
                    { name: "Mosh" },
                    { name: "Eli" }
                ]}
                id={1}
                spesificId="asd"
                exactObject={exactObject}
            /> */}


        </div>
    )
}
export default FatherPropTypes;