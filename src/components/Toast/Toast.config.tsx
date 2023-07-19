import React from 'react';
import { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message';
import styles from './Toast.styles';

/*
  1. Create the config
*/
export const toastConfig = {
  success: (props: any) => (
    // @ts-nocheck
    <BaseToast
      {...props}
      style={styles.toastStyle('success')}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={styles.toastStyle('error')}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),

  info: (props: any) => (
    <InfoToast
      {...props}
      style={styles.toastStyle('info')}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};
