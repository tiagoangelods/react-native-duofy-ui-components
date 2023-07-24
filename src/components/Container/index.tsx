import React from 'react';
import { View, ViewProps } from 'react-native';
import { getStyles } from './styles';

type ViewType = {
  customTw?: string;
} & ViewProps;

function Container(props: ViewType) {
  const { children, testID, customTw, ...rest } = props;
  return (
    <View
      {...rest}
      testID={testID || 'container-component'}
      style={getStyles({ customTw }).base}
    >
      {children}
    </View>
  );
}

export default Container;
