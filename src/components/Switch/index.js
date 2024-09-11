import React from 'react';
import { Switch } from 'react-native';
function SwitchComponent(props, switchRef) {
    const { value, testID, disabledTrackColor = 'rgba(13, 16, 16, 0.6)', enabledTrackColor = 'rgba(248, 195, 94, 1)', enabledThumbColor = '#ffffff', disabledThumbColor = '#ffffff', ...rest } = props;
    return (React.createElement(Switch, { ...rest, ref: switchRef, testID: testID || 'switch-component', trackColor: { false: disabledTrackColor, true: enabledTrackColor }, thumbColor: value ? enabledThumbColor : disabledThumbColor, value: value }));
}
export default React.forwardRef(SwitchComponent);
