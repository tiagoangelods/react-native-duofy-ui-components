import React from 'react';
import { View, Image } from 'react-native';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    text: 'primary',
  },
};
export const Secondary = {
  args: {
    text: 'button secondary',
    variant: 'secondary',
  },
};
export const Outline = {
  args: {
    text: 'button outline',
    variant: 'outline',
  },
};
export const Transparent = {
  args: {
    text: 'button transparent',
    variant: 'transparent',
  },
};
export const Card = {
  args: {
    text: 'card button',
    variant: 'card',
  },
};
export const CardWithDifferentContent = {
  args: {
    variant: 'card',
    customTw: 'flex-col bg-brand-primary h-[120px] w-[320px] p-0',
    children: (
      <View>
        <Image
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
            width: 272,
            height: 92,
          }}
        />
      </View>
    ),
  },
};
