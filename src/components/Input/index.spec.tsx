/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import Input from '.';

import { it, expect, afterEach, jest } from '@jest/globals';

const mockedFunction = jest.fn();
afterEach(cleanup);

it('Render Input correctly', () => {
  render(<Input />);
  const textInput = screen.getByTestId('input-component');
  expect(textInput).toBeDefined();
});

it('Render Input correctly and to render only the input', () => {
  render(<Input />);
  const textInput = screen.getByTestId('input-component');
  expect(textInput).toBeDefined();
  expect(textInput.props.children.filter((item: any) => item)).toHaveLength(1);
});

it('Render Input correctly and to render input and label', () => {
  render(<Input label="text label" />);
  const textInput = screen.getByTestId('input-component');
  expect(textInput).toBeDefined();
  expect(textInput.props.children.filter((item: any) => item)).toHaveLength(2);
});

it('Render Input correctly and to render input, label and caption', () => {
  render(<Input label="text label" caption="text caption" />);
  const textInput = screen.getByTestId('input-component');
  expect(textInput).toBeDefined();
  expect(textInput.props.children.filter((item: any) => item)).toHaveLength(3);
});

it('Render Input correctly and to render input and have placeholder equal to `text placeholder`', () => {
  render(<Input placeholder="text placeholder" />);
  const textInput = screen.getByTestId('input-component');
  expect(textInput).toBeDefined();
  expect(textInput.props.children[1].props.children[0].props.placeholder).toBe(
    'text placeholder'
  );
});

it('Render Input correctly and to render input and have value equal to `text value`', () => {
  render(<Input value="text value" />);
  const textInput = screen.getByTestId('input-component');
  expect(textInput).toBeDefined();
  expect(textInput.props.children[1].props.children[0].props.value).toBe('text value');
});

it('Render Input correctly and to render input and execute function onFocus, onBlur, onChangeText', async () => {
  render(
    <Input
      value="text value"
      onChange={mockedFunction}
      onFocus={mockedFunction}
      onBlur={mockedFunction}
      onChangeText={mockedFunction}
    />
  );
  const textInput = screen.getByDisplayValue('text value');
  expect(textInput).toBeDefined();
  fireEvent(textInput, 'changeText', mockedFunction);
  fireEvent(textInput, 'change', mockedFunction);
  fireEvent(textInput, 'focus', mockedFunction);
  fireEvent(textInput, 'blur', mockedFunction);
  expect(mockedFunction).toBeCalledTimes(4);
});
