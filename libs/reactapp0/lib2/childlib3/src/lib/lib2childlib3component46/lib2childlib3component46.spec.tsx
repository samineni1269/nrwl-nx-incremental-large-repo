import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component46 from './lib2childlib3component46';

describe('Lib2childlib3component46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component46 />);
    expect(baseElement).toBeTruthy();
  });
});