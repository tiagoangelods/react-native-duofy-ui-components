import React from 'react';
import { View, ViewProps } from 'react-native';
import { getStyles } from './styles';

type ViewType = {
  customTw?: string;
} & ViewProps;

function Container(props: ViewType) {
  const { children, customTw, ...rest } = props;
  return (
    <View {...rest} style={getStyles({ customTw }).base}>
      {children}
    </View>
  );
}

export default Container;
