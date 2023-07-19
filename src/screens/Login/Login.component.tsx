import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { FormProvider } from 'react-hook-form';

//@themes
import { Colors } from '../../theme/Variables';

// @component
import CGap from '../../components/CGap';
import CCard from '../../components/CCard';
import CText from '../../components/CText';
import CButton from '../../components/CButton';
import Container from '../../components/Container';
import VersionText from '../../components/VersionText';
import CTextInput from '../../components/CTextInput/CTextInput';

// @configs
import Configs from './Login.configs';
// @types
import { IStates, ContainerState, LoginProps } from './Login.types';
// @styles
import styles from './Login.styles';
// @constants
import Constants from '../../constants';
// @handler
import {
  handleLodingScreen, handleShowToastErrorLogin,
  handleShowToastFeatureNotAvailable, myStates,
} from './Login.handler';
// @utils
import { images } from '../../utils';
import { useToastHide } from '../../hooks';
import { setCredentials } from '../../store/auth';


const {
  FORM: { AUTH: { EMAIL, PASSWORD } },
} = Constants;

const _getContainerProps = (containerState: ContainerState): Object => ({
  showToast: containerState.showToast,
  toastSww: containerState.toastSww,
  toastType: containerState.toastType,
  toastTitle: containerState.toastTitle,
  toastSubTitle: containerState.toastSubTitle,
});

const _renderImageHeader = () => {
  const { bg1 } = images;

  return (
    <View>
      <Image source={bg1} style={styles.imageSection} />
    </View>
  );
};

const renderHeaderLogin = (props: LoginProps): JSX.Element => (
  <View style={styles.formTitleContainer}>
    <CText isBold size={20}>
      {props.t('apps:login.title')}
    </CText>
    <CGap height={5} />
    <CText isSemiBold color={Colors.textGray200} size={16}>
      {props.t('apps:login.subtitle')}
    </CText>
  </View>
);

const _handleDisableInput = (states: IStates): boolean => {
  const { loginState } = states;

  return loginState.loadingScreen;
};

const renderInputEmail = (props: LoginProps, states: IStates) => (
  <CTextInput
    // @ts-ignore
    name={EMAIL}
    label={props.t('apps:login.field-username')}
    placeholder={'yourmail@example.com'}
    leftIconName={'user'}
    autoCapitalize="none"
    rules={Configs.emailFormValidation}
    disabled={_handleDisableInput(states)}
    />
);

const renderInputPassword = (props: LoginProps, states: IStates) => (
  <CTextInput
    // @ts-ignore
    name={PASSWORD}
    label={props.t('apps:login.field-username')}
    placeholder={'Secret Password'}
    leftIconName={'unlock'}
    autoCapitalize="none"
    isPassword={true}
    rules={Configs.passwordFormValidation}
    disabled={_handleDisableInput(states)}
    />
);

const _handleDisableButton = (states: IStates) => {
  const { loginState, formMethods } = states;

  return !formMethods.formState.isValid || loginState.loadingScreen;
};

const _handleSubmitLogin = (props: LoginProps, states: IStates) => async () => {
  const { watchedValue } = states;
  const { loginMutation, dispatch, selector } = props;

  handleLodingScreen(states, true);
  console.log('check-selector', selector);
  try {
    const response = await loginMutation(watchedValue).unwrap();
    dispatch(setCredentials(response));
  } catch (error) {
    handleShowToastErrorLogin(props, states);
  } finally {
    handleLodingScreen(states, false);
  }
};

const renderButtonSubmit = (props: LoginProps, states: IStates) => (
  <CButton
    disabled={_handleDisableButton(states)}
    titleBold
    title={props.t('apps:login.button-submit')}
    color={Colors.primary}
    onPress={_handleSubmitLogin(props, states)}
  />
);

const _renderRegisterAccountItem = (props: LoginProps, states: IStates) => (
  <TouchableOpacity onPress={handleShowToastFeatureNotAvailable(props, states)}>
    <CText isBold color={Colors.primary} size={14}>
      {props.t('apps:login.register-account')}
    </CText>
  </TouchableOpacity>
);

const _renderForgotPasswordItem = (props: LoginProps, states: IStates) => (
  <TouchableOpacity onPress={handleShowToastFeatureNotAvailable(props, states)}>
    <CText color={Colors.primary} size={14}>
      {props.t('apps:login.forgot-password')}
    </CText>
  </TouchableOpacity>
);

const _renderInputForm = (props: LoginProps, states: IStates) => (
  <FormProvider {...states.formMethods}>
    {renderInputEmail(props, states)}
    <CGap height={10} />
    {renderInputPassword(props, states)}
    <CGap height={10} />
  </FormProvider>
);

const renderForm = (props: LoginProps, states: IStates) => (
  <View style={styles.formInputSection}>
    {_renderInputForm(props, states)}
    <View style={styles.forgotPasswordSection}>
      {_renderRegisterAccountItem(props, states)}
      {_renderForgotPasswordItem(props, states)}
    </View>
    {renderButtonSubmit(props, states)}
  </View>
);

const _renderBodyContent = (props: LoginProps, states: IStates) => {
  const { loginState: { loadingScreen } } = states;

  return (
    <View style={styles.formContainer}>
      <CCard borderRadius={5} elevation={2} loading={loadingScreen}>
        <View style={styles.formSection}>
          {renderHeaderLogin(props)}
          {renderForm(props, states)}
        </View>
      </CCard>
    </View>
  );
};

const LoginComponent = (props: LoginProps): JSX.Element => {
  const iStates = myStates();

  useToastHide(iStates.containerState, iStates.setContainerState);

  return (
    <Container isScrollView {..._getContainerProps(iStates.containerState)}>
      {_renderImageHeader()}
      {_renderBodyContent(props, iStates)}
      <VersionText />
    </Container>
  );
};

export default LoginComponent;
