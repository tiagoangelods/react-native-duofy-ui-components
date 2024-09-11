/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import Button from '.';
import { it, expect, beforeEach, afterEach, jest } from '@jest/globals';
const onPressMock = jest.fn();
beforeEach(() => {
    render(React.createElement(Button, { text: "testing button", onPress: onPressMock }));
});
afterEach(cleanup);
it('Render Button correctly', () => {
    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
});
it('Render Button correctly and be clickable', () => {
    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button.props.children[0].props.text).toBe('testing button');
    fireEvent.press(button);
    expect(onPressMock).toBeCalled();
});
