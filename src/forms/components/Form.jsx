import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"
import FormButton from "./FormButton";
import LoopIcon from '@mui/icons-material/Loop';
import { node, string, func, number, object } from "prop-types";
import { memo } from "react";

const Form = ({
    title,
    onSubmit,
    onReset,
    onChange,
    to,
    color,
    spacing,
    styles,
    children,
}) => {
    // so once we add a card or anything happens that we need to redirect the user to another page
    const navigate = useNavigate();

    return (
        <Box
            component="form"
            color={color}
            sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
            onSubmit={onSubmit}
            autoComplete="off"
            noValidate //we r not gonna be the once doing the validation, react logic will
        >
            <Typography variant="h5" align="center" component="h1">
                {title.toUpperCase()}
            </Typography>

            <Grid container spacing={spacing}>
                {children}
            </Grid>
            <Grid container spacing={1} my={2} direction="row" width="100">
                <Grid item xs={12} sm={6}>
                    <FormButton
                        node="cancel"
                        color="error"
                        component="div"
                        variant="outlined"
                        onClick={() => navigate(to)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormButton
                        // reset the form
                        node={<LoopIcon />}
                        component="div"
                        variant="outlined"
                        onClick={onReset}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormButton
                        color="primary"
                        node="submit"
                        disabled={!!onChange()}
                        onClick={onSubmit}
                        size="large"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}


export default memo(Form);

Form.propTypes = {
    children: node.isRequired,
    onSubmit: func.isRequired,
    onReset: func.isRequired,
    onChange: func.isRequired,
    color: string.isRequired,
    to: string.isRequired,
    spacing: number.isRequired,
    title: string.isRequired,
    styles: object.isRequired,
};


Form.defaultProps = {
    color: 'inherit',
    to: '/',
    spacing: 1,
    title: '',
    styles: {},
};