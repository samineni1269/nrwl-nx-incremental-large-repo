import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component43 from './lib4childlib7component43';

describe('Lib4childlib7component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component43 />);
    expect(baseElement).toBeTruthy();
  });
});