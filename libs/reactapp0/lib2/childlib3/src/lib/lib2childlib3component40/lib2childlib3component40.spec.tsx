import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component40 from './lib2childlib3component40';

describe('Lib2childlib3component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component40 />);
    expect(baseElement).toBeTruthy();
  });
});