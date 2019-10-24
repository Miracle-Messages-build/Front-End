import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'

import PublicCase from './components/PublicCases/PublicCase.js'
import Footer from './components/Footer.js'

test('Miracle header found in AddPublicCase.js ', () => {
  const { getByText } = render(<PublicCase />);
  getByText(/missing/i)
})

test('Miracle header found in AddPublicCase.js ', () => {
  const { getByText } = render(<Footer />);
  getByText(/copyright/i)
})

