import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component29 from './lib1childlib5component29';

describe('Lib1childlib5component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component29 />);
    expect(baseElement).toBeTruthy();
  });
});