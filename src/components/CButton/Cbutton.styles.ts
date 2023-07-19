import { Colors } from '../../theme/Variables';

export default {
    container: (color: any, type: any) => ({
        backgroundColor: color || Colors.primary,
        padding: 12,
        borderWidth: type !== 'solid' ? null : 1,
    }),
    titleSection: (titleSize: number, titleBold: any) => ({
        fontFamily: titleBold ? 'Helvetica-Bold' : 'Helvetica',
        fontSize: titleSize || 13,
        fontWeight: titleBold && 'bold',
    }),
};
