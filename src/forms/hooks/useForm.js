import { useCallback, useMemo, useState } from "react"
import Joi from 'joi'
import { func, object } from "prop-types";
// 3 things we pass that we need for a form
// 1: the initial form to start with
// 2: schema that is with joi, to validate and to know what we are expecting in this form (the rules)[name need to have...]
// 3: handleSubmit for submition

const useForm = (initialForm, schema, handleSubmit) => {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleReset = useCallback(() => {
        setData(initialForm);
        setErrors({});
    }, [initialForm]);

    const validateProperty = useCallback(({ name, value }) => {

        //we create an obj and create a schema
        const obj = { [name]: value };
        const genSchema = Joi.object({ [name]: schema[name] });

        // validate and catch errors and return the first detail as a message for us to know what the problem could be if existing 
        const { error } = genSchema.validate(obj);
        return error ? error.details[0].message : null;

        // if the schema changed then we fire it again, but so for callBack memoized it
    }, [schema]);


    // with every change we update the error state;
    const handleChange = useCallback((e) => {
        const target = e.target;
        const { name, value } = target;

        // validation by the schema
        const errorMessage = validateProperty({ name, value });

        // if there is an error so first we add to the error state
        // the errors we had before and then we add the current error from the current name/target;
        if (errorMessage) setErrors(prev => ({ ...prev, [name]: errorMessage }));

        // else: when there are no errors
        // this is called in Redux reducer
        // it takes a state and does some logic and updates a new state
        // basicaly deleting the error that we don't need
        else setErrors(prev => {
            const pbj = { ...prev };
            delete pbj[name];
            return pbj;
        });

        //and also we update the data state
        // we MESHARSHER/preserve all the previus and add the name and value
        setData(prev => ({ ...prev, [name]: value }));

        // validateProperty has its own instatns in its function it listens to schema
        // thats why we want to listen to this function when it changes
        // just to make sure this function (handleChange) is up to date with the schema 
    }, [validateProperty]);


    const validateForm = useCallback(() => {
        // will be validating the whole entire form probebly import it from a different JS page
        const schemaForValidation = Joi.object(schema);
        const { error } = schemaForValidation.validate(data);

        if (error) return error;
        return null;

        // this function is pure but the data and schema
        // so we listen for any changes that they have and memoize it 'till next time
    }, [data, schema]);


    // we will activate the handleSubmit on the data
    const onSubmit = useCallback(() => {
        // fire the handleSubmit on the current state of the data
        handleSubmit(data);
        // the reason we put handleSubmit in the dependency as well is
        // its a proprty that is sent to useForm and could  and have a different submition


        // so every time they change we create a new onSubmit
    }, [data, handleSubmit]);

    // pojo = plain on javascript object
    // going to be the same object unless data/errors have changed
    const value = useMemo(() => {
        return { data, errors };
    }, [data, errors]);


    return { handleChange, handleReset, onSubmit, validateForm, setData, value }
};

useForm.propTypes = {
    initialForm: object.isRequired,
    schema: object.isRequired,
    handleSubmit: func.isRequired
}

export default useForm;