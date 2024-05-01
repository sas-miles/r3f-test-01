import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import App2 from './App2.jsx' // Import the second app component

// Determine which component to render based on the current URL
let Component
if (window.location.href === 'https://r3f-01.webflow.io/') {
  Component = App
} else if (window.location.href === 'https://r3f-01.webflow.io/level-two') {
  Component = App2
} else {
  Component = () => <div>404 Not Found</div>
}

// Mount the React instance
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
)
