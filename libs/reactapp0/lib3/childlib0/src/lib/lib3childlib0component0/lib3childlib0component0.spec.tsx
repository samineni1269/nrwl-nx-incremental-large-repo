import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component0 from './lib3childlib0component0';

describe('Lib3childlib0component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component0 />);
    expect(baseElement).toBeTruthy();
  });
});