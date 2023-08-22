import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline';
import Container, { ContainerType } from '../Container';
import { getStyles } from './styles';

export type IncrementalInputType = {
  minValue?: number;
  maxValue?: number;
  stepValue?: number;
  disabled?: boolean;
} & ContainerType &
  TextInputProps;

export default function IncrementalInput(props: IncrementalInputType) {
  const {
    style,
    value,
    minValue = Number.MIN_VALUE,
    maxValue = Number.MAX_VALUE,
    stepValue = 1,
    disabled = false,
    onChangeText,
    ...rest
  } = props;
  const customStyles = getStyles({
    inputDisabled: disabled,
    minusDisabled: Number(value) === minValue || disabled,
    plusDisabled: Number(value) === maxValue || disabled,
  });

  const handleIncrement = () => {
    if (onChangeText && Number(value) < maxValue)
      handleChange(Number(value) + stepValue);
  };

  const handleDecrement = () => {
    if (onChangeText && Number(value) > minValue)
      handleChange(Number(value) - stepValue);
  };

  const handleChange = (customValue: any) => {
    onChangeText && onChangeText(customValue);
  };

  return (
    <Container testID="incremental-input" style={[customStyles.container, style]}>
      <MinusIcon
        testID="dec-button"
        color={customStyles?.decColor}
        onPress={handleDecrement}
        disabled={Number(value) === minValue || disabled}
      />
      <TextInput
        {...rest}
        editable={!disabled}
        keyboardType="number-pad"
        style={customStyles?.input}
        value={value?.toString()}
        onChangeText={handleChange}
      />
      <PlusIcon
        testID="inc-button"
        color={customStyles?.incColor}
        disabled={Number(value) === maxValue || disabled}
        onPress={handleIncrement}
      />
    </Container>
  );
}
