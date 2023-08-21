import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline';
import Container, { ContainerType } from '../Container';
import { getStyles } from './styles';

export type IncrementalInputType = {
  minValue?: number;
  maxValue?: number;
  stepValue?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
} & ContainerType &
  TextInputProps;

export default function IncrementalInput(props: IncrementalInputType) {
  const {
    style,
    value,
    minValue = Number.MIN_VALUE,
    maxValue = Number.MAX_VALUE,
    onDecrement,
    onIncrement,
    ...rest
  } = props;
  const customStyles = getStyles();

  return (
    <Container testID="incremental-input" style={[getStyles().container, style]}>
      <MinusIcon
        testID="dec-button"
        color={customStyles?.decColor}
        onPress={onDecrement}
        disabled={Number(value) === minValue}
      />
      <TextInput {...rest} value={value} keyboardType="number-pad" />
      <PlusIcon
        testID="inc-button"
        color={customStyles?.incColor}
        disabled={Number(value) === maxValue}
        onPress={onIncrement}
      />
    </Container>
  );
}
