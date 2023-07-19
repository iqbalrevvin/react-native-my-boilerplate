import PropTypes from 'prop-types';

const defaultProps = {};

export interface CLoadingOverlayProps {
    loadingText?: string;
}

const propTypes = {
    loadingText: PropTypes.string,
};

export default { defaultProps, propTypes };
