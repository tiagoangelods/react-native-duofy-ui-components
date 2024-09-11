import React from 'react';
import { Modal } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { getStyles } from './styles';
import Container from '../Container';
import Text from '../Text';
import Button from '../Button';
import Divider from '../Divider';
function ModalComponent(props, modalRef) {
    const { title, open, closeFunction, children, testID, customTw, ...rest } = props;
    return (React.createElement(Modal, { ...rest, ref: modalRef, visible: open, testID: testID || 'modal-component', animationType: "slide", transparent: true, onRequestClose: closeFunction },
        React.createElement(Container, { style: getStyles({ customTw }).overlay },
            React.createElement(Container, { style: getStyles({ customTw }).base },
                React.createElement(Container, { style: getStyles({ customTw }).title },
                    React.createElement(Text, { size: "large", weight: "medium", text: title }),
                    React.createElement(Button, { testID: "close-button", variant: "transparent", customTw: "flex w-9 h-9 rounded", onPress: closeFunction },
                        React.createElement(XMarkIcon, { color: "black" }))),
                React.createElement(Divider, { customTw: "pt-1 pb-1" }),
                React.createElement(Container, null, children)))));
}
export default React.forwardRef(ModalComponent);
