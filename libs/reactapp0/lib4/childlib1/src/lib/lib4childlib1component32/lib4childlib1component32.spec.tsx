import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component32 from './lib4childlib1component32';

describe('Lib4childlib1component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component32 />);
    expect(baseElement).toBeTruthy();
  });
});