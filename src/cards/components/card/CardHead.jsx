import { CardMedia } from "@mui/material";

// const defaultImage = "https://demofree.sirv.com/nope-not-here.jpg"; // Provide the correct path to your default image
// const defaultImage = "https://www.hostpapa.com/blog/app/uploads/2020/09/What-are-broken-links-header.jpg"
const defaultImage = "https://th.bing.com/th/id/r.1db6e61d91561f33132ef650690e374a?rik=m6%2bnvscqqenb9g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fflower-png-dahlia-flower-png-transparent-image-1644.png"

const CardHead = ({ image }) => {
    const { url, alt } = image;

    const handleImageError = (event) => {
        const imgElement = event.target;
        imgElement.src = defaultImage;
        imgElement.style.opacity = "0.7";
        imgElement.style.height = 'fit-content'
        // imgElement.style.borderRadius = "20px";
        // Add any other inline styles you want
    };

    return (
        <CardMedia
            component="img"
            height="194"
            src={url}
            alt={alt}
            onError={handleImageError}
        />
    );
};

export default CardHead;
