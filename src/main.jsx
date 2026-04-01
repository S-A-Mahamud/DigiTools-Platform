// Main entry point for the React application
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app.jsx';

// Render the App component into the root element
createRoot(document.getElementById('app')).render(<App />);