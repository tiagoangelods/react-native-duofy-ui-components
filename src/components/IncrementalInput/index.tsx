import React from 'react';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline';
import Container, { ContainerType } from '../Container';
import { getStyles } from './styles';
import Text from '../Text';

export type IncrementalInputType = {
  value: number;
  incFunction: () => void;
  decFunction: () => void;
} & ContainerType;

export default function IncrementalInput(props: IncrementalInputType) {
  const { style, value, incFunction, decFunction } = props;
  const customStyles = getStyles();
  return (
    <Container testID="incremental-input" style={[getStyles().container, style]}>
      <MinusIcon
        testID="dec-button"
        color={customStyles?.decColor}
        onPress={decFunction}
      />
      <Text text={value?.toString()} />
      <PlusIcon
        testID="inc-button"
        color={customStyles?.incColor}
        onPress={incFunction}
      />
    </Container>
  );
}
