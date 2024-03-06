import { node } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";


const AgeContext = createContext(null);

export const AgeProvider = ({ children }) => {

    const [age, setAge] = useState();

    useEffect(() => {
        setAge(20)
    }, []);

    return (
        <AgeContext.Provider value={{ age, setAge }}>
            {children}
        </AgeContext.Provider>
    )
}

export const useAge = () => {
    const context = useContext(AgeContext);
    if (!context) {
        throw new Error('useAge must be within a AgeProvider')
    }
    return context;
}

AgeProvider.propTypes = {
    children: node.isRequired
}