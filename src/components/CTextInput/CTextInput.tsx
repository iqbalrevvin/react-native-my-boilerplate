/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import {
    useController,
    useFormContext,
} from 'react-hook-form';

import { useTheme } from '../../hooks';
import { Colors } from '../../theme/Variables';

import styles from './CTextInput.styles';
import configs from './CTextInput.config';

const CTextInput = ({
    label,
    labelStyle,
    placeholder,
    value,
    style,
    leftIconName,
    leftIconColor,
    errorMessage,
    autoCapitalize,
    isPassword,
    keyboardType,
    textContentType,
    autoCompleteType,
    rightIconName,
    rightIconColor,
    name,
    rules,
    defaultValue,
    disabled,
}: any) => {
    const [focus, setFocus] = useState(false);
    const [seePassword, setSeePassword] = useState(false);

    const onFocus = () => setFocus(true);

    const { darkMode: isDark } = useTheme();

    const handleIconColor = (isFocus: boolean) => {
        if (isFocus) return Colors.primary;
        if (errorMessage) return Colors.error;
        return leftIconColor;
    };

    const handleRightIconProps = (password: any, iconName: any, iconColor: any) => {
        if (!password)
        return {
            type: 'ant-design',
            name: iconName,
            color: iconColor,
        };
        return {
            type: 'ant-design',
            name: seePassword ? 'eyeo' : 'eye',
            color: iconColor,
            onPress: () => setSeePassword(!seePassword),
        };
    };

    const formContext = useFormContext();
    const { formState } = formContext;

    if (!formContext || !name) {
        const msg = !formContext ? 'TextInput must be wrapped by the FormProvider' : 'Name must be defined';
        console.error(msg);
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { field } = useController({ name, rules, defaultValue });

    const handleOnBlur = () => {
        if (field.onBlur) {
            field.onBlur();
            setFocus(!!value);
        } else {
            setFocus(!!value);
        }
    };

    const hasError = Boolean(formState?.errors[name]);

    const _leftIconCondition = () => {
        if (leftIconName) return { type: 'ant-design', name: leftIconName, color: handleIconColor(focus) };
        return undefined;
    };

    return (
        <Input
          // @ts-ignore
          name={name}
          label={label}
          placeholder={placeholder}
          leftIcon={_leftIconCondition()}
          style={style}
          onChangeText={field.onChange}
          defaultValue={defaultValue}
          value={field.value}
          onFocus={onFocus}
          onBlur={handleOnBlur}
          inputContainerStyle={styles.inputContainerStyle(focus, errorMessage)}
          inputStyle={styles.inputStyle(isDark)}
          labelStyle={[styles.labelStyle(isDark), labelStyle]}
          errorMessage={hasError && formState.errors[name].message}
          errorStyle={{ color: Colors.error }}
          autoCapitalize={autoCapitalize}
          secureTextEntry={seePassword ? false : isPassword}
          keyboardType={keyboardType}
          textContentType={textContentType}
          autoCompleteType={autoCompleteType}
          rightIcon={handleRightIconProps(isPassword, rightIconName, rightIconColor)}
          rules={rules}
          disabled={disabled}
        />
    );
};

CTextInput.defaultProps = configs.defaultProps;
CTextInput.propTypes = configs.propTypes;

export default CTextInput;
