import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ItemsPerPage from '../components/ItemsPerPageComponent';

describe('ItemsPerPage component', () => {
  it('renders buttons with correct links', () => {
    const item = 'example-item';
    render(<ItemsPerPage item={item} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);

    expect(links[0]).toHaveAttribute('href', `?item=${item}&itemsPage=4`);
    expect(links[1]).toHaveAttribute('href', `?item=${item}&itemsPage=8`);
    expect(links[2]).toHaveAttribute('href', `?item=${item}&itemsPage=12`);
    expect(links[3]).toHaveAttribute('href', `?item=${item}`);
  });

  it('renders button text correctly', () => {
    const item = 'example-item';
    render(<ItemsPerPage item={item} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('4');
    expect(buttons[1]).toHaveTextContent('8');
    expect(buttons[2]).toHaveTextContent('12');
    expect(buttons[3]).toHaveTextContent('100');
  });

  it('renders the container with correct styles', () => {
    const item = 'example-item';
    render(<ItemsPerPage item={item} />);

    const container = screen.getByTestId('items-per-page-container');
    expect(container).toHaveStyle('border: 1px solid #ccc');
    expect(container).toHaveStyle('padding: 8px 12px');
    expect(container).toHaveStyle('background-color: #f1f1f1');
    expect(container).toHaveClass('flex', 'items-end', 'text-sm', 'hidden', 'gap-2', 'lg:flex');
  });
});