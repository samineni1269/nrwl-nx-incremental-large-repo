import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component25 from './lib3childlib1component25';

describe('Lib3childlib1component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component25 />);
    expect(baseElement).toBeTruthy();
  });
});