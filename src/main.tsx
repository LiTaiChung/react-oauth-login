import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'jotai';
import { myStore } from './store/common.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={myStore}>
      <GoogleOAuthProvider clientId="1071144891671-ck66h882bmvmm5cg5lp12t35f4fi6qm3.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
);
