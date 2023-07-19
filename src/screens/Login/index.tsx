import React from 'react';
import LoginComponent from './Login.component';
import { withTranslation } from 'react-i18next';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { useMyMutation } from './Login.handler';
import { IProps, MyMutations, MySelector } from './Login.types';
import { RootState } from '../../store/store.types';
import { useLoginMutation } from '../../api/modules/auth';

const _getLoginScreenProps = (
    props: IProps, myMutation: MyMutations, dispatch: Dispatch, selector: MySelector
) => ({
    ...props, ...myMutation, dispatch, selector,
});

const Login = (props: IProps) => {
    const mutations = { useLoginMutation };
    const dispatch = useDispatch();

    const myMutation = useMyMutation(mutations);
    const selector = {
        auth: useSelector((state: RootState) => state.auth),
    };

   return <LoginComponent {..._getLoginScreenProps(props, myMutation, dispatch, selector)} />;
};

export default withTranslation()(Login);
