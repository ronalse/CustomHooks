import { createRoot } from 'react-dom/client';
import {App} from './src/App.jsx';

// Renderiza tu componente React en su lugar
const root = createRoot(document.getElementById('app'));
root.render(<App/>);
