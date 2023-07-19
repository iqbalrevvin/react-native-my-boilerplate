import { Colors } from '../../theme/Variables';

const colorTypeHandler = (type: string) => {
    if (type === 'success') return Colors.success;
    if (type === 'error') return Colors.error;
    return Colors.primary;
};

export default {
    toastStyle: (type: string) => ({
        borderLeftColor: colorTypeHandler(type),
        borderLeftWidth: 25,
        width: '100%',
        borderRadius: 0,
    }),
    text1: {
        fontSize: 14,
        marginBottom: 2,
        color: '#000',
        width: '100%',
        fontFamily: 'Helvetica-Bold',
      },
      text2: {
        fontSize: 12,
        color: '#979797',
        width: '100%',
        fontFamily: 'Helvetica',
      },
};
