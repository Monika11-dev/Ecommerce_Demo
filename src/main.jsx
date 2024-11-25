import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CartContextProvider from './ContextAPI/CartContextProvider.jsx';

createRoot(document.getElementById('root')).render(
 <CartContextProvider>
 
  <StrictMode>
    <App />
  </StrictMode>
 
  </CartContextProvider>,
  
)
