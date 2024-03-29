import React, { useState } from 'react';
import {
  InputModeOptions,
  KeyboardTypeOptions,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Text from '../Text';
import { getCustomPattern, getKeyboardType, handleValidation } from './utils';
import { getStyles } from './styles';

export type InputType = {
  caption?: string;
  label?: string;
  type?: string;
  onError?: boolean;
  onIconClick?: void;
  pattern?: string | string[] | undefined;
  mask?: string | undefined;
  customIcon?: JSX.Element;
  moneySeparator?: boolean;
  styleLabel?: any;
  styleInput?: any;
  styleContainer?: any;
} & TextInputProps;

function InputComponent(props: InputType, inputRef: any) {
  const {
    type = 'text',
    onError,
    customIcon,
    onIconClick = () => {},
    onChangeText,
    onFocus,
    onBlur,
    pattern,
    label,
    caption,
    testID,
    styleLabel = {},
    styleInput = {},
    styleContainer = {},
    ...rest
  } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const { inputType, keyboardType } = getKeyboardType(type);
  const isPasswordField = type === 'password';
  const isSearchField = type === 'search' || customIcon !== undefined;
  const IconActive = isPasswordField || isSearchField || false;
  const customPattern = pattern || getCustomPattern(inputType || type);
  const iconClickFunction = isPasswordField
    ? () => setVisiblePassword(!visiblePassword)
    : onIconClick;

  const style = getStyles({ onError, isValid, isActive });

  const handleChange = (changeValue: any) => {
    setIsValid(handleValidation(changeValue, customPattern));
    isValid && onChangeText && onChangeText(changeValue);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsActive(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsActive(false);
    onBlur && onBlur(e);
  };

  return (
    <View testID={testID || 'input-component'} style={style.inputContainer}>
      {label && (
        <Text
          style={[style.label, styleLabel]}
          text={label}
          weight="medium"
          size="regular"
          brandColor="black"
          opacity="primary"
        />
      )}
      <View style={[style.container, styleContainer]}>
        <TextInput
          {...rest}
          ref={inputRef}
          autoCapitalize="none"
          style={[style.input, styleInput]}
          inputMode={inputType as InputModeOptions}
          keyboardType={keyboardType as KeyboardTypeOptions}
          placeholderTextColor="rgba(13, 16, 16, .6)"
          secureTextEntry={isPasswordField && !visiblePassword}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {IconActive && (
          <TouchableOpacity style={style.icon} onPress={iconClickFunction}>
            {isPasswordField && !visiblePassword && (
              <EyeIcon color="rgba(13, 16, 16, 0.4)" />
            )}
            {isPasswordField && visiblePassword && (
              <EyeSlashIcon color="rgba(13, 16, 16, 0.4)" />
            )}
            {isSearchField && !customIcon && (
              <MagnifyingGlassIcon color="rgba(13, 16, 16, 0.4)" />
            )}
            {isSearchField && customIcon}
          </TouchableOpacity>
        )}
      </View>
      {caption && (
        <Text
          style={style.caption}
          text={caption}
          weight="regular"
          size="small"
          color={onError ? 'red' : ''}
          brandColor={!onError ? 'black' : ''}
          opacity={!onError ? 'lighter' : 'dark'}
        />
      )}
    </View>
  );
}

export default React.forwardRef<TextInput & View, InputType & ViewProps>(
  InputComponent
);
