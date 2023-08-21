import IncrementalInput from '.';

export default {
  title: 'IncrementalInput',
  component: IncrementalInput,
  args: {
    value: 0,
    incFunction: () => console.log('inc'),
    decFunction: () => console.log('dec'),
  },
};

export const Default = {};
