import React from 'react';
import { ScrollView } from 'react-native';
import { getStyles } from './styles';
function ScrollableContainer(props) {
    const { children, testID, customTw, style, ...rest } = props;
    return (React.createElement(ScrollView, { ...rest, testID: testID || 'container-component', style: [getStyles({ customTw }).base, style] }, children));
}
export default ScrollableContainer;
