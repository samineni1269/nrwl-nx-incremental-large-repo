import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component18 from './lib4childlib7component18';

describe('Lib4childlib7component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component18 />);
    expect(baseElement).toBeTruthy();
  });
});