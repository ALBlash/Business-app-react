import { Container, Grid } from "@mui/material"
import PageHeader from "../components/PageHeader"
import "../styles/cards/aboutPage.css"
// import cardImage from "/assets/images/404.png"

const AboutPage = () => {
    return (
        <Container>
            <PageHeader title="Welcome to Our App" subtitle="Discover, Connect, and Share with ReactApp" />
            <Grid container spacing={2}>
                <Grid item md={8} xs={12} alignSelf="center" paddingTop="20px">
                    <div>
                        <h4>Key Features:</h4>

                        <p>
                            <strong>1. User Authentication:</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Sign Up:</strong> New users can easily create an account, providing a personalized space within our community.
                            </li>
                            <li>
                                <strong>Log In:</strong> Returning users can securely log in using their credentials, ensuring a seamless experience.
                            </li>
                        </ul>

                        <p>
                            <strong>2. Create Cards:</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Express Yourself:</strong> Craft personalized cards that represent your Buisness, experiences, or anything you'd like to share.
                            </li>
                            <li>
                                <strong>Visual Appeal:</strong> Enhance your cards with images, and expressive content.
                            </li>
                        </ul>

                        <p>
                            <strong>3. Manage Your Cards:</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Edit Cards:</strong> Tailor your content to perfection. Edit and update your cards to reflect the latest information or sentiments.
                            </li>
                            <li>
                                <strong>Delete Cards:</strong> Have a change of heart? Easily remove cards that no longer resonate with you.
                            </li>
                        </ul>

                        <p>
                            <strong>4. Social Interaction:</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Like Cards:</strong> Show appreciation for content that resonates with you. Likes are a way to acknowledge and support fellow users.
                            </li>
                            <li>
                                <strong>Connect with Others:</strong> Explore the diverse community, connect with like-minded individuals, and build meaningful connections.
                            </li>
                        </ul>

                        <p>
                            <strong>5. Personalized Experience:</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Your Space, Your Rules:</strong> Your profile is your canvas. Customize it to reflect your personality and interests.
                            </li>
                            <li>
                                <strong>Notifications:</strong> Stay informed about likes, comments, and interactions on your cards.
                            </li>
                        </ul>
                    </div>

                    <hr />
                    <div>
                        <h3>How It Works:</h3>
                        <ol>
                            <li>
                                <strong>Sign Up or Log In:</strong> Start by creating your account or log in if you're a returning user. Your journey begins here.
                            </li>
                            <li>
                                <strong>Create Your Cards:</strong> Craft beautiful cards that represent your unique perspective. Add multimedia content to make them stand out.
                            </li>
                            <li>
                                <strong>Manage Your Content:</strong> Edit or delete your cards as you evolve. Your content, your control.
                            </li>
                            <li>
                                <strong>Connect and Interact:</strong> Engage with the community. Like and connect with others who share your interests.
                            </li>
                            <li>
                                <strong>Enjoy a Personalized Experience:</strong> Your profile, your way. Personalize it to make it uniquely yours.
                            </li>
                        </ol>
                    </div>

                    <div>
                        <h3>Join BCard Today!</h3>
                        <p>
                            Whether you're an avid content creator or someone looking to explore and connect, BCard welcomes you to a vibrant community. Start your journey today, and let's build a space where creativity, connection, and expression thrive.
                        </p>
                    </div>

                </Grid>
                <Grid item md={4} xs={12} alignSelf="center" sx={{ display: { md: 'flex', xs: "none" }, justifyContent: "center" }}>
                    <img src='/assets/images/business-card.png' alt="card" width="100%" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutPage;