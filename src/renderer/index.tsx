import { createRoot } from 'react-dom/client';
import Routes from './routes';
import './styles/App.global.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Routes />);
