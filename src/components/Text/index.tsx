import React from 'react';
import { Text, TextProps } from 'react-native';
import { getStyles } from './styles';

export type TextType = {
  text: string;
  size?: string;
  brandColor?: string;
  opacity?: string;
  color?: string;
  weight?: string;
  customTw?: string;
} & TextProps;

function TextComponent(props: TextType, textRef: any) {
  const {
    text,
    size = 'tiny',
    weight = 'regular',
    brandColor,
    opacity,
    color,
    customTw = '',
    testID,
    style,
    ...rest
  } = props;

  const customStyles = getStyles({
    customTw,
    size,
    weight,
    color,
    opacity,
    brandColor,
  });

  return (
    <Text
      {...rest}
      ref={textRef}
      testID={testID || 'text-component'}
      style={[customStyles?.base, style]}
    >
      {text}
    </Text>
  ) as any;
}

export default React.forwardRef<TextProps, TextType>(TextComponent);
