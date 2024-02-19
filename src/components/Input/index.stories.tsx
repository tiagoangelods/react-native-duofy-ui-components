import React from 'react';
import Input from '.';
import { QrCodeIcon } from 'react-native-heroicons/outline';

export default {
  title: 'Input',
  component: Input,
  args: {},
};

export const Default = {};
export const WithPlaceholder = {
  args: {
    placeholder: 'Whith placeholder',
  },
};
export const newVariante = {
  args: {
    onError: false,
    placeholder: 'Variante line',
    styleInput: { borderColor: 'none' },
  },
};
export const onError = {
  args: {
    onError: true,
  },
};
export const withLabel = {
  args: {
    label: 'Text label',
  },
};
export const withCaption = {
  args: {
    caption: 'Text caption',
  },
};
export const withCaptionAndLabel = {
  args: {
    label: 'Text label',
    caption: 'Text caption',
  },
};
export const withCaptionAndLabelOnError = {
  args: {
    label: 'Text label',
    caption: 'Error message',
    onError: true,
  },
};
export const TypeMoney = {
  args: {
    type: 'money',
    value: 55.23,
  },
};
export const TypePassword = {
  args: {
    type: 'password',
  },
};
export const TypeSearch = {
  args: {
    type: 'search',
  },
};
export const TypeSearchCustomIcon = {
  args: {
    type: 'search',
    customIcon: <QrCodeIcon color="black" />,
  },
};
export const TypeEmail = {
  args: {
    type: 'email',
  },
};
export const TypeTel = {
  args: {
    type: 'tel',
  },
};
export const TypeNumber = {
  args: {
    type: 'numeric',
  },
};
