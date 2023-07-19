import { Colors } from '../../theme/Variables';

const handleBorderColor = (isFocus: boolean, errorMessage: string) => {
    if (isFocus) return Colors.primary;
    if (errorMessage) return Colors.error;
    return Colors.textGray400;
};

export default {
    inputContainerStyle: (isFocus: boolean, errorMessage: string) => ({
        borderBottomWidth: isFocus ? 2 : 1,
        borderColor: handleBorderColor(isFocus, errorMessage),
    }),
    labelStyle: (isDark: boolean) => ({
        color: isDark ? Colors.textGray200 : Colors.textGray800,
        fontFamily: 'Helvetica',
    }),
    inputStyle: (isDark: boolean) => ({
        color: isDark ? Colors.textGray200 : Colors.textGray800,
        fontFamily: 'Helvetica',
        fontSize: 17,
    }),
};
