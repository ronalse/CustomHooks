import { createRoot } from 'react-dom/client';
import {App} from './src/App.jsx';
import { LanguageProvider } from './src/Components/LanguageContext.jsx';

// Renderiza tu componente React en su lugar
const root = createRoot(document.getElementById('app'));
root.render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
);
