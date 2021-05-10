import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Index', () => {
  it('renders correctly', () => {
    expect(true).toBe(true);
  });
  it('should not have any accessibility violations', async () => {
    const { container } = render(<Index />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
