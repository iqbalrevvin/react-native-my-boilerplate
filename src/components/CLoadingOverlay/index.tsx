import React from 'react';
import { Overlay } from 'react-native-elements';
import { ActivityIndicator, View } from 'react-native';

import CGap from '../CGap';
import CText from '../CText';
import styles from './CLoadingOverlay.styles';
import Configs, { CLoadingOverlayProps } from './CLoadingOverlay.config';

import { Colors } from '../../theme/Variables';

const CLoadingOverlay = ({ loadingText }: CLoadingOverlayProps) => (
  <Overlay isVisible overlayStyle={styles.contentOverlay} backdropStyle={styles.backdropOverlay}>
    <View style={styles.contentLoading}>
      <ActivityIndicator size={'large'} color={Colors.primary} />
      <CGap />
      { loadingText && (
        <CText isSemiBold size={15}>{loadingText}</CText>
      )}
    </View>
  </Overlay>
);

CLoadingOverlay.propTypes = Configs.propTypes;

export default CLoadingOverlay;
