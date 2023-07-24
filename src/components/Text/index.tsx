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
  customClasses?: string;
  customStyles?: object;
} & TextProps;

function TextComponent(props: TextType, textRef: any) {
  const {
    text,
    size = 'tiny',
    weight = 'regular',
    brandColor,
    opacity,
    color,
    customClasses = '',
    customStyles = {},
    testID,
    ...rest
  } = props;

  const style = getStyles({
    customClasses,
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
      style={[style?.base, customStyles]}
    >
      {text}
    </Text>
  ) as any;
}

export default React.forwardRef<TextProps, TextType>(TextComponent);
