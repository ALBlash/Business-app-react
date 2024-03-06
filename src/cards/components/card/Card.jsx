import { CardActionArea, Card } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routeModel";

//we recivie the card and its functions
const CardComponent = ({ card, onDeleteCard, onLike }) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ minWidth: 280, maxWidth: 350 }}>
            <CardActionArea
                onClick={() => navigate(`${ROUTES.CARDS_DETAILS}/${card._id}`)}
            >
                {/* send the image to card head, image is object containing "url" & "alt" */}
                <CardHead image={card.image} />
                {/* the card's info we send to the body where he will insert the info where it needs to */}
                <CardBody card={card} />
                {/* send the functions and card, the reason the card is sent is for the function to take the id */}
            </CardActionArea>
            <CardActionBar {...{ onDeleteCard, card, onLike }} />
        </Card>

    )
}

CardComponent.propTypes = {
    card: cardType.isRequired
}


export default CardComponent;