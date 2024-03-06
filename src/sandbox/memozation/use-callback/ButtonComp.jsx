import Button from '@mui/material/Button'
import { func, node } from 'prop-types'
import { memo } from 'react';

const ButtonComp = ({ handleClick, children, name, value }) => {
    console.log(`rendering button for ${name}, version: ${value}`);

    return (
        <Button variant="outlined" color="primary" onClick={handleClick}>
            {children}
        </Button>
    )
}

ButtonComp.propTypes = {
    handleClick: func.isRequired,
    children: node.isRequired
}

// if the arguments dont change then the button wont re-render
export default memo(ButtonComp);