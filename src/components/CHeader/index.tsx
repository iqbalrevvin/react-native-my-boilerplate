import React from 'react';
import { Header } from 'react-native-elements';

import { Colors } from '../../theme/Variables';
import Configs, { Props } from './CHeader.config';
import { isIOS } from '../../utils/platform.utils';

const _getContainerStyle = (isBorder: boolean): Object => {
    if (isBorder) return { borderBottomWidth: 1 };

    return { borderBottomWidth: 0 };
};

const _getLeftComponentProps = (props: Props): Object => {
    const { leftIcon, leftIconOnPress } = props;

    return {
        icon: leftIcon,
        color: isIOS() ? Colors.blue : Colors.white,
        iconStyle: { color: isIOS() ? Colors.blue : Colors.white },
        onPress: leftIconOnPress,
    };
};

const _getCenterComponentProps = (title: string): Object => ({
    text: title,
    style: {
        color: isIOS() ? Colors.blue : Colors.white,
        fontFamily: 'Helvetica',
        fontSize: 18,
    },
});

const _getRightComponentProps = (props: Props): Object => {
    const { rightIcon, rightIconOnPress } = props;

    return {
        icon: rightIcon,
        color: isIOS() ? Colors.blue : Colors.white,
        onPress: rightIconOnPress,
    };
};

const _getPropsHeader = (props: Props) => ({
    placement: props.placement,
    containerStyle: _getContainerStyle(props.isBorder!),
    backgroundColor: props.headerColor,
    leftComponent: _getLeftComponentProps(props),
    centerComponent: _getCenterComponentProps(props.title),
    rightComponent: _getRightComponentProps(props),

});

const CHeader = (props: Props): JSX.Element => (
    <Header {..._getPropsHeader(props)} />
);

CHeader.defaultProps = Configs.defaultProps;

export default CHeader;
