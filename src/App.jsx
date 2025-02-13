// Component
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';

// CSS
import './App.css';
import './styles/common.scss';

function App() {
  const isSessionExist = sessionStorage.getItem(`app-banking-session`);
  return isSessionExist ? <Dashboard /> : <Authentication />;
}

export default App
