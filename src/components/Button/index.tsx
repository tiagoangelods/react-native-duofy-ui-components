import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';

export type ButtonType = {
  text: string;
  variant?: string;
  color?: string;
} & TouchableOpacityProps;

function ButtonComponent(props: ButtonType, buttonRef: any) {
  const { text, variant = 'primary', testID, ...rest } = props;
  const style = getStyles({ variant });

  return (
    <TouchableOpacity
      {...rest}
      ref={buttonRef}
      testID={testID || 'button-component'}
      style={style.base}
    >
      <Text color={style.textColor} weight="medium" size="regular" text={text} />
    </TouchableOpacity>
  );
}

export default React.forwardRef<TouchableOpacityProps, ButtonType>(ButtonComponent);
