import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component0 from './lib4childlib7component0';

describe('Lib4childlib7component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component0 />);
    expect(baseElement).toBeTruthy();
  });
});