import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component34 from './lib2childlib1component34';

describe('Lib2childlib1component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component34 />);
    expect(baseElement).toBeTruthy();
  });
});