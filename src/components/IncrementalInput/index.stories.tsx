import IncrementalInput from '.';

export default {
  title: 'IncrementalInput',
  component: IncrementalInput,
  args: {
    minValue: -3,
    onIncrement: () => console.log('increment'),
    onDecrement: () => console.log('decrement'),
  },
};

export const Default = {};
