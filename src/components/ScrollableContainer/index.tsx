import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import { getStyles } from './styles';

type ScrollViewType = {
  customTw?: string;
} & ScrollViewProps;

function ScrollableContainer(props: ScrollViewType) {
  const { children, testID, customTw, style, ...rest } = props;
  return (
    <ScrollView
      {...rest}
      testID={testID || 'container-component'}
      style={[getStyles({ customTw }).base, style]}
    >
      {children}
    </ScrollView>
  );
}

export default ScrollableContainer;
