/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import {
    IStates, UseLoginState, InitiateForm, UseContainerState, Mutations, MyMutations, LoginProps,
} from './Login.types';

import { useForm, useWatch } from 'react-hook-form';
import Constants from '../../constants';

const { TOAST: { TYPE } } = Constants;

export const handleShowToastFeatureNotAvailable = (props: LoginProps, states: IStates) => () =>{
    const { setContainerState  } = states;
    const { t } = props;

    setContainerState(prevState => ({
      ...prevState,
      showToast: true,
      toastType: TYPE.INFO,
      toastTitle: t('common:contact-your-admin'),
      toastSubTitle: t('common:contact-your-admin-desc'),
    }));
};

export const handleShowToastErrorLogin = (props: LoginProps, states: IStates) => {
    const { setContainerState  } = states;
    const { t } = props;

    setContainerState(prevState => ({
      ...prevState,
      showToast: true,
      toastType: TYPE.ERROR,
      toastTitle: t('apps:login.login-error-title'),
      toastSubTitle: t('apps:login.login-error-message'),
    }));
}

export const handleLodingScreen = (states: IStates, isLoading: boolean): void => {
    const { setLoginState } = states;

    setLoginState(prevState => ({ ...prevState, loadingScreen: isLoading }));
};

export const useMyMutation = (mutations: Mutations): MyMutations => {
    const [loginMutation, loginMutationResult] = mutations.useLoginMutation();

    return { loginMutation, loginMutationResult };
};

const formDefaultValues = {
    email: '',
    password: '',
};

export const initiateForm = (): InitiateForm => {
    const formMethods = useForm({
        mode: 'onChange',
        defaultValues: formDefaultValues,
    });

    const watchedValue = useWatch({
        control: formMethods.control,
    });

    return { watchedValue, formMethods };
  };

const useLoginContainerState = (): UseContainerState => {
    const [containerState, setContainerState] = React.useState({
        showToast: false,
        toastSww: false,
        toastType: 'info',
        toastTitle: '',
        toastSubTitle: '',
    });

    return { containerState, setContainerState };
};

export const useLoginState = (): UseLoginState => {
    const [loginState, setLoginState] = React.useState({
        loadingScreen: false,
    });

    return {
        loginState, setLoginState,
    };
};

export const myStates = (): IStates => ({
    ...initiateForm(),
    ...useLoginContainerState(),
    ...useLoginState(),
});
