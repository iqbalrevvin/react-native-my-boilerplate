import React from 'react';
import { Text } from 'react-native-elements';
import styles from './CText.styles';
import Configs, { CTextProps } from './CText.config';
import { useTheme } from '../../hooks';

const _getTextProps = (props: CTextProps, isDark: boolean) => {
    const { style, isBold = false, isSemiBold, color, size = 14, numberOfLine } = props;
    return {
        style: [style, styles.textSection(isBold, isSemiBold, color!, size, isDark)],
        numberOfLine,
    };
};

const CText = (props: CTextProps) => {
    const { darkMode: isDark } = useTheme();
    return (
        <Text {..._getTextProps(props, isDark)}>
            {props.children}
        </Text>
    );
};

CText.propTypes = Configs.propTypes;
CText.defaultProps = Configs.defaultProps;

export default CText;
