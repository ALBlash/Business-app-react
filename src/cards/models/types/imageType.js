import PropTypes from 'prop-types';

const imageType = PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, // fix the typo here
});

export default imageType;

