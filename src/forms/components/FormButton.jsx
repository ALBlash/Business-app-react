import Button from '@mui/material/Button'
import { bool, func, node, string } from 'prop-types'
const FormButton = ({
    variant, component, size, color, onClick, disabled, node
}) => {
    return (
        <Button
            // type of..
            variant={variant}
            // set the html element
            component={component}
            size={size}
            color={color}
            onClick={onClick}
            disabled={disabled}
            fullWidth
        >
            {node}
        </Button>
    )
}

FormButton.propTypes = {
    variant: string.isRequired,
    component: string.isRequired,
    size: string.isRequired,
    color: string.isRequired,
    onClick: func.isRequired,
    disabled: bool.isRequired,
    node: node.isRequired
}

FormButton.defaultProps = {
    variant: 'contained',
    component: 'button',
    size: 'medium',
    color: 'primary',
    disabled: false
}

export default FormButton;