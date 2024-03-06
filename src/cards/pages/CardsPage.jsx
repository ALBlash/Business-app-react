import Container from '@mui/material/Container'
import PageHeader from '../../components/PageHeader'
// import Cards from '../components/Cards'
import { useEffect } from 'react'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'


const CardsPage = () => {

    const { value: { cards, error, isPending, filteredCards }, handleGetCards, handleDeleteCard, handleGetMyCards } = useCards();

    //will run once
    useEffect(() => {
        handleGetCards();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    }

    return (
        <Container >
            <PageHeader title='Cards' subtitle='Here you can find business cards from all categories, once you sign up/log in you are able to add your own business cards' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )
}

export default CardsPage