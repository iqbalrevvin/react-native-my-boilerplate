import React from 'react';
import { Button } from 'react-native-elements';
import { Props } from './CButton.config';

import Configs from './CButton.config';
import styles from './Cbutton.styles';

const _getButtonProps = (props: Props) => ({
    icon: props.icon || null,
    title: props.title,
    loading: props.loading,
    disabled: props.disabled,
    type: props.type,
    buttonStyle: [props.style, styles.container(props.color, props.type)],
    titleStyle: styles.titleSection(props.titleSize, props.titleBold),
    onPress: props.onPress,
});

const CButtonRegular = (props: Props) => <Button {..._getButtonProps(props)}/>;

CButtonRegular.propTypes = Configs.propTypes;

export default React.memo(CButtonRegular);
