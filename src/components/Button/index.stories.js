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
export const Disabled = {
    args: {
        text: 'primary',
        disabled: true,
    },
};
export const DefaultLoading = {
    args: {
        text: 'primary',
        loading: true,
    },
};
export const Secondary = {
    args: {
        text: 'button secondary',
        variant: 'secondary',
    },
};
export const SecondaryDisabled = {
    args: {
        text: 'button secondary',
        variant: 'secondary',
        disabled: true,
    },
};
export const SecondaryLoading = {
    args: {
        text: 'button secondary',
        variant: 'secondary',
        loading: true,
    },
};
export const Outline = {
    args: {
        text: 'button outline',
        variant: 'outline',
    },
};
export const OutlineDisabled = {
    args: {
        text: 'button outline',
        variant: 'outline',
        disabled: true,
    },
};
export const OutlineLoading = {
    args: {
        text: 'button outline',
        variant: 'outline',
        loading: true,
    },
};
export const Transparent = {
    args: {
        text: 'button transparent',
        variant: 'transparent',
    },
};
export const TransparentDisabled = {
    args: {
        text: 'button transparent',
        variant: 'transparent',
        disabled: true,
    },
};
export const TransparentLoading = {
    args: {
        text: 'button transparent',
        variant: 'transparent',
        loading: true,
    },
};
export const Card = {
    args: {
        text: 'card button',
        variant: 'card',
    },
};
export const CardLoading = {
    args: {
        text: 'card button',
        variant: 'card',
        loading: true,
    },
};
export const CardWithDifferentContent = {
    args: {
        variant: 'card',
        customTw: 'flex-col bg-brand-primary h-[120px] w-[320px] p-0',
        children: (React.createElement(View, null,
            React.createElement(Image, { source: {
                    uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
                    width: 272,
                    height: 92,
                } }))),
    },
};
export const CardWithDifferentContentLoading = {
    args: {
        variant: 'card',
        customTw: 'flex-col bg-brand-primary h-[120px] w-[320px] p-0',
        loading: true,
        children: (React.createElement(View, null,
            React.createElement(Image, { source: {
                    uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
                    width: 272,
                    height: 92,
                } }))),
    },
};
