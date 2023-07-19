
import { Dispatch } from '@reduxjs/toolkit';
import { AuthState } from '../../store/store.types';
import { UseFormReturn } from 'react-hook-form';
import { ImageStyle, ViewStyle } from 'react-native';

export type SetContainerState =  React.Dispatch<React.SetStateAction<ContainerState>>;
export type dispatch = Dispatch;

interface LoginMutation {
  loginMutation: any;
  loginMutationResult: any;
}

export interface Mutations {
  useLoginMutation: any;
}

export interface MyMutations extends LoginMutation {}

export interface IProps {
  t: any;
  i18n: any;
}

export interface MySelector {
  auth: AuthState
}

export interface LoginProps extends IProps, MyMutations {
  dispatch: Dispatch,
  selector: MySelector
}

export interface Styles {
  imageSection: ImageStyle;
  formContainer: ViewStyle;
  formSection: ViewStyle;
  formTitleContainer: ViewStyle;
  formInputSection: ViewStyle;
  forgotPasswordSection: ViewStyle;
}

export interface ContainerState {
  showToast: boolean;
  toastSww: boolean;
  toastType: string,
  toastTitle: string,
  toastSubTitle: string,
}

export interface UseContainerState {
  containerState: ContainerState;
  setContainerState: SetContainerState;
}

export type WathedValue = {
  email?: string,
  password?: string;
}

interface FormFields {
  email: string;
  password: string;
}

export interface InitiateForm {
  watchedValue: WathedValue;
  formMethods: UseFormReturn<FormFields>;
}

interface LoginState {
  loadingScreen: boolean;
}

export interface UseLoginState {
  loginState: LoginState;
  setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
}

export interface IStates extends UseLoginState, UseContainerState, InitiateForm {}
