import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import CHeader from '../CHeader';
import styles from './Container.styles';
import CLoadingOverlay from '../CLoadingOverlay';

import { useTheme } from '../../hooks';
import { isAndroid, isIOS } from '../../utils/platform.utils';
import { ContainerProps } from './Container.config';
import { Colors, NavigationColors } from '../../theme/Variables';
import { NavigationColors as NavigationsColorsDark } from '../../theme/themes/default_dark/Variables';
import { scaleHeight } from '../../utils/size.utils';

const toastSwwText = {
    title: 'Kesalahan Pada Sistem',
    subtitle: 'Mohon maaf, silahkan kembali nanti 🙏🏻',
};

const useToastShow = (props: ContainerProps): void => {
    const { showToast, toastSww, toastType, toastTitle, toastSubTitle, toastTopOffset } = props;
    // eslint-disable-next-line complexity
    React.useEffect(() => {
        if (showToast) {
          Toast.show({
            type: toastSww ? 'error' : toastType,
            text1: toastSww ? toastSwwText.title : toastTitle,
            text2: toastSww ? toastSwwText.subtitle : toastSubTitle,
            topOffset: toastTopOffset || (isAndroid() ? scaleHeight(24) : undefined),
            visibilityTime: 3000,
          });
        }
    }, [showToast]);
};

// eslint-disable-next-line complexity
const _getHeaderColorCondition = (headerColor: string, isDark: boolean) => {
    if (!headerColor) {
        if (isIOS() && isDark) return NavigationsColorsDark.background;
        if (isIOS() && !isDark) return NavigationColors.background;
        return Colors.primary;
    }
    return headerColor;
};

const _getHeaderProps = (props: ContainerProps, isDark: boolean): Object => {
    const { headerColor, headerTitle, headerLeftIcon,
        headerLeftIconOnPress, headerRightIcon, headerRightIconOnPress,
    } = props;

    return {
        headerColor: _getHeaderColorCondition(headerColor!, isDark),
        leftIcon: headerLeftIcon,
        leftIconOnPress: headerLeftIconOnPress,
        title: headerTitle,
        rightIcon: headerRightIcon,
        rightIconOnPress: headerRightIconOnPress,
    };
};

const _renderContent = (isScrollView = false, children: React.ReactNode): React.ReactNode => {
    if (isScrollView) return <ScrollView>{children}</ScrollView>;
    return children;
  };

const _getStatusBarProps = (props: ContainerProps) => ({
    animated: true,
    backgroundColor: props.barColor,
    barStyle: props.barType,
});

const _renderSafeAreaWrapperContent = (props: ContainerProps, isDark: boolean): JSX.Element => {
    const { withOverlayLoading, headerTitle, backgroundColor, loadingText } = props;

    return (
        <SafeAreaView style={[props.style, styles.container(backgroundColor!, isDark)]}>
            {withOverlayLoading && <CLoadingOverlay loadingText={loadingText} />}
            {headerTitle && <CHeader {..._getHeaderProps(props, isDark)} />}
            {_renderContent(props.isScrollView, props.children)}
        </SafeAreaView>
    );
};

const Container = (props: ContainerProps): JSX.Element => {
    useToastShow(props);
    const { darkMode: isDark } = useTheme();
    return (
        <React.Fragment>
            <StatusBar {..._getStatusBarProps(props)} />
            {_renderSafeAreaWrapperContent(props, isDark)}
        </React.Fragment>
    );
};

export default Container;
