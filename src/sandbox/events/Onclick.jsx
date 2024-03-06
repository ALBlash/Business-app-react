import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Onclick = () => {
    // Using useState to manage the count state
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('I got clicked');

        // Updating the count when the button is clicked
        setCount(count + 1);
    };

    return (
        <Button variant="outlined" color="primary" onClick={handleClick}>
            Click + {count}
        </Button>
    );
};

export default Onclick;
