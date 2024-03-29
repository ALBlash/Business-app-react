import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { bool, func, object, string } from 'prop-types'
import makeFirstLetterCapital from '../utils/algaMethod'

const Input = ({
    variant, type, name, data, label, required, error, handleChange, ...rest
}) => {
    return (
        <Grid item xs={12} {...rest}>
            <TextField
                variant={variant}
                label={makeFirstLetterCapital(label)}
                type={type}
                id={name}
                name={name}
                // put the name from data if exists
                value={data[name] ? data[name] : ''}
                required={required}
                // come with ...rest and will let u know if there is any problem with the data in the input
                helperText={error}
                // true/false if the error in helperText exist (so there is an error) the color will be drawn as error with this property
                error={Boolean(error)}
                onChange={handleChange}
                fullWidth
                autoComplete='off'
            />
        </Grid>
    )
}

Input.propTypes = {
    name: string.isRequired,
    required: bool.isRequired,
    type: string.isRequired,
    error: string,
    handleChange: func.isRequired,
    variant: string,
    data: object.isRequired
}

Input.defaultProps = {
    variant: 'outlined',
    type: 'text',
    required: true
}

export default Input