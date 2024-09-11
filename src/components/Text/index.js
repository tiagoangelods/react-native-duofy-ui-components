import React from 'react';
import { Text } from 'react-native';
import { getStyles } from './styles';
function TextComponent(props, textRef) {
    const { text, size = 'tiny', weight = 'regular', brandColor, opacity, color, customTw = '', testID, style, ...rest } = props;
    const customStyles = getStyles({
        customTw,
        size,
        weight,
        color,
        opacity,
        brandColor,
    });
    return (React.createElement(Text, { ...rest, ref: textRef, testID: testID || 'text-component', style: [customStyles?.base, style] }, text));
}
export default React.forwardRef(TextComponent);
