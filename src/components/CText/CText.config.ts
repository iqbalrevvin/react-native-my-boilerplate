import PropTypes from 'prop-types';
import { FontSize } from '../../theme/Variables';

const defaultProps = {
    isBold: false,
    isSemiBold: false,
    size: FontSize.small,
    color: '',
};

const propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
    isBold: PropTypes.bool,
    isSemiBold: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};

export interface CTextProps {
    children: string;
    style?: object;
    isBold?: boolean;
    isSemiBold?: any;
    size?: number;
    color?: string;
    numberOfLine?: number;
}

export default { defaultProps, propTypes };
