// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClerkProvider } from '@clerk/clerk-react';

// Use Vite's environment variables to get your publishable key
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk API Key:", clerkFrontendApi);

if (!clerkFrontendApi) {
  throw new Error('Clerk publishable key is missing.');
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
