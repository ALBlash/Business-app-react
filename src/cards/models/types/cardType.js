import addressType from "./addressType";
import imageType from "./imageType";
import PropTypes from 'prop-types';


const cardType = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: addressType.isRequired,
    image: imageType.isRequired,
    bizNumber: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    web: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
});

cardType.defaultProps = {
    id: undefined,
    web: undefined
}
export default cardType;