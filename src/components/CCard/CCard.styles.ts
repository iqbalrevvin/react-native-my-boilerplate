
import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Variables';
import { NavigationColors as NavigationsColorsDark } from '../../theme/themes/default_dark/Variables';

// export default {
//     container: (borderRadius?: number, borderWidth?: number, elevation?: number) => ({
//         borderRadius,
//         elevation,
//         borderWidth,
//     }),
//     liniarProgressContainer: {
//         bottom: 15,
//     },
//     liniarProgressSection: (borderRadius?: number) => ({
//         width: '109%',
//         height: 5,
//         borderRadius: borderRadius || 0,
//         margin: 0,
//         marginLeft: 0,
//         marginRight: 0,
//         paddingLeft: 0,
//         paddingRight: 0,
//         right: 0,
//         left: -15,
//     }),
// };

const _getBackgroundColorCondition = (isDark: boolean | undefined) => {
    if (isDark) return NavigationsColorsDark.card;

    return Colors.white;
};

// eslint-disable-next-line max-lines-per-function
const styling = (borderRadius?: number, borderWidth?: number, elevation?: number, isDark?: boolean) =>
    StyleSheet.create({
        container: {
            borderRadius,
            elevation,
            borderWidth,
            backgroundColor: _getBackgroundColorCondition(isDark),
        },
        liniarProgressContainer: {
            bottom: 15,
        },
        liniarProgressSection: {
            width: '109%',
            height: 5,
            borderRadius: borderRadius || 0,
            margin: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0,
            right: 0,
            left: -15,
        },
});

export default styling;

