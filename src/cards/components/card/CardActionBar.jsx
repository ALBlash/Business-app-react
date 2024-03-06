
import { CardActions, Box, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditModeIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";
import ROUTES from "../../../routes/routeModel";
import { useNavigate } from "react-router-dom";
import useCards from "../../hooks/useCards";

const CardActionBar = ({
    onDeleteCard,
    card,
    onLike
}) => {

    const { handleLikeCard } = useCards();
    const { user } = useUser();
    const [isDialogOpen, setIsDialog] = useState(false);
    const navigate = useNavigate();

    const handleDialog = (term) => {
        if (term === "open") setIsDialog(true);
        else setIsDialog(false);
    };

    const handleDeleteCard = () => {
        handleDialog();
        onDeleteCard(card._id);
    };

    const handleLike = async () => {
        setLiked(prev => !prev);
        await handleLikeCard(card._id);
        await onLike();
    }

    const [isLiked, setLiked] = useState(() => !!user && !!card.likes.find(id => id === user._id));


    return (
        <>
            <CardActions
                disableSpacing
                sx={{ paddingTop: 0, justifyContent: 'space-between' }}>
                <Box>

                    {user && (user._id === card.user_id || user.isAdmin) && (
                        <IconButton onClick={() => handleDialog('open')}>
                            <DeleteIcon />
                        </IconButton>
                    )}



                    {user && (user._id === card.user_id || user.isAdmin) && (
                        <IconButton onClick={() => navigate(`${ROUTES.EDIT_CARD}/${card._id}`)}>
                            <EditModeIcon />
                        </IconButton>
                    )}



                </Box>
                <Box>
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    {user && (
                        <IconButton onClick={handleLike}>
                            <FavoriteIcon color={isLiked ? 'error' : 'inherit'} />
                        </IconButton>
                    )}
                </Box>

            </CardActions>
            <CardDeleteDialog
                isDialogOpen={isDialogOpen}
                onDelete={handleDeleteCard}
                onChangeDialog={handleDialog}
            />
        </>
    );
}

export default CardActionBar;