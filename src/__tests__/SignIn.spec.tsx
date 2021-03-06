import React from 'react';
import { render } from '@testing-library/react';

import SignIn from '../pages/SignIn';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Login Page', () => {
  it('should be able to login', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
