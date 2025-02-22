import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/main';
import "./scss/index.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Main />
  </StrictMode>,
)
