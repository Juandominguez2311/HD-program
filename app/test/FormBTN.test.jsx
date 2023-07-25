import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormBTN from '../components/FormBTN';

describe('FormBTN', () => {
  it('should render the button with the correct label', () => {
    const { getByText } = render(<FormBTN label="Click Me" />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('should call onClick handler when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<FormBTN label="Click Me" onClick={onClickMock} />);
    const button = getByText('Click Me');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should have the correct class when outline prop is true', () => {
    const { container } = render(<FormBTN label="Click Me" outline />);
    expect(container.firstChild).toHaveClass('bg-white');
    expect(container.firstChild).toHaveClass('text-black');
  });

  it('should have the correct class when small prop is true', () => {
    const { container } = render(<FormBTN label="Click Me" small />);
    expect(container.firstChild).toHaveClass('py-1');
    expect(container.firstChild).toHaveClass('text-sm');
    expect(container.firstChild).toHaveClass('border-[1px]');
  });

  it('should be disabled when disabled prop is true', () => {
    const { container } = render(<FormBTN label="Click Me" disabled />);
    expect(container.firstChild).toBeDisabled();
  });
});
