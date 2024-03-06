import { node } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react"

const NameContext = createContext(null);

export const NameProvider = ({ children }) => {

    const [name, setName] = useState();

    // we will set the state with use effect so we now it will render once the component is mounted
    useEffect(() => {
        setName('David')
    }, []);

    return (
        // we return with the NameContext the propvider 
        // and as an object value the name and the option to change that state
        // now we have the provider to return
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
};

export const useName = () => {
    const context = useContext(NameContext);
    if (!context) {
        throw new Error('useName must be used within NameProvider')
    }
    return context;
}

NameProvider.propTypes = {
    children: node.isRequired,
}
