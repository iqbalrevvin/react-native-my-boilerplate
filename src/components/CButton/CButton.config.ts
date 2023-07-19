import PropTypes from 'prop-types';

export interface Props {
    loading?: boolean;
    disabled?: boolean;
    title?: string;
    icon?: any;
    type?: any;
    color?: string;
    style?: any;
    titleSize?: any;
    titleBold?: boolean;
    onPress?: () => void;
}

const defaultProps = {
    loading: false,
    disabled: false,
    title: 'Button Regular',
    icon: null,
    type: 'solid',
    color: null,
    titleSize: 16,
};

const propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    titleSize: PropTypes.number,
    icon: PropTypes.any,
    type: PropTypes.string,
    color: PropTypes.string,
};

export default { defaultProps, propTypes };
