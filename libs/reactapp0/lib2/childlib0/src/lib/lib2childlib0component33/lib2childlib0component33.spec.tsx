import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component33 from './lib2childlib0component33';

describe('Lib2childlib0component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component33 />);
    expect(baseElement).toBeTruthy();
  });
});