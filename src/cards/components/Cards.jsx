import { Container, Stack, Typography } from "@mui/material";
import CardComponent from "./card/Card";

const Cards = ({ cards, onDeleteCard, onLike }) => {

    const methods = { onDeleteCard, onLike };

    if (!cards.length) {
        return <Typography>No Cards were found to genarate</Typography>
    }

    return (
        <Container>
            <Stack spacing={1} gap={2} direction="row" my={2} flexWrap="wrap" justifyContent="center">
                {
                    cards.map((card, i) => (<CardComponent {...methods} card={card} key={i}></CardComponent>))
                }
            </Stack>
        </Container>
    )
}
export default Cards;