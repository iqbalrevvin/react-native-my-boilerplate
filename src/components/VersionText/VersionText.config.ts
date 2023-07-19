import PropTypes from 'prop-types';

const defaultProps = {
    version: process.env.VERSION_APPS,
};

const propTypes = {
    version: PropTypes.string,
};

export default { defaultProps, propTypes };
