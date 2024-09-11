/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react-native';
import Switch from '.';
import { it, expect, beforeEach, afterEach } from '@jest/globals';
beforeEach(() => {
    render(React.createElement(Switch, null));
});
afterEach(cleanup);
it('Render Switch correctly', () => {
    const switchComponent = screen.getByTestId('switch-component');
    expect(switchComponent).toBeDefined();
});
