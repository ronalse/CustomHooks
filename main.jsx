import { createRoot } from 'react-dom/client';
import {Index} from './prueba/Index.jsx';

// Renderiza tu componente React en su lugar
const root = createRoot(document.getElementById('app'));
root.render(<Index/>);
