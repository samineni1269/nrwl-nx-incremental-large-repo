import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component22 from './lib2childlib7component22';

describe('Lib2childlib7component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component22 />);
    expect(baseElement).toBeTruthy();
  });
});