import { NavigationColors } from '../../theme/Variables';
import { NavigationColors as NavigationsColorsDark } from '../../theme/themes/default_dark/Variables';

const _getBackgroundColorCondition = (backgroundColor: string, isDark: boolean): string | undefined => {
    if (!backgroundColor) {
        if (isDark) return NavigationsColorsDark.background;
        return NavigationColors.background;
    }

    return backgroundColor;
};

export default {
    container: (backgroundColor: string, isDark: boolean) => ({
        flex: 1,
        backgroundColor: _getBackgroundColorCondition(backgroundColor, isDark),
    }),
};
