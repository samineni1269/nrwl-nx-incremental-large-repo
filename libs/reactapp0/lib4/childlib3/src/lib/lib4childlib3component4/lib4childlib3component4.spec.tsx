import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component4 from './lib4childlib3component4';

describe('Lib4childlib3component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component4 />);
    expect(baseElement).toBeTruthy();
  });
});