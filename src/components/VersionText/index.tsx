import React from 'react';
import { View } from 'react-native';
import CText from '../CText';
import styles from './VersionText.styles';
import Configs from './VersionText.config';

interface VersionTextProps {
    version: string;
}

const VersionText = ({ version }: VersionTextProps) => (
  <View style={styles.container}>
    <CText size={12}>
      App Version
    </CText>
    <CText size={12}>
      {version}
    </CText>
  </View>
);

export default React.memo(VersionText);

VersionText.defaultProps = Configs.defaultProps;
VersionText.propTypes = Configs.propTypes;
