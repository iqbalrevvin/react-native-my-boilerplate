import React from 'react';
import { ViewStyle } from 'react-native';

const defaultProps = {
    backgroundColor: '',
    withOverlayLoading: false,
    loadingText: 'Loading...',
    barColor: 'white',
    barType: 'default',
    isScrollView: false,
    showToast: false,
    toastSww: false,
    toastType: 'info',
    toastTitle: 'Notif Title',
    toastSubTitle: 'Notif Subtitle',
};

export interface ContainerProps {
    children: React.ReactNode;
    style?: object;
    barColor?: string;
    barType?: 'default' | 'light-content' | 'dark-content';
    showToast?: boolean;
    toastSww?: boolean;
    toastTopOffset?: number;
    toastType?: string;
    toastTitle?: string;
    toastSubTitle?: string;
    withOverlayLoading?: boolean;
    loadingText?: string;
    isScrollView?: boolean;
    backgroundColor?: string;
    headerColor?: string;
    headerTitle?: string;
    headerLeftIcon?: string;
    headerLeftIconOnPress?: () => void;
    headerRightIcon?: string;
    headerRightIconOnPress?: () => void;
}

export interface Styles {
  container: ViewStyle;
}

export default { defaultProps };
