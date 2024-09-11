/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react-native';
import IncrementalInput from '.';
import { it, expect, beforeEach } from '@jest/globals';
const onChangeText = jest.fn();
beforeEach(() => {
    cleanup();
    render(React.createElement(IncrementalInput, { value: "0", onChangeText: onChangeText }));
});
it('Render IncrementalInput correctly', () => {
    const incContainer = screen.getByTestId('incremental-input');
    expect(incContainer).toBeDefined();
});
it('Render IncrementalInput correctly and render dec-button', () => {
    const incContainer = screen.getByTestId('incremental-input');
    expect(incContainer).toBeDefined();
    const decButtom = screen.getByTestId('dec-button');
    expect(decButtom).toBeDefined();
});
it('Render IncrementalInput correctly and render inc-button', () => {
    const incContainer = screen.getByTestId('incremental-input');
    expect(incContainer).toBeDefined();
    const incButton = screen.getByTestId('inc-button');
    expect(incButton).toBeDefined();
});
