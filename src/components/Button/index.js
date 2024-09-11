import React from 'react';
import { TouchableOpacity, ActivityIndicator, } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';
function ButtonComponent(props, buttonRef) {
    const { customTw = '', variant = 'primary', text, testID, children, loading = false, disabled = false, style, ...rest } = props;
    const customStyles = getStyles({ variant, customTw, disabled });
    const renderElement = () => {
        if (loading) {
            return React.createElement(ActivityIndicator, { color: customStyles?.textColor });
        }
        if (children !== null && children !== undefined) {
            return children;
        }
        else if ((children === null || children === undefined) &&
            text !== null &&
            text !== undefined) {
            return (React.createElement(Text, { color: customStyles.textColor, weight: "medium", size: "regular", text: text }));
        }
        return React.createElement(React.Fragment, null);
    };
    return (React.createElement(TouchableOpacity, { ...rest, ref: buttonRef, testID: testID || 'button-component', style: [customStyles.base, style], disabled: disabled || loading }, renderElement()));
}
export default React.forwardRef(ButtonComponent);
