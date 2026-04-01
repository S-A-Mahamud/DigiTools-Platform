// Main entry point for the Preact application
import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'

// Render the App component into the root element
render(<App />, document.getElementById('app'))