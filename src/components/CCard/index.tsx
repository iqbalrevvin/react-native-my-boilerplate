import React from 'react';
import { View } from 'react-native';
import { Card, LinearProgress } from 'react-native-elements';

import { Props } from './CCard.types';
import { Colors } from '../../theme/Variables';
import { useTheme } from '../../hooks';

import Configs from './CCard.config';
import styling from './CCard.styles';

const renderLiniarProgress = (styles: any) => (
  <View style={styles.liniarProgressContainer}>
    <LinearProgress
      color={Colors.primary}
      style={styles.liniarProgressSection}
    />
  </View>
);

const CCard = (props: Props) => {
  const { children, borderRadius, borderWidth, elevation, loading, style } = props;
  const { darkMode: isDark } = useTheme();

  const styles = styling(borderRadius, borderWidth, elevation, isDark);

  return (
    // @ts-ignore
    <Card containerStyle={[style, styles.container]}>
      {loading && renderLiniarProgress(styles)}
      {children}
    </Card>
  );
};

CCard.defaultProps = Configs.defaultProps;
CCard.propTypes = Configs.propTypes;

export default CCard;
