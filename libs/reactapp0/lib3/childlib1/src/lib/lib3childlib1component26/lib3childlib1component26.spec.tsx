import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component26 from './lib3childlib1component26';

describe('Lib3childlib1component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component26 />);
    expect(baseElement).toBeTruthy();
  });
});