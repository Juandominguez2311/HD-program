import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ItemsPerPage from '../components/ItemsPerPageComponent';

describe('ItemsPerPage component', () => {
  it('renders btn with correct links', () => {
    const item = 'example-item';
    render(<ItemsPerPage item={item} />);

    const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(4);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);

    expect(links[0]).toHaveAttribute('href', `?item=${item}&itemsPage=4`);
    expect(links[1]).toHaveAttribute('href', `?item=${item}&itemsPage=8`);
    expect(links[2]).toHaveAttribute('href', `?item=${item}&itemsPage=12`);
    expect(links[3]).toHaveAttribute('href', `?item=${item}`);
  });

  it('renders btn text correctly', () => {
    const item = 'example-item';
    render(<ItemsPerPage item={item} />);

    const btn = screen.getAllByRole('button');
    expect(btn[0]).toHaveTextContent('4');
    expect(btn[1]).toHaveTextContent('8');
    expect(btn[2]).toHaveTextContent('12');
    expect(btn[3]).toHaveTextContent('100');
  });

  it('renders container correct styles', () => {
    const item = 'example-item';
    render(<ItemsPerPage item={item} />);

    const container = screen.getByTestId('items-per-page-container');
    expect(container).toHaveStyle('border: 1px solid #ccc');
    expect(container).toHaveStyle('padding: 8px 12px');
    expect(container).toHaveStyle('background-color: #f1f1f1');
    expect(container).toHaveClass('flex', 'items-end', 'text-sm', 'hidden', 'gap-2', 'lg:flex');
  });
});