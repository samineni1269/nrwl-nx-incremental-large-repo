import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component6 from './lib1childlib5component6';

describe('Lib1childlib5component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component6 />);
    expect(baseElement).toBeTruthy();
  });
});