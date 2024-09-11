import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';
function Divider(props) {
    const { testID, customTw, size = 1, text, ...rest } = props;
    const styles = getStyles({ customTw, size });
    const getDivider = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(View, { style: styles.divider }),
            text && React.createElement(Text, { style: styles.dividerText, text: text }),
            React.createElement(View, { style: styles.divider })));
    };
    return (React.createElement(View, { ...rest, testID: testID || 'divider-component', style: styles.base }, getDivider()));
}
export default Divider;
