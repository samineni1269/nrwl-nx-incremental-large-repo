import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component0 from './lib1childlib9component0';

describe('Lib1childlib9component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component0 />);
    expect(baseElement).toBeTruthy();
  });
});