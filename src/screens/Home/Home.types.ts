import { ViewStyle } from 'react-native';
import { Dispatch } from '@reduxjs/toolkit';
import { NavigationProp } from '@react-navigation/native';

import { MainParamsList } from './../../../@types/navigation';
import { AuthState } from '../../store/store.types';

export interface Styles {
    contentContainer: ViewStyle;
}

export interface ISelector {
    auth: AuthState
}

export interface IProps {
    t: any;
    i18n: any;
    navigation: NavigationProp<MainParamsList>;
}

export interface HomeProps extends IProps {
    dispatch: Dispatch,
    selector: ISelector
}
