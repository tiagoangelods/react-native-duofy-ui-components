import React from 'react';
import { TextInput } from 'react-native';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline';
import Container from '../Container';
import { getStyles } from './styles';
export default function IncrementalInput(props) {
    const { style, value, minValue = Number.MIN_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1, disabled = false, onChangeText, ...rest } = props;
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
    const handleChange = (customValue) => {
        onChangeText && onChangeText(customValue);
    };
    return (React.createElement(Container, { testID: "incremental-input", style: [customStyles.container, style] },
        React.createElement(MinusIcon, { testID: "dec-button", color: customStyles?.decColor, onPress: handleDecrement, disabled: Number(value) === minValue || disabled }),
        React.createElement(TextInput, { ...rest, editable: !disabled, keyboardType: "number-pad", style: customStyles?.input, value: value?.toString(), onChangeText: handleChange }),
        React.createElement(PlusIcon, { testID: "inc-button", color: customStyles?.incColor, disabled: Number(value) === maxValue || disabled, onPress: handleIncrement })));
}
