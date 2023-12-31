import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';
import { CommonType } from '..';

export type ButtonType = {
  text?: string;
  variant?: string;
  color?: string;
  customTw?: string;
} & TouchableOpacityProps &
  CommonType;

function ButtonComponent(props: ButtonType, buttonRef: any) {
  const {
    customTw = '',
    variant = 'primary',
    text,
    testID,
    children,
    loading = false,
    disabled = false,
    style,
    ...rest
  } = props;
  const customStyles = getStyles({ variant, customTw, disabled });

  const renderElement = (): any => {
    if (loading) {
      return <ActivityIndicator color={customStyles?.textColor} />;
    }
    if (children !== null && children !== undefined) {
      return children;
    } else if (
      (children === null || children === undefined) &&
      text !== null &&
      text !== undefined
    ) {
      return (
        <Text
          color={customStyles.textColor}
          weight="medium"
          size="regular"
          text={text}
        />
      );
    }
    return <></>;
  };

  return (
    <TouchableOpacity
      {...rest}
      ref={buttonRef}
      testID={testID || 'button-component'}
      style={[customStyles.base, style]}
      disabled={disabled || loading}
    >
      {renderElement()}
    </TouchableOpacity>
  );
}

export default React.forwardRef<TouchableOpacityProps, ButtonType>(ButtonComponent);
