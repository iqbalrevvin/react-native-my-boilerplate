import Constants from '../../constants';
import { Colors, NavigationColors } from '../../theme/Variables';
import { NavigationColors as NavigationsColorsDark } from '../../theme/themes/default_dark/Variables';
import { isIOS } from '../../utils/platform.utils';
import { store } from '../../store';

const { ICONS: { ARROW_BACK, ARROW_BACK_IOS } } = Constants;

const state = store.getState();

const isDark = state.theme.darkMode;

const isIOSDark = () => isIOS() && isDark;
const isIOSLight = () => isIOS() && !isDark;


const _getHeaderColorDefaultProps = () => {
    if (isIOSDark()) return NavigationsColorsDark.background;
    if (isIOSLight()) return NavigationColors.background;

    return Colors.primary;
};

export interface Props {
    headerColor?: string;
    leftIcon: string;
    leftIconOnPress: () => void;
    title: string;
    rightIcon?: string;
    rightIconOnPress?: () => void;
    placement?: 'left' | 'center' | 'right';
    isBorder?: boolean;
}

const defaultProps = {
    headerColor:  _getHeaderColorDefaultProps(),
    leftIcon: isIOS() ? ARROW_BACK_IOS : ARROW_BACK,
    leftIconOnPress: () => {},
    title: 'Settings',
    rightIcon: '',
    rightIconOnPress: () => {},
    placement: 'left',
    isBorder: false,
};


export default {
    defaultProps,
};

