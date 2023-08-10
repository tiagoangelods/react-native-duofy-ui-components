import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { getStyles } from './styles';
import Container from '../Container';
import Text from '../Text';
import Button from '../Button';
import Divider from '../Divider';

export type ModalType = {
  title: string;
  open: boolean;
  closeFunction: () => void;
  customTw?: string;
} & ModalProps;

function ModalComponent(props: ModalType, modalRef: any) {
  const { title, open, closeFunction, children, testID, customTw, ...rest } = props;
  return (
    <Modal
      {...rest}
      ref={modalRef}
      visible={open}
      testID={testID || 'modal-component'}
      animationType="slide"
      transparent={true}
      onRequestClose={closeFunction}
    >
      <Container style={getStyles({ customTw }).overlay}>
        <Container style={getStyles({ customTw }).base}>
          <Container style={getStyles({ customTw }).title}>
            <Text size="large" weight="medium" text={title} />
            <Button
              testID="close-button"
              variant="transparent"
              customTw="flex w-9 h-9 rounded"
              onPress={closeFunction}
            >
              <XMarkIcon color="black" />
            </Button>
          </Container>
          <Divider customTw="pt-1 pb-1" />
          <Container>{children}</Container>
        </Container>
      </Container>
    </Modal>
  );
}

export default React.forwardRef<ModalProps, ModalType>(ModalComponent);
