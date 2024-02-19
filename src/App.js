import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bat from './Bat';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>

      <Header cartCount={cartCount} />
      <Content updateCartCount={setCartCount} />
      </div>

  );
}

export default App;
