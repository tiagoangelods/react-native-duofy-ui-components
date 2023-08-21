import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline';
import Container, { ContainerType } from '../Container';
import { getStyles } from './styles';

export type IncrementalInputType = {
  minValue?: number;
  maxValue?: number;
  stepValue?: number;
} & ContainerType &
  TextInputProps;

export default function IncrementalInput(props: IncrementalInputType) {
  const {
    style,
    value = 0,
    minValue = Number.MIN_VALUE,
    maxValue = Number.MAX_VALUE,
    stepValue = 1,
    onChangeText,
    ...rest
  } = props;
  const customStyles = getStyles();

  const handleDecrement = () => {
    if (Number(value) > minValue) {
      handleChange(Number(value) - stepValue);
    }
  };

  const handleIncrement = () => {
    if (Number(value) < maxValue) {
      handleChange(Number(value) + stepValue);
    }
  };

  const handleChange = (changeValue: any) => {
    onChangeText && onChangeText(changeValue);
  };
  return (
    <Container testID="incremental-input" style={[getStyles().container, style]}>
      <MinusIcon
        testID="dec-button"
        color={customStyles?.decColor}
        onPress={handleDecrement}
        disabled={Number(value) === minValue}
      />
      <TextInput
        {...rest}
        keyboardType="number-pad"
        value={value?.toString()}
        onChangeText={handleChange}
      />
      <PlusIcon
        testID="inc-button"
        color={customStyles?.incColor}
        disabled={Number(value) === maxValue}
        onPress={handleIncrement}
      />
    </Container>
  );
}
