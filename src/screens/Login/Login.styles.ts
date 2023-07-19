import { StyleSheet } from 'react-native';
import { Styles } from './Login.types';
import { scaleHeight, scaleWidth } from '../../utils/size.utils';

const styles = StyleSheet.create<Styles>({
  imageSection: {
    resizeMode: 'contain',
    width: 'auto',
    height: scaleHeight(200),
    overflow: 'hidden',
  },
  formContainer: {
    bottom: scaleHeight(40),
  },
  formSection: {
    marginHorizontal: scaleWidth(10),
  },
  formTitleContainer: {
    alignItems: 'center',
    marginVertical: scaleHeight(10),
  },
  formInputSection: {
    marginTop: scaleHeight(20),
  },
  forgotPasswordSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default styles;
