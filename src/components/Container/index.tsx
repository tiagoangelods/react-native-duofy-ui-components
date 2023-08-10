import React from 'react';
import { View, ViewProps } from 'react-native';
import { getStyles } from './styles';

export type ContainerType = {
  customTw?: string;
} & ViewProps;

function Container(props: ContainerType) {
  const { children, testID, customTw, style, ...rest } = props;
  return (
    <View
      {...rest}
      testID={testID || 'container-component'}
      style={[getStyles({ customTw }).base, style]}
    >
      {children}
    </View>
  );
}

export default Container;
