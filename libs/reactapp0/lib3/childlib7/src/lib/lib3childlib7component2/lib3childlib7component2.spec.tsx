import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component2 from './lib3childlib7component2';

describe('Lib3childlib7component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component2 />);
    expect(baseElement).toBeTruthy();
  });
});