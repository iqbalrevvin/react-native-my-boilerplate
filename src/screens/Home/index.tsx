import React from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { withTranslation } from 'react-i18next';

import { IProps, ISelector } from './Home.types';
import HomeComponent from './Home.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.types';

const _getHomeScreenProps = (props: IProps, dispatch: Dispatch, selector: ISelector) => ({
    ...props, dispatch, selector,
});

const Home = (props: IProps): JSX.Element => {
    const dispatch = useDispatch();

    const selector = {
        auth: useSelector((state: RootState) => state.auth),
    };

    return <HomeComponent {..._getHomeScreenProps(props, dispatch, selector)} />;
};

export default withTranslation()(Home);
