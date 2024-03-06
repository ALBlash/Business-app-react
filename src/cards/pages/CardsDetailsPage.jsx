import { useParams } from "react-router-dom";
import Container from '@mui/material/Container'
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect, useState } from "react"; // Import useState
import "../../styles/cards/cardDetailes.css"
import Spinner from "../../components/Spinner";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const CardsDetailsPage = () => {
    const { id } = useParams();
    const { value: { card }, handleGetCard } = useCards();
    const [isResizing, setIsResizing] = useState(false); // State to track resizing

    useEffect(() => {
        handleGetCard(id);
    }, [id]);

    const theme = useMuiTheme();
    const screenSize = useMediaQuery(theme.breakpoints.down('md'));

    const country = card?.address?.country;
    const state = card?.address?.state;
    const city = card?.address?.city;
    const street = card?.address?.street;
    const houseNumber = card?.address?.houseNumber;
    const zip = card?.address?.zip;

    const fullAddress = `${houseNumber} ${zip}, ${city}, ${state}, ${street}, ${country}`;

    useEffect(() => {
        const handleResize = () => {
            setIsResizing(true); // Set resizing to true
            setTimeout(() => setIsResizing(false), 100); // Set resizing to false after 100ms
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <PageHeader
                title="Business-Details"
                subtitle="Here you can find information about the card"
            />
            {" "}
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '610px'
                }}>
                {!card && <Spinner />}
                {fullAddress && (
                    <iframe
                        title="hey"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                        width="80%"
                        maxwidth="500"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                )}
                {!screenSize && !isResizing && ( // Check isResizing state
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Street</th>
                                <th>House Number</th>
                                <th>ZIP Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{card?.title}</td>
                                <td>{card?.phone}</td>
                                <td>{card?.email}</td>
                                <td>{country}</td>
                                <td>{city}</td>
                                <td>{street}</td>
                                <td>{houseNumber}</td>
                                <td>{zip}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {screenSize && !isResizing && ( // Check isResizing state
                    <>
                        <ul>
                            <li>
                                <strong>Title:</strong>{card?.title}
                            </li>
                            <li>
                                <strong>Phone:</strong>{card?.phone}
                            </li>
                            <li>
                                <strong>Email:</strong> {card?.email}
                            </li>
                            <li>
                                <strong>Country:</strong> {country}
                            </li>
                            <li>
                                <strong>City:</strong> {city}
                            </li>
                            <li>
                                <strong>Street:</strong> {street}
                            </li>
                            <li>
                                <strong>House Number:</strong> {houseNumber}
                            </li>
                            <li>
                                <strong>ZIP Code:</strong> {zip}
                            </li>
                        </ul>
                    </>
                )}
            </Container>
        </>
    )
}

export default CardsDetailsPage;
