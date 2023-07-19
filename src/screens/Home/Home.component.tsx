import React from 'react';
import { View } from 'react-native';

// @component
import Container from '../../components/Container';
import CText from '../../components/CText';

// @types
import { HomeProps } from './Home.types';
import styles from './Home.styles';
import CButton from '../../components/CButton';
import { logout } from '../../store/auth';

const _renderContent = (props: HomeProps) => {
    const { selector, dispatch } = props;
    return (
        <View style={styles.contentContainer}>
            <CText>Home Screen</CText>
            <CText>Your Login With</CText>
            <CText isBold>{selector.auth.user.email}</CText>
            <CButton title="Remove Auth" onPress={() => dispatch(logout())} />
        </View>
    );
};

const HomeComponent = (props: HomeProps): JSX.Element => (
    <Container isScrollView>
        {_renderContent(props)}
    </Container>
);

export default HomeComponent;
