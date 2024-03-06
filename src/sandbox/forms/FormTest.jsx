import Joi from 'joi';
import Container from '@mui/material/Container'
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import useForm from '../../forms/hooks/useForm';
import ROUTES from '../../routes/routeModel';

const FormTest = () => {
    const INITIAL_FORM = {
        first: '',
        last: '',
    };

    const schema = {
        first: Joi.string().min(2).required(),
        last: Joi.string().min(2).required(),
    };

    const handleSubmit = (data) => console.log(data);

    const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);

    return (
        <Container sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <Form
                title='Test form'
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                styles={{ maxWidth: "450px" }}
                onChange={rest.validateForm}
                to={ROUTES.SANDBOX}
            >
                <Input
                    label={'First Name'}
                    name={'first'}
                    data={value.data}
                    error={value.errors.first}
                    handleChange={rest.handleChange}
                />
                <Input
                    label={'Last Name'}
                    name={'last'}
                    data={value.data}
                    error={value.errors.last}
                    handleChange={rest.handleChange}
                />

            </Form>

        </Container>
    )
};

export default FormTest;
