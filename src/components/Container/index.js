import React from 'react';
import { View } from 'react-native';
import { getStyles } from './styles';
function Container(props) {
    const { children, testID, customTw, style, ...rest } = props;
    return (React.createElement(View, { ...rest, testID: testID || 'container-component', style: [getStyles({ customTw }).base, style] }, children));
}
export default Container;
