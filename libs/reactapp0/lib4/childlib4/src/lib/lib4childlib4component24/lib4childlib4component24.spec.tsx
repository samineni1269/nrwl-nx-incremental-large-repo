import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component24 from './lib4childlib4component24';

describe('Lib4childlib4component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component24 />);
    expect(baseElement).toBeTruthy();
  });
});