import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component0 from './lib1childlib1component0';

describe('Lib1childlib1component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component0 />);
    expect(baseElement).toBeTruthy();
  });
});