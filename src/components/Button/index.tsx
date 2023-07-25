import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';

export type ButtonType = {
  text?: string;
  variant?: string;
  color?: string;
  customTw?: string;
} & TouchableOpacityProps;

function ButtonComponent(props: ButtonType, buttonRef: any) {
  const { customTw = '', variant = 'primary', text, testID, children, ...rest } = props;
  const style = getStyles({ variant, customTw });

  const renderElement = (): any => {
    if (children !== null && children !== undefined) {
      return children;
    } else if (
      (children === null || children === undefined) &&
      text !== null &&
      text !== undefined
    ) {
      return (
        <Text color={style.textColor} weight="medium" size="regular" text={text} />
      );
    }
    return <></>;
  };

  return (
    <TouchableOpacity
      {...rest}
      ref={buttonRef}
      testID={testID || 'button-component'}
      style={style.base}
    >
      {renderElement()}
    </TouchableOpacity>
  );
}

export default React.forwardRef<TouchableOpacityProps, ButtonType>(ButtonComponent);
