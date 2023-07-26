import Modal from '.';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'Modal',
    open: true,
  },
  argTypes: {
    closeFunction: { action: 'close' },
  },
};

export const Default = {};
