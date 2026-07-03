import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  const hostname = window.location.hostname;
  const isDevOrPreview = hostname.includes('ais-dev-') || 
                         hostname.includes('ais-pre-') || 
                         hostname.includes('localhost') || 
                         hostname.includes('127.0.0.1');

  if (isDevOrPreview) {
    // Dynamically unregister any active service worker to prevent "Page not found" caching errors during development
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister().then((success) => {
          if (success) {
            console.log('[PWA] Unregistered stale service worker in dev/preview mode');
          }
        });
      }
    });

    // Clear caches to ensure hot updates and fresh builds are loaded immediately
    if ('caches' in window) {
      caches.keys().then((keys) => {
        keys.forEach((key) => {
          caches.delete(key).then(() => {
            console.log('[PWA] Cleared stale cache:', key);
          });
        });
      });
    }
  } else {
    // Only register service worker in standard production deployment environment
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registered successfully:', reg.scope);
        })
        .catch((err) => {
          console.error('[PWA] Service Worker registration failed:', err);
        });
    });
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
