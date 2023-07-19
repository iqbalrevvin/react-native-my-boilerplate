import { Colors } from '../../theme/Variables';

const _getTextCondition = (isBold: boolean, isSemiBold: boolean) => {
    if (isBold) return 'Helvetica-Bold';
    if (isSemiBold) return 'Helvetica';
    return 'Helvetica';
};

const _getFontWeightCondition = (isBold: boolean, isSemiBold: boolean) => {
    if (isBold) return 'bold';
    if (isSemiBold) return '500';
    return 'normal';
};


const _getColorCondition = (color: string, isDark: boolean) => {
    if (!color) {
        if (isDark) return Colors.textGray200;
        return Colors.textGray800;
    }

    return color;
};

export default {
    // eslint-disable-next-line max-params
    textSection: (isBold: boolean, isSemiBold: boolean, color: string, size: number, isDark: boolean) => ({
        fontWeight: _getFontWeightCondition(isBold, isSemiBold),
        fontFamily: _getTextCondition(isBold, isSemiBold),
        fontSize: size,
        color: _getColorCondition(color, isDark),
    }),
};
