import IncrementalInput from '.';

export default {
  title: 'IncrementalInput',
  component: IncrementalInput,
  args: {
    value: 0,
    minValue: -1,
    maxValue: 1,
    onChangeText: () => console.log('onChangeText'),
  },
};

export const Default = {};
export const minusDisable = {
  args: {
    value: -1,
    minValue: -1,
    maxValue: 1,
    onChangeText: () => console.log('onChangeText'),
  },
};

export const plusDisable = {
  args: {
    value: 1,
    minValue: -1,
    maxValue: 1,
    onChangeText: () => console.log('onChangeText'),
  },
};

export const inputDisabled = {
  args: {
    value: 1,
    minValue: -1,
    maxValue: 1,
    disabled: true,
    onChangeText: () => console.log('onChangeText'),
  },
};
